import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-background3d',
  template: `
    <canvas #canvas></canvas>
    <div class="overlay"></div>
  `,
  styles: [`
    canvas {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
      z-index: -1;
    }
  `]
})
export class Background3DComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('canvas') private canvasRef!: ElementRef;

  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private starField!: THREE.Points;
  private nebula!: THREE.Points;
  private animationFrameId: number = 0;
  private mouseX: number = 0;
  private mouseY: number = 0;
  private time: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.createScene();
    this.animate();
    this.handleResize();
    this.handleMouseMove();
  }

  ngOnDestroy(): void {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    if (this.starField) {
      this.scene.remove(this.starField);
      (this.starField.geometry as THREE.BufferGeometry).dispose();
      (this.starField.material as THREE.Material).dispose();
    }
    if (this.nebula) {
      this.scene.remove(this.nebula);
      (this.nebula.geometry as THREE.BufferGeometry).dispose();
      (this.nebula.material as THREE.Material).dispose();
    }
    if (this.renderer) {
      this.renderer.dispose();
    }
  }

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  private createScene() {
    // Scene setup
    this.scene = new THREE.Scene();
    
    // Camera setup with increased FOV for more dramatic effect
    this.camera = new THREE.PerspectiveCamera(
      85, window.innerWidth / window.innerHeight, 0.1, 2000
    );
    this.camera.position.z = 100;

    // Renderer setup with better quality
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(0x000000, 1);
    this.renderer.setPixelRatio(window.devicePixelRatio);

    // Create starfield
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 3000;
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);
    const starSizes = new Float32Array(starCount);

    for(let i = 0; i < starCount * 3; i += 3) {
      // Distribute stars in a sphere
      const radius = Math.random() * 1000;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      
      starPositions[i] = radius * Math.sin(phi) * Math.cos(theta);
      starPositions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      starPositions[i + 2] = radius * Math.cos(phi);

      // Random star colors (white to blue to purple)
      const colorChoice = Math.random();
      if (colorChoice > 0.8) {
        // White stars
        starColors[i] = 1.0;
        starColors[i + 1] = 1.0;
        starColors[i + 2] = 1.0;
      } else if (colorChoice > 0.4) {
        // Blue stars
        starColors[i] = 0.4;
        starColors[i + 1] = 0.6;
        starColors[i + 2] = 1.0;
      } else {
        // Purple stars
        starColors[i] = 0.6;
        starColors[i + 1] = 0.2;
        starColors[i + 2] = 0.8;
      }

      // Random star sizes
      starSizes[i/3] = Math.random() * 2 + 0.5;
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));
    starGeometry.setAttribute('size', new THREE.BufferAttribute(starSizes, 1));

    const starMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 }
      },
      vertexShader: `
        attribute float size;
        varying vec3 vColor;
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        void main() {
          float r = length(gl_PointCoord - vec2(0.5, 0.5));
          if (r > 0.5) discard;
          gl_FragColor = vec4(vColor, 1.0) * (1.0 - 2.0 * r);
        }
      `,
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending
    });

    this.starField = new THREE.Points(starGeometry, starMaterial);

    // Create nebula effect
    const nebulaGeometry = new THREE.BufferGeometry();
    const nebulaCount = 1000;
    const nebulaPositions = new Float32Array(nebulaCount * 3);
    const nebulaColors = new Float32Array(nebulaCount * 3);
    const nebulaSizes = new Float32Array(nebulaCount);

    for(let i = 0; i < nebulaCount * 3; i += 3) {
      // Create cloud-like formations
      const angle = Math.random() * Math.PI * 2;
      const radius = 50 + Math.random() * 100;
      const height = (Math.random() - 0.5) * 50;
      
      nebulaPositions[i] = Math.cos(angle) * radius;
      nebulaPositions[i + 1] = height;
      nebulaPositions[i + 2] = Math.sin(angle) * radius;

      // Nebula colors (purple to blue)
      nebulaColors[i] = 0.5 + Math.random() * 0.2;
      nebulaColors[i + 1] = 0.2 + Math.random() * 0.1;
      nebulaColors[i + 2] = 0.8 + Math.random() * 0.2;

      // Larger sizes for nebula particles
      nebulaSizes[i/3] = Math.random() * 15 + 5;
    }

    nebulaGeometry.setAttribute('position', new THREE.BufferAttribute(nebulaPositions, 3));
    nebulaGeometry.setAttribute('color', new THREE.BufferAttribute(nebulaColors, 3));
    nebulaGeometry.setAttribute('size', new THREE.BufferAttribute(nebulaSizes, 1));

    const nebulaMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 }
      },
      vertexShader: `
        attribute float size;
        varying vec3 vColor;
        uniform float time;
        void main() {
          vColor = color;
          vec3 pos = position;
          pos.x += sin(time * 0.001 + position.z * 0.05) * 2.0;
          pos.y += cos(time * 0.001 + position.x * 0.05) * 2.0;
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        void main() {
          float r = length(gl_PointCoord - vec2(0.5, 0.5));
          if (r > 0.5) discard;
          gl_FragColor = vec4(vColor, 0.3) * (1.0 - 2.0 * r * r);
        }
      `,
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.nebula = new THREE.Points(nebulaGeometry, nebulaMaterial);

    this.scene.add(this.starField);
    this.scene.add(this.nebula);
  }

  private handleResize() {
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }

  private handleMouseMove() {
    window.addEventListener('mousemove', (event) => {
      this.mouseX = event.clientX - window.innerWidth / 2;
      this.mouseY = event.clientY - window.innerHeight / 2;
    });
  }

  private animate() {
    this.animationFrameId = requestAnimationFrame(() => this.animate());

    this.time += 1;

    if (this.starField && this.nebula) {
      // Smooth camera movement based on mouse position
      this.camera.position.x += (this.mouseX * 0.05 - this.camera.position.x) * 0.01;
      this.camera.position.y += (-this.mouseY * 0.05 - this.camera.position.y) * 0.01;
      this.camera.lookAt(this.scene.position);

      // Update nebula animation
      (this.nebula.material as THREE.ShaderMaterial).uniforms.time.value = this.time;

      // Slow rotation of the entire scene
      this.scene.rotation.y += 0.0003;
    }

    this.renderer.render(this.scene, this.camera);
  }
}
