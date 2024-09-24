import { Link, useParams } from "react-router-dom"
import { ProjectType } from "../types"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase"
import { FaArrowLeft } from "react-icons/fa"
import { getIcon } from "../data"
import { useQuery } from "@tanstack/react-query"


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

    return (
      <div className='w-full h-[83vh] max-w-[800px] mx-auto p-2 mt-10'>
        <Link to="/">
          <div className='h-[50px]'>
            <FaArrowLeft />
          </div>
        </Link>

        <div className='w-full h-full flex'>
          <div className='w-1/2 h-full relative'>
            <img src={data?.img} className='w-full rounded-xl' alt="" />
            <h1 className='bg-gradient-to-r from-[#8A2387] via-[#E94057] to-[#F27121] w-[70px] h-[30px] text-center rounded absolute top-[-6px] left-[-6px] '>{data?.categorie}</h1>
          </div>
          <div className='w-1/2 ml-4'>
            <h1 className='text-2xl'>{data?.title}</h1>
            <p className='mt-4 text-[12px]'>{data?.description}</p>
            <ul className='flex mt-4'>{data?.tech.map((item, index) => <li className='mr-2' key={index}>{getIcon(item)}</li>)}</ul>
            <ul className='mt-6 flex'>
              <li className='rounded mr-2 bg-gradient-to-r from-[#8A2387] via-[#E94057] to-[#F27121] w-[70px] h-[30px] text-center'>github</li>
              <li className='bg-gradient-to-r from-[#8A2387] via-[#E94057] to-[#F27121] w-[70px] h-[30px] text-center rounded'>live</li>
            </ul>
            <div className='mt-10'>
              <h1 className='uppercase'>team</h1>
              <ul className='mt-4 flex'>
                {data?.team?.map((t, index) => <li key={index}><img src={t.img} className='mr-2 w-[50px] h-[50px] rounded-full' alt="" /></li>)}
              </ul>
            </div>
            <div className='mt-10'>
              <h1 className='uppercase'>photos</h1>
              <div className='grid grid-cols-1 mt-4'>
                <img src="/s3.png" className='border-2' alt="" />
              </div>
              <div className='grid grid-cols-2 gap-2 mt-2'>
                <img src="/s2.png" className='w-full h-[150px] border-2' alt="" />
                <img src="/s1.png" className='w-full h-[150px] border-2' alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}