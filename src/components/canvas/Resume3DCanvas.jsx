import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Resume3DCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x020617, 0.015);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 15);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // 2. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x38bdf8, 3, 50);
    cyanLight.position.set(10, 10, 10);
    scene.add(cyanLight);

    const purpleLight = new THREE.PointLight(0x6366f1, 3, 50);
    purpleLight.position.set(-10, -10, 10);
    scene.add(purpleLight);

    // 3. Floating Starfield / Code Particles
    const particleCount = prefersReducedMotion ? 300 : 1200;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0x38bdf8);
    const color2 = new THREE.Color(0x6366f1);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 80;

      const mixedColor = Math.random() > 0.5 ? color1 : color2;
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.25,
      vertexColors: true,
      transparent: true,
      opacity: 0.75
    });

    const particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);

    // 4. Holographic Glass Resume Card Mesh
    const cardGeometry = new THREE.BoxGeometry(6, 8, 0.2);
    const cardMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x0f172a,
      metalness: 0.1,
      roughness: 0.2,
      transmission: 0.6,
      thickness: 0.5,
      transparent: true,
      opacity: 0.85,
      reflectivity: 0.9,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1
    });

    const glassCard = new THREE.Mesh(cardGeometry, cardMaterial);
    glassCard.position.set(0, 0, 0);
    scene.add(glassCard);

    // 5. 3D Rotating Tech Stack Nodes
    const nodesGroup = new THREE.Group();
    const nodeGeometry = new THREE.IcosahedronGeometry(0.6, 0);

    const nodeColors = [0x38bdf8, 0xa3e635, 0xf59e0b, 0xa855f7];
    for (let i = 0; i < 8; i++) {
      const nodeMat = new THREE.MeshStandardMaterial({
        color: nodeColors[i % nodeColors.length],
        wireframe: true
      });
      const nodeMesh = new THREE.Mesh(nodeGeometry, nodeMat);
      const angle = (i / 8) * Math.PI * 2;
      nodeMesh.position.set(Math.cos(angle) * 7, Math.sin(angle) * 7, (Math.random() - 0.5) * 4);
      nodesGroup.add(nodeMesh);
    }
    scene.add(nodesGroup);

    // 6. Interactive Mouse & Scroll Parallax Listeners
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });

    // 7. Resize Listener
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // 8. 60 FPS Render Loop
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Particle rotation
      particleSystem.rotation.y = elapsedTime * 0.05;
      particleSystem.rotation.x = elapsedTime * 0.02;

      // Card mouse tilt
      targetRotationY = mouseX * 0.35;
      targetRotationX = mouseY * 0.35;

      glassCard.rotation.y += (targetRotationY - glassCard.rotation.y) * 0.05;
      glassCard.rotation.x += (targetRotationX - glassCard.rotation.x) * 0.05;
      glassCard.position.y = Math.sin(elapsedTime * 1.5) * 0.2;

      // Orbiting Tech Nodes
      nodesGroup.rotation.z = elapsedTime * 0.15;
      nodesGroup.rotation.y = elapsedTime * 0.1;

      // Scroll camera movement
      const scrollFactor = scrollY * 0.005;
      camera.position.z = 15 + Math.sin(scrollFactor) * 2;
      camera.position.y = -scrollFactor * 0.5;

      renderer.render(scene, camera);
    };

    animate();

    // 9. WebGL Resource Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);

      geometry.dispose();
      material.dispose();
      cardGeometry.dispose();
      cardMaterial.dispose();
      nodeGeometry.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
        backgroundColor: '#020617'
      }}
    />
  );
}
