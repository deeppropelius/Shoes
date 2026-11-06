import { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  ContactShadows,
  Center,
  Environment,
  Lightformer,
} from "@react-three/drei";
import { THEMES } from "../../../context/themeData";
import { useTheme } from "../../../context/useTheme";

function Shoe({ modelUrl }: { modelUrl: string }) {
  const { scene } = useGLTF(modelUrl);

  return (
    <Center>
      <primitive
        object={scene}
        position={[0, 0, 0]}
        rotation={[0, Math.PI / 30, Math.PI / 8]}
        scale={2.2}
      />
    </Center>
  );
}

export default function Model() {
  const { currentTheme } = useTheme();

  // Progressively preload alternative colorways in background AFTER initial model is displayed
  useEffect(() => {
    const timer = setTimeout(() => {
      const otherThemes = Object.values(THEMES).filter((t) => t.id !== currentTheme.id);
      otherThemes.forEach((t) => {
        useGLTF.preload(t.modelUrl);
      });
    }, 1800);

    return () => clearTimeout(timer);
  }, [currentTheme.id]);

  return (
    <div className="w-full h-full">
      <Canvas
        className="w-full h-full"
        camera={{
          position: [0, 1.4, 4.8],
          fov: 45,
        }}
      >
        <ambientLight intensity={1.1} />

        {/* Studio Key Light from Above */}
        <directionalLight position={[6, 9, 6]} intensity={2.4} />

        {/* Soft Cool Fill Light */}
        <directionalLight position={[-6, 5, -5]} intensity={1.2} />

        {/* Rim Contour Light */}
        <directionalLight position={[0, 4, -8]} intensity={1.0} />

        {/* Warm Ground Bounce Light */}
        <directionalLight position={[0, -4, 3]} intensity={0.5} />

        <Suspense fallback={null}>
          <Shoe key={currentTheme.id} modelUrl={currentTheme.modelUrl} />

          {/* Luxury Studio Environment Reflections */}
          <Environment resolution={256}>
            <group rotation={[-Math.PI / 3, 0, 1]}>
              <Lightformer form="circle" intensity={3.5} rotation-x={Math.PI / 2} position={[0, 6, -9]} scale={4} />
              <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-6, 2, -1]} scale={3} />
              <Lightformer form="rect" intensity={2.5} rotation-y={-Math.PI / 2} position={[10, 2, 0]} scale={8} />
              <Lightformer form="rect" intensity={1.5} rotation-x={-Math.PI / 2} position={[0, -5, 0]} scale={6} />
            </group>
          </Environment>

          {/* Realistic Ground Contact Shadow */}
          <ContactShadows
            position={[0, -1.1, 0]}
            opacity={0.45}
            scale={10}
            blur={1.8}
            far={4}
          />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1.5}
        />
      </Canvas>
    </div>
  );
}
