import { Float, useGLTF } from "@react-three/drei";

const NodeLogo = (props) => {
  const { scene } = useGLTF("/models/node-js-logo.glb");

  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.emissive = child.material.color;
      child.material.emissiveIntensity = 1.5;
    }
  });

  return (
    <Float speed={2} floatIntensity={1.5} rotationIntensity={1.2}>
      <primitive object={scene} scale={22} position={[-12, -6, 8]} {...props} />
    </Float>
  );
};

export default NodeLogo;
