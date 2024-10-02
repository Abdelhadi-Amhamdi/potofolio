import { useContext } from "react"
import { articles, eninfos, frInfos } from "../data"
import { ThemeContext } from "../contexts"


export default function Articles() {
    const {theme , lang}= useContext(ThemeContext) || {}
    return (
      <div className='w-[300px] sm:w-full sm:px-6 h-fit ml-[50%] translate-x-[-50%] mt-10'>
        <h1 className='my-10 text-center capitalize'>📜 {lang == 'en' ? eninfos.atitle : frInfos.atitle} </h1>
        <ul className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-4'>
            {
              articles.map((art, index) => {
                return (
                  <li key={index} className={`${theme == 'dark' ? "border-white/10" : ""} backdrop-blur-sm sm:max-w-[250px] relative border-[.3px] p-2 rounded-sm`}>
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