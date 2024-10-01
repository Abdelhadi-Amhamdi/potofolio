import { Link, useParams } from "react-router-dom"
import { ProjectType } from "../types"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase"
import { FaArrowLeft } from "react-icons/fa"
import { getIcon } from "../data"
import { useQuery } from "@tanstack/react-query"
import { useContext, useEffect, useRef, useState } from "react"
import { ThemeContext } from "../contexts"


export default function ProjectDetails() {
    const {project_name} = useParams()
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


    const {data} = useQuery({
      queryKey : [`project-${project_name}`],
      queryFn : () => getProjectWithTeam(project_name),
      staleTime : (1000 * 60) * 60
    })

    const textRef = useRef<HTMLTextAreaElement>(null)
    const {theme} = useContext(ThemeContext) || {}

    useEffect(() => {
      const timer = setTimeout(() => {
        if (textRef.current) {
          textRef.current.rows = textRef.current.scrollHeight / 24
        }
      }, 300)
      return () => clearTimeout(timer)
    }, [data])

    const [showImg, setShowImg] = useState<string | null>(null)

    return (
      <div className='w-full h-fit min-h-[83vh] max-w-[1000px] mx-auto p-2 mt-10 relative'>
        <Link to="/">
          <div className='h-[50px]'>
            <FaArrowLeft />
          </div>
        </Link>



        {
          showImg && 
          <div className="bg-gray-700/50 backdrop-blur-lg  w-[1000px] p-8 rounded h-fit fixed left-[50%] top-[50%] translate-x-[-50%] z-10 translate-y-[-50%]">
            <div className="py-4 px-2 absolute top-2 right-2">
              <h1 className="bg-primary w-fit p-2 rounded" onClick={() => setShowImg(null)}>close</h1>
            </div>
            <img src={showImg} className="rounded" alt="" />
          </div>
        }

        <div className='w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-[500px] lg:max-w-[1000px] mx-auto px-4'>
          <div className='h-full relative '>
            <img src={data?.img} className='w-full rounded-xl' alt="" />
            <h1 className='bg-primary text-white w-[70px] h-[30px] text-center rounded absolute top-[-6px] left-[-6px] '>{data?.categorie}</h1>
          </div>
          <div>
            <h1 className='text-[24pt] font-bold uppercase'>{data?.title}</h1>
            <textarea ref={textRef} readOnly className={`${theme == 'light' ? "text-black" : "text-white"} mt-4 text-[12px] resize-none outline-none leading-6 text-white bg-transparent w-full`} value={data?.description?.replace(/\\n/g, "\r\n")}></textarea>
            <ul className='flex mt-4'>{data?.tech.map((item, index) => <li className='mr-2' key={index}>{getIcon(item)}</li>)}</ul>
            <ul className='mt-6 flex'>
              <li className='rounded mr-2 bg-primary text-white w-[70px] h-[30px] text-center'>github</li>
              <li className='bg-primary text-white w-[70px] h-[30px] text-center rounded'>live</li>
            </ul>
            <div className='mt-10'>
              <h1 className='capitalize text-[14pt]'>meet the team</h1>
              <ul className='mt-4 flex'>
                {data?.team?.map((t, index) => <li key={index}><img src={t.img} className='mr-4 w-[40px] h-[40px] rounded-full' alt="" /></li>)}
              </ul>
            </div>
            {
              data?.photos?.length &&
              <div className='mt-10'>
                <h1 className='capitalize text-[14pt]'>photos</h1>

                <div className='grid grid-cols-1 gap-2 mt-4'>
                  {
                    data?.photos?.map((p, index) => <img onClick={() => setShowImg(p)} key={index} src={p} className='h-fit w-full' alt="" />)
                  }
                  
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    )
}

