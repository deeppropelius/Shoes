import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  useProgress,
  Html,
  ContactShadows,
  Center,
  Environment,
  Lightformer,
} from "@react-three/drei";
import { THEMES } from "../../../context/themeData";
import { useTheme } from "../../../context/useTheme";

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center pointer-events-none select-none">
        <div className="w-10 h-10 border-2 border-foreground/15 border-t-primary rounded-full animate-spin mb-3" />
        <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-foreground/70 whitespace-nowrap">
          {progress < 100 ? `Loading Atelier... ${progress.toFixed(0)}%` : "Rendering..."}
        </span>
      </div>
    </Html>
  );
}

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

        <Suspense fallback={<Loader />}>
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
          enableZoom={true}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1.5}
        />
      </Canvas>
    </div>
  );
}

// Preload all 4 theme models for instantaneous switching
useGLTF.preload(THEMES.red.modelUrl);
useGLTF.preload(THEMES.blue.modelUrl);
useGLTF.preload(THEMES.green.modelUrl);
useGLTF.preload(THEMES.purple.modelUrl);
