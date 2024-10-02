import { collection, getDocs, query } from "firebase/firestore"
import { useContext, useEffect, useState } from "react"
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
            <div className='bg-gray-100 w-1/2 h-[15px]'></div>
            <div className='bg-gray-100 w-1/3 h-[35px] mt-2'></div>
            <div className='bg-gray-100 w-full h-[6px] mt-2'></div>
            <div className='bg-gray-100 w-full h-[6px] mt-2'></div>
            <div className='bg-gray-100 w-2/3 h-[6px] mt-2'></div>
            <div className='bg-gray-100 w-1/3 h-[6px] mt-2'></div>
          </div>
      </li>
    )
}

type DateType = {
  month : string,
  day : string,
  year : string
}

function Card({project} : {project : ProjectType}) {

    const [date, setDate] = useState<DateType | null>(null)
    const month_names : string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    useEffect(() => {
      if (project.time) {
        let [day, month, year] = project.time.split("-")
        setDate({month : month_names[Number(month) - 1] || "", day, year})
      }
    }, [])

    return (
      <div className="">
        <Link to={project.id}>
          <div className="w-full min-w-[200px] relative">
            <img src={project.img} className="h-[240px] rounded w-full" alt="" />
            <div className="absolute top-[-10px] left-[-10px]">
              <h2 className="bg-primary text-white  text-sm flex justify-center items-center w-[80px] h-[30px] rounded">
                {project.categorie}
              </h2>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center mb-2 h-[30px]">
              <p className="mr-4 text-[8pt] capitalize">{date?.month} {date?.day}, {date?.year}</p>
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
            <ProjectSkelton />
            <ProjectSkelton />
        </>
    )
}

import {useQuery} from '@tanstack/react-query'
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa"
import {eninfos, frInfos} from '../data'

export default function Projects() {
    
    const dataCollection = collection(db, "projects")
    const [seeMore, setSeeMore] = useState<boolean>(false)
    const {lang} = useContext(ThemeContext) || {}
    
    const get_data = async () : Promise<ProjectType[]> =>  {
      try {
        const data = await getDocs(query(dataCollection))
        return data.docs.map(d => ({...d.data(), id : d.id})) as ProjectType[]
      } catch (err) {
        console.log(err)
        return []
      }
    }

    const res = useQuery<ProjectType[], Error>({
      queryKey : ['projects'],
      queryFn : get_data,
      staleTime : 1000 * 60 * 10
    })

    return (
        <div className='w-[300px] sm:w-full sm:px-6 my-2 ml-[50%] translate-x-[-50%]'>
            <h1 className='my-10 text-center capitalize'>⚒ {lang == 'en' ? eninfos.ptitle : frInfos.ptitle}</h1>
              <ul className='grid grid-cols-1 gap-16 sm:grid-cols-2 md:grid-cols-3'>
              {
                res.isFetching 
                ? 
                <ProjectsPlaceHolder />
                :
                res.data?.map((project : ProjectType, index) => {
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
                  <h1>{lang == 'en' ? (!seeMore ? eninfos.more : eninfos.less) : (!seeMore ? frInfos.more: frInfos.less)}</h1>
                  {!seeMore ? <FaAngleDoubleDown className="ml-2" /> : <FaAngleDoubleUp className="ml-2" />}
                </button>
              </div>
          </div>
    )
}