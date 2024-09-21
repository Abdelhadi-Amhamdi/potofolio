
import {FaMoon, FaPhone, FaMailBulk} from 'react-icons/fa'
import {projects, infos, articles, links} from './data.js'
import { FaLocationDot } from 'react-icons/fa6'
import ThemeContextProvider, {ThemeContext} from './contexts.js'
import { useContext } from 'react'


function Nav() {
  const theme = useContext(ThemeContext)
  return (
      <nav className={`flex justify-between w-full p-4`}>
        <h1 className=''>aamhamdi</h1>
        <ul className='flex items-center'>
          <li onClick={() => {
            theme?.themeHandler(theme?.theme == 'light' ? 'dark' : 'light')
          }} className='cursor-pointer border-[1px] h-[35px] p-2 rounded-full'>
            <FaMoon />
          </li>
          <li className='ml-4 bg-primary h-[35px] flex items-center text-white py-1 px-4 rounded-full'>
            <h1 className='capitalize text-[13px]'>resume</h1>
          </li>
        </ul>
      </nav>
  )
}

function Hero() {
  return (
        <div className={`p-2 mt-10 sm:flex sm:justify-center text-center`}>
          <div className='sm:w-1/2'>
            <h1 className='text-xl font-bold my-8'>Hi, I'm <span className='text-primary'>Abdelhadi Amhamdi</span> 👋</h1>
            <p className='text-[12px] px-6 text-pretty'>I'm a passionate computer science student with a deep interest in software development, web technologies, and problem-solving. I'm always eager to learn new things and apply my knowledge to build efficient and scalable solutions.</p>
            <ul className='ml-[50%] translate-x-[-50%] m-8 flex w-[200px] justify-evenly p-2'>
              {
                links.map((l, index) => <a target="_blank" key={index} href={l.link}>{l.icon}</a>)
              }
            </ul>
          </div>
          <div className='sm:w-1/2 '>
            {/* <img className={`w-[150px] h-[150px] border-4 ml-[50%] translate-x-[-50%] my-10 rounded-full`} src="/aamhamdi.jpg" alt="" /> */}
            <ComputerCanvas />
          </div>
        </div>
  )
}

import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'

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

function ComputerCanvas() {
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

function Projects() {
  const theme = useContext(ThemeContext)
  return (
      <div className='w-[300px] sm:w-full sm:px-6 my-2 ml-[50%] translate-x-[-50%]'>
          <h1 className='my-10 text-center'>🔧 What I'm working on</h1>
          <ul className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4'>
          {
            projects.map((project, index) => {
              return (
                <li key={index} className={`backdrop-blur-none relative border-[.3px] p-2 rounded-sm ${theme?.theme == 'dark' ? "border-white/20" : "border-black/20"}`}>
                  <img src={project.img} className='rounded-t-sm h-[150px] w-full' alt="" />
                  <div className='absolute top-[3px] left-[3px] rounded-sm text-[12px] bg-primary text-white px-4 py-1 '>{project.categorie}</div>
                  <div className='p-2'>
                    <ul className='flex text-[16px] mb-2'>
                      {project.tech.map((t, index) => <li key={index} className='mr-2'>{t}</li>)}
                    </ul>
                    <h1 className='mb-2'>{project.title}</h1>
                    <p className='text-[10px]'>{project.description}</p>
                  </div>
                </li>
              )
            })
          }
          </ul>
        </div>
  )
}

function Articles() {
  const theme = useContext(ThemeContext)
  return (
    <div className='w-[300px] sm:w-full sm:px-6 h-fit ml-[50%] translate-x-[-50%] mt-10'>
      <h1 className='my-10 text-center'>🔧 My Articles</h1>
      <ul className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-4'>
          {
            articles.map((art, index) => {
              return (
                <li key={index} className={`${theme?.theme == 'dark' ? "border-white/10" : ""} backdrop-blur-sm sm:max-w-[250px] relative border-[.3px] p-2 rounded-sm`}>
                  <img src={art.image} className='rounded-t-sm' alt="" />
                  <div className='p-2'>
                    <ul className='flex text-[16px] mb-2'>
                      {art.tags.map((t, index) => <li key={index} className='mr-2'>#{t}</li>)}
                    </ul>
                    <h1 className='mb-2'>{art.title}</h1>
                    <p className='text-[10px] truncate'>{art.desc}</p>
                  </div>
                </li>
              )
            })
          }
      </ul>
    </div>
  )
}

function Footer() {
  return (
        <footer className='w-full p-2 bg-primary/10 backdrop-blur-sm mt-10 py-10'>
          <div className='p-2 w-1/2 h-full'>
            <ul className='text-[10px]'>
              <li className='flex items-center'>
                <div className='bg-white text-black/80  p-2 mr-2 rounded-full'>
                  <FaLocationDot />
                </div>
                <div className='text-white'>
                  <div className='font-bold'>{infos.address}</div>
                  <div className='mt-[6px]'>{infos.code}</div>
                </div>
              </li>
              <li className='flex mt-6 items-center'>
                <div className='bg-white text-black/80  p-2 mr-2 rounded-full'>
                  <FaPhone />
                </div>
                <span className='text-white'>{infos.phone}</span>
              </li>
              <li className='flex mt-6 items-center'>
                <div className='bg-white text-black/80 p-2 mr-2 rounded-full'>
                  <FaMailBulk />
                </div>
                <span className='text-white'>{infos.email}</span>
              </li>
            </ul>
          </div>
          <div>

          </div>
        </footer>
  )
}

function Main() {
  const theme = useContext(ThemeContext)
  return (
        <div className={`${theme?.theme == 'light' ? "bg-white text-black/70" : "bg-black text-white"} bg-ascii w-full h-full overflow-y-scroll`}>
          <Nav />
          <div className='max-w-[900px] mx-auto'>
            <Hero />
            <Projects />
            <Articles />
          </div>
            <Footer />
        </div>
  )
}

function App() {

  return (
    <div className='p-0 m-0 box-border overflow-hidden w-[100vw] h-[100vh]'>
      <ThemeContextProvider>
        <Main />
      </ThemeContextProvider>
    </div>
  )
}

export default App
