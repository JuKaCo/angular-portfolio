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
      background: rgba(0, 0, 0, 0.7);
      z-index: -1;
    }
  `]
})
export class Background3DComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('canvas') private canvasRef!: ElementRef;

  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private points!: THREE.Points;
  private lines!: THREE.LineSegments;
  private animationFrameId: number = 0;
  private mouseX: number = 0;
  private mouseY: number = 0;

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
    if (this.points) {
      this.scene.remove(this.points);
      (this.points.geometry as THREE.BufferGeometry).dispose();
      (this.points.material as THREE.Material).dispose();
    }
    if (this.lines) {
      this.scene.remove(this.lines);
      (this.lines.geometry as THREE.BufferGeometry).dispose();
      (this.lines.material as THREE.Material).dispose();
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
    
    // Camera setup
    this.camera = new THREE.PerspectiveCamera(
      75, window.innerWidth / window.innerHeight, 0.1, 1000
    );
    this.camera.position.z = 50;

    // Renderer setup
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(0x000000, 1);

    // Create points
    const pointsGeometry = new THREE.BufferGeometry();
    const pointsCount = 1000;
    const positions = new Float32Array(pointsCount * 3);
    const colors = new Float32Array(pointsCount * 3);

    for(let i = 0; i < pointsCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 100;
      positions[i + 1] = (Math.random() - 0.5) * 100;
      positions[i + 2] = (Math.random() - 0.5) * 100;

      // Color gradient from purple to blue (más suave y menos brillante)
      colors[i] = 0.2;  // R
      colors[i + 1] = 0.2;  // G
      colors[i + 2] = 0.5;  // B
    }

    pointsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    pointsGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const pointsMaterial = new THREE.PointsMaterial({
      size: 0.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending
    });

    this.points = new THREE.Points(pointsGeometry, pointsMaterial);

    // Create lines
    const linesGeometry = new THREE.BufferGeometry();
    const linePositions = new Float32Array(pointsCount * 2 * 3); // 2 points per line
    const lineColors = new Float32Array(pointsCount * 2 * 3);

    for(let i = 0; i < pointsCount * 3; i += 6) {
      // First point
      linePositions[i] = positions[i/2];
      linePositions[i + 1] = positions[i/2 + 1];
      linePositions[i + 2] = positions[i/2 + 2];

      // Second point (connecting to nearest point)
      let nearestIndex = this.findNearestPoint(positions[i/2], positions[i/2 + 1], positions[i/2 + 2], positions);
      linePositions[i + 3] = positions[nearestIndex];
      linePositions[i + 4] = positions[nearestIndex + 1];
      linePositions[i + 5] = positions[nearestIndex + 2];

      // Line colors (gradient from purple to blue)
      lineColors[i] = 0.2;
      lineColors[i + 1] = 0.2;
      lineColors[i + 2] = 0.5;
      lineColors[i + 3] = 0.2;
      lineColors[i + 4] = 0.2;
      lineColors[i + 5] = 0.5;
    }

    linesGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    linesGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

    const linesMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.1,
      blending: THREE.AdditiveBlending
    });

    this.lines = new THREE.LineSegments(linesGeometry, linesMaterial);

    this.scene.add(this.points);
    this.scene.add(this.lines);
  }

  private findNearestPoint(x: number, y: number, z: number, positions: Float32Array): number {
    let minDist = Infinity;
    let nearestIndex = 0;

    for(let i = 0; i < positions.length; i += 3) {
      if (positions[i] === x && positions[i + 1] === y && positions[i + 2] === z) continue;

      const dx = positions[i] - x;
      const dy = positions[i + 1] - y;
      const dz = positions[i + 2] - z;
      const dist = dx * dx + dy * dy + dz * dz;

      if (dist < minDist) {
        minDist = dist;
        nearestIndex = i;
      }
    }

    return nearestIndex;
  }

  private animate() {
    this.animationFrameId = requestAnimationFrame(() => this.animate());

    if (this.points && this.lines) {
      // Rotate based on mouse position
      const targetRotationX = (this.mouseY * 0.001);
      const targetRotationY = (this.mouseX * 0.001);

      this.points.rotation.x += (targetRotationX - this.points.rotation.x) * 0.05;
      this.points.rotation.y += (targetRotationY - this.points.rotation.y) * 0.05;
      
      this.lines.rotation.x = this.points.rotation.x;
      this.lines.rotation.y = this.points.rotation.y;
    }

    this.renderer.render(this.scene, this.camera);
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
}
