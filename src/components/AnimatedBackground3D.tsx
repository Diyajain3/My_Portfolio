"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function AnimatedBackground3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    camera.position.z = 5;

    // Create floating particles
    const geometry = new THREE.BufferGeometry();
    const particleCount = 100;
    const positionArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positionArray[i] = (Math.random() - 0.5) * 2000;
      positionArray[i + 1] = (Math.random() - 0.5) * 2000;
      positionArray[i + 2] = (Math.random() - 0.5) * 2000;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positionArray, 3));

    const material = new THREE.PointsMaterial({
      size: 10,
      color: 0x10b981,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.6,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      particles.rotation.x += 0.0001;
      particles.rotation.y += 0.0002;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10"
    />
  );
}
