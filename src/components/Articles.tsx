import { useContext } from "react"
import { eninfos, frInfos } from "../data"
import { ThemeContext } from "../contexts"
import { getDocs, collection } from 'firebase/firestore'
import { db } from "../firebase"
import { useQuery } from "@tanstack/react-query"
import { Link } from "react-router-dom"
import { ArticleType } from "../types"


function ArticleCard({data} : {data : ArticleType}) {
    const { theme }= useContext(ThemeContext) || {}
    return (
      <li 
        className={`${theme == 'dark' ? "border-white/10" : ""} backdrop-blur-sm relative p-2 rounded-sm`}
      >
        <Link target='_blank' to={data.link}>
          <img src={data.image} className='rounded-t-sm h-[220px] w-full' alt="" />
          <div className='p-2'>
            <div className="flex items-center my-2">
              <h1 className="text-[9pt] mr-10">{data.pub_date}</h1>
              <ul className='flex text-[16px]'>
                {data.tags.map((t, index) => <li key={index} className='mr-2'>#{t}</li>)}
              </ul>
            </div>
            <h1 className='mb-2 text-[16pt] font-bold'>{data.title}</h1>
            <p className='text-[10px] '>{data.description.substring(0, 160)} ...</p>
            <div className="mt-6 flex items-center">
              <img src={data.author.image} className="w-8 rounded-full" alt="" />
              <div className="ml-4">
                <h1 className="text-[8pt] capitalize">{data.author.fullname}</h1>
                <p className="text-[6pt] mt-[2px] uppercase">software developer</p>
              </div>
            </div>
          </div>
        </Link>
      </li>
    )
}

export default function Articles() {
  const { lang }= useContext(ThemeContext) || {}

  const ArticlesCollection = collection(db, 'articles')

  const query = useQuery({
    queryKey : ['articles'],
    queryFn : async () => {
      try {
        const data = await getDocs(ArticlesCollection)
        return data.docs.map(d => d.data()) as ArticleType[]
      } catch (error) {
        console.log(error)
        return []
      }
    }
  })


  return (
    <div className='w-[300px] sm:w-full sm:px-6 h-fit ml-[50%] translate-x-[-50%] mt-10'>
      <h1 className='my-10 text-center capitalize'>📜 {lang == 'en' ? eninfos.atitle : frInfos.atitle} </h1>
      <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        { query.data?.map((art, index) => <ArticleCard data={art} key={index} />) }
      </ul>
    </div>
  )
  }