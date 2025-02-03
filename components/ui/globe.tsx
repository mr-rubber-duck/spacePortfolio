"use client";
import { useEffect, useRef, useState } from "react";
import { Color, Scene, Fog, PerspectiveCamera, Vector3 } from "three";
import ThreeGlobe from "three-globe";
import { useThree, Canvas, extend, ReactThreeFiber } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import countries from "@/data/globe.json";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      threeGlobe: ReactThreeFiber.Object3DNode<ThreeGlobe, typeof ThreeGlobe>;
    }
  }
}

extend({ ThreeGlobe });

const RING_PROPAGATION_SPEED = 3;
const aspect = 1.2;
const cameraZ = 300;

type Position = {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
};

const GlobeComponent = (props: any) => {
  const { scene } = useThree();
  const globeRef = useRef<ThreeGlobe>(null);

  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.globeImageUrl('/path/to/globe/image.jpg');
      globeRef.current.bumpImageUrl('/path/to/bump/image.jpg');
      globeRef.current.polygonCapColor(() => 'rgba(200, 0, 0, 0.6)');
      globeRef.current.polygonSideColor(() => 'rgba(0, 100, 0, 0.15)');
      globeRef.current.polygonStrokeColor(() => '#111');
      globeRef.current.polygonLabel(({ properties }) => `
        <b>${properties.ADMIN}</b> <br />
        Population: <i>${properties.POP_EST}</i>
      `);
      globeRef.current.polygonAltitude(0.06);
      globeRef.current.polygonCapColor(() => 'rgba(200, 0, 0, 0.6)');
      globeRef.current.polygonSideColor(() => 'rgba(0, 100, 0, 0.15)');
      globeRef.current.polygonStrokeColor(() => '#111');
      globeRef.current.polygonLabel(({ properties }) => `
        <b>${properties.ADMIN}</b> <br />
        Population: <i>${properties.POP_EST}</i>
      `);
      globeRef.current.polygonAltitude(0.06);
    }
  }, []);

  return (
    <threeGlobe ref={globeRef} {...props} />
  );
};

const GlobeScene = (props: any) => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight
        color="#ffffff"
        position={new Vector3(-400, 100, 400)}
      />
      <directionalLight
        color="#ffffff"
        position={new Vector3(-200, 500, 200)}
      />
      <pointLight
        color="#ffffff"
        position={new Vector3(-200, 500, 200)}
        intensity={0.8}
      />
      <GlobeComponent {...props} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minDistance={cameraZ}
        maxDistance={cameraZ}
        autoRotateSpeed={1}
        autoRotate={true}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI - Math.PI / 3}
      />
    </Canvas>
  );
};

export function hexToRgb(hex: string) {
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

export default GlobeScene;