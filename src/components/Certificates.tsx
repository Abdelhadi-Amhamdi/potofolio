import { db } from "../firebase"
import { collection, getDocs, query } from "firebase/firestore"
import {useQuery} from '@tanstack/react-query'
import { CertifeType } from "../types"

function CertifItem({data} : {data : CertifeType}) {
  return (
    <div key={data.id} className='relative px-4 mt-10'>
      <div className='my-2 font-bold text-xs px-2 capitalize'>{data.date}</div>
      <div className='w-[20px] p-[2px] h-[20px] bg-white rounded-full absolute top-0 left-[-11px] z-10'>
        <img src={data.logo} className='w-full h-full rounded-full' alt="scrimba logo" />
      </div>
      <div className='w-[500px] sm:h-[200px] rounded p-2 sm:flex'>
        <div className='h-full w-[270px] rounded'>
          <img src={data.image} className='w-full h-full rounded' alt="certif image" />
        </div>
        <div className='sm:ml-4 w-[calc(500px-245px)] mt-2 sm:mt-0'>
          <p className='text-xs pb-2 font-bold'>{data.platform}</p>
          <div className='text-lg uppercase font-bold'>{data.title}</div>
          <p className='text-xs mt-2'>{data.description}</p>
          <a href={data.link} className='text-xs mt-2 text-blue-400'>certificate link</a>
        </div>
      </div>
    </div>
  )
}



export default function Certifes() {

    const dataCollection = collection(db, "certificates")

    const get_data = async () => {
        try {
            const data = await getDocs(query(dataCollection))
            return data.docs.map(d => ({...d.data(), id : d.id})) as CertifeType[]
        } catch (err) {
            console.log(err)
            return []
        }
    }

    const res = useQuery({
        queryKey : ['certifs'],
        queryFn : get_data,
        staleTime : 1000 * 60 * 10
    })

  return (
    <div className='w-[300px] mx-auto sm:w-full h-fit min-h-[100px] px-6 sm:px-12'>
      <h1 className='my-10 text-center capitalize'>📜 certifes </h1>
      <div className='border-l-[2px] h-fit'>
        {
          res.isFetching 
          ?
          <div>loading ...</div> 
          :
          res.data?.map((cert : CertifeType) => <CertifItem data={cert} />)
        }
      </div>
    </div>
  )
}