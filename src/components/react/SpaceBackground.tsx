import { useMemo, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

/** Ported from the original Angular `background3d` Three.js component:
 *  a 3000-point spherical starfield + 1000-particle nebula with additive
 *  blending, mouse-parallax camera, and slow scene rotation. */

const STAR_COUNT = 3000;
const NEBULA_COUNT = 1000;

const starVertex = /* glsl */ `
  attribute float size;
  varying vec3 vColor;
  void main() {
    vColor = color;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = size * (300.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;
const starFragment = /* glsl */ `
  varying vec3 vColor;
  void main() {
    float r = length(gl_PointCoord - vec2(0.5));
    if (r > 0.5) discard;
    gl_FragColor = vec4(vColor, 1.0) * (1.0 - 2.0 * r);
  }
`;
const nebulaVertex = /* glsl */ `
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
`;
const nebulaFragment = /* glsl */ `
  varying vec3 vColor;
  void main() {
    float r = length(gl_PointCoord - vec2(0.5));
    if (r > 0.5) discard;
    gl_FragColor = vec4(vColor, 0.3) * (1.0 - 2.0 * r * r);
  }
`;

function useStarGeometry() {
  return useMemo(() => {
    const positions = new Float32Array(STAR_COUNT * 3);
    const colors = new Float32Array(STAR_COUNT * 3);
    const sizes = new Float32Array(STAR_COUNT);
    for (let i = 0; i < STAR_COUNT * 3; i += 3) {
      const radius = Math.random() * 1000;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      positions[i] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = radius * Math.cos(phi);
      const choice = Math.random();
      if (choice > 0.8) {
        colors[i] = 1; colors[i + 1] = 1; colors[i + 2] = 1; // white
      } else if (choice > 0.4) {
        colors[i] = 0.4; colors[i + 1] = 0.6; colors[i + 2] = 1; // blue
      } else {
        colors[i] = 0.6; colors[i + 1] = 0.2; colors[i + 2] = 0.8; // purple
      }
      sizes[i / 3] = Math.random() * 2 + 0.5;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    return geo;
  }, []);
}

function useNebulaGeometry() {
  return useMemo(() => {
    const positions = new Float32Array(NEBULA_COUNT * 3);
    const colors = new Float32Array(NEBULA_COUNT * 3);
    const sizes = new Float32Array(NEBULA_COUNT);
    for (let i = 0; i < NEBULA_COUNT * 3; i += 3) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 50 + Math.random() * 100;
      const height = (Math.random() - 0.5) * 50;
      positions[i] = Math.cos(angle) * radius;
      positions[i + 1] = height;
      positions[i + 2] = Math.sin(angle) * radius;
      colors[i] = 0.5 + Math.random() * 0.2;
      colors[i + 1] = 0.2 + Math.random() * 0.1;
      colors[i + 2] = 0.8 + Math.random() * 0.2;
      sizes[i / 3] = Math.random() * 15 + 5;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    return geo;
  }, []);
}

function Scene({ animate }: { animate: boolean }) {
  const starGeo = useStarGeometry();
  const nebulaGeo = useNebulaGeometry();
  const group = useRef<THREE.Group>(null);
  const nebulaMat = useRef<THREE.ShaderMaterial>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const scroll = useRef(0);
  const pitch = useRef(0);
  const { camera } = useThree();

  useEffect(() => {
    if (!animate) return;
    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX - window.innerWidth / 2;
      mouse.current.y = e.clientY - window.innerHeight / 2;
    };
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      scroll.current = max > 0 ? window.scrollY / max : 0;
    };
    onScroll();
    window.addEventListener('mousemove', onMove);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('scroll', onScroll);
    };
  }, [animate]);

  useFrame((_, delta) => {
    if (!animate) return;
    const t = performance.now();
    // Scroll travel: fly deeper into the starfield as the page scrolls,
    // pulling the camera from z=100 toward the nebula core.
    const targetZ = 100 - scroll.current * 55;
    camera.position.x += (mouse.current.x * 0.05 - camera.position.x) * 0.01;
    camera.position.y += (-mouse.current.y * 0.05 - camera.position.y) * 0.01;
    camera.position.z += (targetZ - camera.position.z) * 0.04;
    camera.lookAt(0, 0, 0);
    if (nebulaMat.current) nebulaMat.current.uniforms.time.value = t;
    if (group.current) {
      pitch.current += (scroll.current * 0.3 - pitch.current) * 0.04;
      group.current.rotation.y += delta * 0.018;
      group.current.rotation.x = pitch.current;
    }
  });

  return (
    <group ref={group}>
      <points geometry={starGeo}>
        <shaderMaterial
          vertexShader={starVertex}
          fragmentShader={starFragment}
          vertexColors
          transparent
          blending={THREE.AdditiveBlending}
        />
      </points>
      <points geometry={nebulaGeo}>
        <shaderMaterial
          ref={nebulaMat}
          uniforms={{ time: { value: 0 } }}
          vertexShader={nebulaVertex}
          fragmentShader={nebulaFragment}
          vertexColors
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}

export default function SpaceBackground() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{ position: 'fixed', inset: 0, zIndex: -1, background: '#05060d' }}
    >
      <Canvas
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
        camera={{ fov: 85, position: [0, 0, 100], near: 0.1, far: 2000 }}
      >
        <Scene animate={!reduced} />
      </Canvas>
      {/* Dark overlay for content legibility (matches original rgba(0,0,0,0.6)). */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 50% 30%, rgba(5,6,13,0.35), rgba(5,6,13,0.75) 70%)',
        }}
      />
    </div>
  );
}
