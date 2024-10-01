import { collection, getDocs } from "firebase/firestore"
import { useContext, useState } from "react"
import { db } from "../firebase"
import { Link } from "react-router-dom"
import { getIcon } from "../data"
import { ThemeContext } from "../contexts"
import { ProjectType } from "../types"



function ProjectSkelton() {
    const theme = useContext(ThemeContext)
    return (
      <li  className={`animate-pulse backdrop-blur-none relative border-[.3px] p-2 rounded-sm ${theme?.theme == 'dark' ? "border-white/20" : "border-black/20"}`}>
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

function Card({project} : {project : ProjectType}) {
    return (
      <div className="">
        <Link to={project.id}>
          <div className="w-full min-w-[200px] relative">
            <img src={project.img} className="h-[180px] rounded w-full" alt="" />
            <div className="absolute top-[-10px] left-[-10px]">
              <h2 className="bg-primary text-white  text-sm flex justify-center items-center w-[80px] h-[30px] rounded">
                {project.categorie}
              </h2>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center mb-2 h-[30px]">
              <p className="mr-4 text-[8pt]">Mar 16, 2020</p>
              <ul className='flex text-[12pt]'>
                {project.tech.map((t, index) => <li key={index} className='mr-2'>{getIcon(t)}</li>)}
              </ul>
            </div>
            <h1 className="text-[16pt] font-bold capitalize">{project.title}</h1>
            <p className="text-[8pt] mt-2">{project.description.substring(0, 200).replace(/\\n/g, " ")} ...</p>
          </div>
        </Link>
      </div>
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
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa"

export default function Projects() {
    
    const dataCollection = collection(db, "projects")
    const [seeMore, setSeeMore] = useState<boolean>(false)
    
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
            <h1 className='my-10 text-center'>⚒ From The Gallery</h1>
              <ul className='grid grid-cols-1 gap-16 sm:grid-cols-2 md:grid-cols-3'>
              {
                query.isFetching 
                ? 
                <ProjectsPlaceHolder />
                :
                query.data?.map((project, index) => {
                  if ((!seeMore && index < 6) || seeMore) {
                    return (
                      <Card key={project.id} project={project} />
                    )
                  }
                })
              }
              </ul>
              <div className="flex justify-center my-4 py-4">
                <button onClick={() => setSeeMore(prev => !prev)} className="bg-primary w-[120px] h-[38px] text-white rounded-full text-[10pt] flex items-center justify-center">
                  <h1>see {seeMore ? "less" : "more"}</h1>
                  {!seeMore ? <FaAngleDoubleDown className="ml-2" /> : <FaAngleDoubleUp className="ml-2" />}
                </button>
              </div>
          </div>
    )
}