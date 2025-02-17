"use client";  // Mark this component as a client-side component

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const BlackHoleEffect = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x030014); // Dark background for galaxy stars
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create Stars
    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.5,
    });

    const starVertices = [];
    const starSpeeds = [];
    for (let i = 0; i < 10000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      starVertices.push(x, y, z);
      
      // Random speed for each star
      const speed = Math.random() * 0.1 + 0.05; // Speed between 0.05 and 0.15
      starSpeeds.push(speed);
    }

    starGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starVertices, 3)
    );

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    scene.add(ambientLight);

    // Camera Position
    camera.position.z = 150;

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Move and Rotate Stars for a Galaxy effect
      const positions = starGeometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        // Adjust the speed of each star
        const speed = starSpeeds[i / 3]; // Speed corresponding to the star

        positions[i] += speed; // Move X
        positions[i + 1] += speed; // Move Y
        positions[i + 2] += speed; // Move Z

        // Reset stars when they move out of bounds to create a loop effect
        if (positions[i] > 1000) positions[i] = -1000;
        if (positions[i + 1] > 1000) positions[i + 1] = -1000;
        if (positions[i + 2] > 1000) positions[i + 2] = -1000;
      }
      starGeometry.attributes.position.needsUpdate = true;

      // Rotate Stars for dynamic effect
      stars.rotation.x += 0.0005;
      stars.rotation.y += 0.0005;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on Unmount
    return () => {
      renderer.dispose();
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute top-0 left-0 w-full h-full z-0"
      style={{
        position: "fixed", // Ensure the background is fixed and covers entire viewport
        top: 0,
        left: 0,
        width: "100vw", // Set width to 100% of viewport
        height: "100vh", // Set height to 100% of viewport
        zIndex: -1, // Keep it in the background behind other content
      }}
    />
  );
};

export default BlackHoleEffect;
