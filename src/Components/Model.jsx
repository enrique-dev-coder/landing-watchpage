import { useGLTF, Html } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

//useRef para acceder al valor
//se usara el useGLTF en vez del use Loader

const Model = (props) => {
  const ref = useRef();
  //const modelo = useGLTF('/watch-v1.glb');
  //console.log(modelo);
  const { nodes, materials, scene } = useGLTF('/watch-v1.glb');

  //esto es como un map pero con traverse oara que se casteen las sombras
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    //scene.rotation.x = -Math.PI / 1.75 + Math.cos(t / 4) / 8;
    ref.current.rotation.y = Math.sin(t / 4) / 8;
    ref.current.rotation.z = (1 + Math.sin(t / 1.5)) / 20;
    ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
  });
  console.log(scene);

  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
      //la propiedad de side es para ver de que lado se proyectan las sombraa
      child.material.side = THREE.FrontSide;
    }
  });
  return (
    //el group es como un div para elementos del three js , en este caso todos los elementos tienen la animacion
    //HTML para poner HTML en el  objeto o scene
    //el html hereda todas las propiedades de group que hereda todas las propiedades de Object3D
    <group ref={ref} dispose={null}>
      <Html position={[0.8, 1, 1]} rotation={[Math.PI / 2, 0, 0]}>
        <div className="annotation">$600</div>
      </Html>
      {/*es mas facil sacar toda la escena  y ponerlo en un primitivo que ahcer lo que hizo el tio del video
         de poner en un mest la geometria y todo eso
      */}
      <primitive object={scene} {...props} />;
    </group>
  );
};

export default Model;
