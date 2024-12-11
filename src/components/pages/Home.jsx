import { OrbitControls } from '@react-three/drei'
import Logo from '../common/Logo'
import { TieFighter } from '../ThreeD/models/vehicles/imperial/TieFighter'
import logo from './../../assets/svg/main_logo.svg'
import { Canvas } from '@react-three/fiber'
import GroundPlane from '../ThreeD/GroundPlane'
const Home = () => {




    return (
        <div className='h-screen w-screen bg-black'>
            <main>
                <section className='h-screen w-screen flex justify-center '>
                    <div className='ml-12 w-1/3 h-1/3 '>
                        <Logo />
                        <span className='text-white  text-5xl tracking-[1.8rem] pb-10 block'>VISUALS</span>
                        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quam inventore consequatur fugiat saepe accusamus, possimus velit natus at quae!</p>
                        <br />
                        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quam inventore consequatur fugiat saepe accusamus, possimus velit natus at quae!</p>
                    </div>

                    <div className='h-screen w-screen absolute'></div>
                    <Canvas camera={{ fov: 65, position: [0, 1, 5] }}>
                        <OrbitControls />
                        {/* <ambientLight /> */}
                        <pointLight position={[0, 3, 0]} intensity={20} />
                        <pointLight position={[5, 3, 10]} intensity={20} />
                        <TieFighter />
                        <GroundPlane />


                    </Canvas>
                </section>


            </main>


        </div>
    )
}

export default Home