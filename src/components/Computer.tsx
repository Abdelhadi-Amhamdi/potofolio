import { OrbitControls, useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"


function Computer() {
    const computer = useGLTF('/setup/scene.gltf')
    return (
      <mesh>
        <hemisphereLight intensity={0.9} groundColor="black" />
        <pointLight intensity={10} />
        <primitive
          object={computer.scene}
          scale={0.15}
          position={[0,-3,2]}
          rotation={[0, 0.9, 0]}
        />
      </mesh>
    )
}
  
export default function ComputerCanvas() {
    return (
      <Canvas
        frameloop='demand'
        shadows
        camera={{position: [30, 1, 2], fov: 25}}
        gl={{preserveDrawingBuffer: true}}
      >
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computer />
      </Canvas>
    )
}