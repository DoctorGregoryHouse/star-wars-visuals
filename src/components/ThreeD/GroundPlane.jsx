import { MeshReflectorMaterial } from "@react-three/drei";
const GroundPlane = () => {
    return (
        <mesh rotation-x={Math.PI * -0.5} scale={10} scale-x={15} position-y={-1}>
            <planeGeometry args={[20, 30, 1, 1]} />
            <MeshReflectorMaterial
                resolution={512}
                mirror={1}
                mixBlur={1}
                blur={1001}
            // alphaMap={alphaMap}
            />
        </mesh>
    );
};

export default GroundPlane