import { collection, getDocs } from "firebase/firestore"
import { useContext } from "react"
import { db } from "../firebase"
import { Link } from "react-router-dom"
import { getIcon } from "../data"
import { ThemeContext } from "../contexts"
import { ProjectType } from "../types"



function ProjectSkelton() {
    const theme = useContext(ThemeContext)
    return (
      <li  className={`backdrop-blur-none relative border-[.3px] p-2 rounded-sm ${theme?.theme == 'dark' ? "border-white/20" : "border-black/20"}`}>
          <div className='w-full h-[150px] bg-gray-100'></div>
          <div className='absolute top-[3px] left-[3px] h-[25px] w-[50px] rounded-sm bg-gray-300 '></div>
          <div className='p-2'>
            <div className='bg-gray-100 w-1/2 h-[10px]'></div>
            <div className='bg-gray-100 w-1/3 h-[15px] mt-2'></div>
            <div className='bg-gray-100 w-full h-[6px] mt-2'></div>
            <div className='bg-gray-100 w-full h-[6px] mt-2'></div>
            <div className='bg-gray-100 w-1/3 h-[6px] mt-2'></div>
          </div>
      </li>
    )
}


function ProjectCard({project} : {project : ProjectType}) {
    const theme = useContext(ThemeContext)
    return (
        <li  className={`backdrop-blur-none relative border-[.3px] p-2 rounded-sm ${theme?.theme == 'dark' ? "border-white/20" : "border-black/20"}`}>
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
}

function ProjectsPlaceHolder() {
    return (
        <>
            <ProjectSkelton />
            <ProjectSkelton />
            <ProjectSkelton />
            <ProjectSkelton />
        </>
    )
}

import {useQuery} from '@tanstack/react-query'

export default function Projects() {
    
    const dataCollection = collection(db, "projects")
    
    const get_data = async () => {
      try {
        const data = await getDocs(dataCollection)
        return data.docs.map(d => ({...d.data(), id : d.id}))
      } catch (err) {
        console.log(err)
      }
    }

    const query = useQuery({
      queryKey : ['projects'],
      queryFn : get_data,
      staleTime : (1000 * 60) * 10
    })

    return (
        <div className='w-[300px] sm:w-full sm:px-6 my-2 ml-[50%] translate-x-[-50%]'>
            <h1 className='my-10 text-center'>⚒ What I'm working on</h1>
              <ul className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4'>
              {
                query.isFetching 
                ? 
                <ProjectsPlaceHolder />
                :
                query.data?.map((project) => <ProjectCard key={project.id} project={project} />)
              }
              </ul>
          </div>
    )
}