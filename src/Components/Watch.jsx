import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import React from 'react';
import Model from './Model';
import { ContactShadows, PresentationControls } from '@react-three/drei';

//la ambient light no genera sombras pero iluminas a todos los objetos de la escena
//le spotlight es una luz que sale de un punto en una direccion y si puede generar sombras

const canvasStyle = {
  height: '300px',
};
const Watch = () => {
  return (
    <Canvas
      className="canvas-new"
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0, 4], fov: 50 }}
      style={{ ...canvasStyle }}
    >
      <ambientLight intensity={1} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        shadow-mapSize={[512, 512]}
        castShadow
      />
      <PresentationControls
        global={false} // Spin globally or by dragging the model
        cursor={true} // Whether to toggle cursor style on drag
        snap={false} // Snap-back to center (can also be a spring config)
        speed={1} // Speed factor
        zoom={1} // Zoom factor when half the polar-max is reached
        //rotation={[0, 0, 0]} // Default rotation
        polar={[-Math.PI / 2, Math.PI / 2]} // Vertical limits
        azimuth={[-Infinity, Infinity]} // Horizontal limits
      >
        <Suspense fallback={null}>
          <Model
            //array con las rotaciones en x,y,z
            rotation={[-Math.PI / 20, 0, 0]}
            position={[0, 0.1, 0]}
            scale={0.003}
          />
        </Suspense>
        <ContactShadows
          rotation-x={Math.PI / 2}
          position={[0, -1.4, 0]}
          opacity={0.75}
          width={10}
          height={10}
          blur={2.6}
          far={2}
          color="#fffffff"
          resolution={256}
        />
      </PresentationControls>
    </Canvas>
  );
};

export default Watch;
