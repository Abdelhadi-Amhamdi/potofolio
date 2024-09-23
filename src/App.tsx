
import {FaMoon, FaPhone, FaMailBulk, FaReact, FaArrowLeft} from 'react-icons/fa'
import {getIcon, infos, articles, links} from './data.js'
import { FaLocationDot } from 'react-icons/fa6'
import ThemeContextProvider, {ThemeContext} from './contexts.js'
import { useContext, useEffect, useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Outlet, useParams, Link } from 'react-router-dom'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Main />}>
      <Route index element={<Page1 />} />
      <Route path=':project_name' element={<DetailsPage />}></Route>
    </Route>
  )
)

type TeamType = {
  link : string,
  img : string
}

type ProjectType = {
  id : string,
  title : string,
  img : string,
  categorie: string,
  description : string
  team : TeamType[],
  tech : string[]
}




function DetailsPage() {
  const {project_name} = useParams()
  const [project , setProject] = useState<ProjectType | null>(null)

  useEffect(() => {
    const timer = setTimeout(async () => {

      const getProjectWithTeam = async (projectId : string | undefined) => {

        if (!projectId) return null;

        const projectRef = doc(db, "projects", projectId);
        const projectSnapshot = await getDoc(projectRef);

        if (projectSnapshot.exists()) {
          const projectData : ProjectType = projectSnapshot.data() as ProjectType;
          return {
            ...projectData
          };
        }
        return null;
      }
      const myproject : ProjectType | null = await getProjectWithTeam(project_name)
      setProject(myproject)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className='w-full h-[83vh] max-w-[800px] mx-auto p-2 mt-10'>
      <Link to="/">
        <div className='h-[50px]'>
          <FaArrowLeft />
        </div>
      </Link>
      <div className='w-full h-full flex'>
        <div className='w-1/2 h-full relative'>
          <img src={project?.img} className='w-full rounded-xl' alt="" />
          <h1 className='bg-gradient-to-r from-[#8A2387] via-[#E94057] to-[#F27121] w-[70px] h-[30px] text-center rounded absolute top-[-6px] left-[-6px] '>{project?.categorie}</h1>
        </div>
        <div className='w-1/2 ml-4'>
          <h1 className='text-2xl'>{project?.title}</h1>
          <p className='mt-4 text-[12px]'>{project?.description}</p>
          <ul className='flex mt-4'>{project?.tech.map((item, index) => <li className='mr-2' key={index}>{getIcon(item)}</li>)}</ul>
          <ul className='mt-6 flex'>
            <li className='rounded mr-2 bg-gradient-to-r from-[#8A2387] via-[#E94057] to-[#F27121] w-[70px] h-[30px] text-center'>github</li>
            <li className='bg-gradient-to-r from-[#8A2387] via-[#E94057] to-[#F27121] w-[70px] h-[30px] text-center rounded'>live</li>
          </ul>
          <div className='mt-10'>
            <h1 className='uppercase'>team</h1>
            <ul className='mt-4 flex'>
              {project?.team?.map((t, index) => <li key={index}><img src={t.img} className='mr-2 w-[50px] h-[50px] rounded-full' alt="" /></li>)}
            </ul>
          </div>
          <div className='mt-10'>
            <h1 className='uppercase'>photos</h1>
            <div className='grid grid-cols-2 mt-4'>
              <img src="/img.png" alt="" />
              <img src="/img.png" alt="" />
            </div>
            <div className='grid grid-cols-3'>
              <img src="/img.png" alt="" />
              <img src="/img.png" alt="" />
              <img src="/img.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



function Nav() {
  const theme = useContext(ThemeContext)
  return (
      <nav className={`flex justify-between w-full p-4`}>
        <h1 className='text-sm'>
          <span className='text-2xl bg-gradient-to-r from-[#8A2387] via-[#E94057] to-[#F27121] text-transparent bg-clip-text'>A
            <span className='text-sm'>2.</span>
          </span>
          M
        </h1>
        <ul className='flex items-center'>
          <li onClick={() => {
            theme?.themeHandler(theme?.theme == 'light' ? 'dark' : 'light')
          }} className='cursor-pointer border-[1px] h-[35px] p-2 rounded-full'>
            <FaMoon />
          </li>
          <li className='ml-4 bg-gradient-to-r from-[#8A2387] via-[#E94057] to-[#F27121] h-[35px] flex items-center text-white py-1 px-4 rounded-full'>
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
            <h1 className='text-xl font-bold my-8'>Hi, I'm <span className='bg-gradient-to-r from-[#8A2387] via-[#E94057] to-[#F27121] text-transparent bg-clip-text'>Abdelhadi Amhamdi</span> 👋</h1>
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
import { SiTailwindcss, SiThreedotjs, SiTypescript } from 'react-icons/si'

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

import { db } from './firebase.js'
import { collection, getDocs, doc, getDoc } from 'firebase/firestore'




function Projects() {
  const theme = useContext(ThemeContext)
  const [pdata, setData] = useState<ProjectType[]>([])
  const dataCollection = collection(db, "projects")

  useEffect(() => {
    const timer = setTimeout(() => {
      const get_data = async () => {
        try {
          const data = await getDocs(dataCollection)
          const d = data.docs.map(d => ({...d.data(), id : d.id}))
          setData(d)
        } catch (err) {
          console.log(err)
        }
      }
      get_data()
    }, 300)
    return () => clearTimeout(timer)
  }, [])
  return (
      <div className='w-[300px] sm:w-full sm:px-6 my-2 ml-[50%] translate-x-[-50%]'>
          <h1 className='my-10 text-center'>⚒ What I'm working on</h1>
          <ul className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4'>
          {
            pdata.map((project) => {
              return (
                <li key={project.id} className={`backdrop-blur-none relative border-[.3px] p-2 rounded-sm ${theme?.theme == 'dark' ? "border-white/20" : "border-black/20"}`}>
                  <Link to={project.id}>
                    <img src={project.img} className='rounded-t-sm h-[150px] w-full' alt="project image" />
                    <div className='absolute top-[3px] capitalize left-[3px] rounded-sm text-[12px] bg-gradient-to-r from-[#8A2387] via-[#E94057] to-[#F27121] text-white px-4 py-1 '>{project.categorie}</div>
                    <div className='p-2'>
                      <ul className='flex text-[16px] mb-2'>
                        {project.tech.map((t, index) => <li key={index} className='mr-2'>{getIcon(t)}</li>)}
                      </ul>
                      <h1 className='mb-2'>{project.title}</h1>
                      <p className='text-[10px]'>{project.description.substring(0, 80)} ...</p>
                    </div>
                  </Link>
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
      <h1 className='my-10 text-center'>📜 My Articles</h1>
      <ul className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-4'>
          {
            articles.map((art, index) => {
              return (
                <li key={index} className={`${theme?.theme == 'dark' ? "border-white/10" : ""} backdrop-blur-sm sm:max-w-[250px] relative border-[.3px] p-2 rounded-sm`}>
                  <img src={art.image} className='rounded-t-sm h-[150px] w-full' alt="" />
                  <div className='p-2'>
                    <ul className='flex text-[16px] mb-2'>
                      {art.tags.map((t, index) => <li key={index} className='mr-2'>#{t}</li>)}
                    </ul>
                    <h1 className='mb-2'>{art.title}</h1>
                    <p className='text-[10px] '>{art.desc.substring(0, 80)} ...</p>
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
  const theme = useContext(ThemeContext)
  return (
        <footer className={`w-full p-2 backdrop-blur-sm mt-10 py-4  flex items-center ${theme?.theme == 'dark' ? "bg-white/10" : "bg-black/90 text-white"}`}>
          <div className='p-2 w-1/2 h-full'>
            <ul className='text-[10px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
              <li className='flex items-center'>
                <div className='text-white bg-gradient-to-r from-[#8A2387] via-[#E94057] to-[#F27121] p-2 mr-2 rounded-full'>
                  <FaLocationDot />
                </div>
                <div className=''>
                  <div className='font-bold'>{infos.address}</div>
                  <div className='mt-[6px]'>{infos.code}</div>
                </div>
              </li>
              <li className='flex items-center'>
                <div className='text-white bg-gradient-to-r from-[#8A2387] via-[#E94057] to-[#F27121]  p-2 mr-2 rounded-full'>
                  <FaPhone />
                </div>
                <span className=''>{infos.phone}</span>
              </li>
              <li className='flex items-center'>
                <div className='text-white bg-gradient-to-r from-[#8A2387] via-[#E94057] to-[#F27121] p-2 mr-2 rounded-full'>
                  <FaMailBulk />
                </div>
                <span className=''>{infos.email}</span>
              </li>
            </ul>
          </div>
          <div className='flex justify-center h-full w-1/2'>
            <div className=''>
              <h1 className='capitalize text-[14px]'>made with ❤️ using</h1>
              <ul className='flex mt-4 justify-evenly'>
                <li><FaReact /></li>
                <li><SiTypescript /></li>
                <li><SiTailwindcss /></li>
                <li><SiThreedotjs /></li>
              </ul>
            </div>
          </div>
        </footer>
  )
}

function Page1() {
  return (
    <div className='max-w-[900px] mx-auto'>
      <Hero />
      <Projects />
      <Articles />
    </div>
  )
}

function Main() {
  const theme = useContext(ThemeContext)
  return (
        <div className={`${theme?.theme == 'light' ? "bg-white text-black/80" : "bg-black text-white"} bg-ascii w-full h-full overflow-y-scroll`}>
          <Nav />
            <Outlet />
            <Footer />
        </div>
  )
}

function App() {

  return (
    <div className='p-0 m-0 box-border overflow-hidden w-[100vw] h-[100vh]'>
      <ThemeContextProvider>
        <RouterProvider router={router} />
      </ThemeContextProvider>
    </div>
  )
}

export default App
