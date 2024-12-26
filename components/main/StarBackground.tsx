"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas , useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
// @ts-ignore 
import * as random from "maath/random/dist/maath-random.esm";
import { isGeneratorObject } from "util/types";

const StarBackground = (props: any) => {
  const ref = useRef<any>(null);
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;s
    }
  });

  return (
     <group rotation={[0, 0, Math.PI / 4]} >
    
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#ffffff" // Fixed color value
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false} // Fixed typo
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 z-[20]">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
      <Preload all />
    </Canvas>
  </div>
);

export default StarsCanvas;
