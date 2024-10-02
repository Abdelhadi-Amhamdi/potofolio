import { Link, useParams } from "react-router-dom"
import { ProjectType } from "../types"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase"
import { FaArrowLeft } from "react-icons/fa"
import { getIcon } from "../data"
import { useQuery } from "@tanstack/react-query"
import { useEffect, useRef, useState } from "react"


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
      queryKey : [project_name],
      queryFn : () => getProjectWithTeam(project_name),
      staleTime : (1000 * 60) * 60
    })

    const textRef = useRef<HTMLTextAreaElement>(null)

    useEffect(() => {
      const timer = setTimeout(() => {
        if (textRef.current) {
          textRef.current.rows = textRef.current.scrollHeight / 24
        }
      }, 300)
      return () => clearTimeout(timer)
    }, [data])


    return (
      <div className='w-full h-fit min-h-[83vh] max-w-[1000px] mx-auto p-2 mt-10 relative'>



       

        <div className='w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-[500px] lg:max-w-[1000px] mx-auto px-4'>
        <Link to="/" className="">
          <div className='h-[50px]'>
            <FaArrowLeft />
          </div>
        </Link>
          <div className='h-full relative '>
            <img src={data?.img} className='w-full rounded-xl' alt="" />
            <h1 className='bg-primary text-white w-[70px] h-[30px] text-center rounded absolute top-[-6px] left-[-6px] '>{data?.categorie}</h1>
          </div>
          <div>
            <h1 className='text-[24pt] font-bold uppercase'>{data?.title}</h1>
            <textarea ref={textRef} readOnly className={`mt-4 text-[12px] resize-none outline-none leading-6 bg-transparent w-full`} value={data?.description?.replace(/\\n/g, "\r\n")}></textarea>
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
                  {data?.photos?.map((p, index) => <img key={index} src={p} className='h-fit w-full' alt="" />)}
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    )
}

