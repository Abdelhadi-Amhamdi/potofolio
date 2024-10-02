import { useContext } from "react"
import { ThemeContext } from "../contexts"
import { FaLocationDot, FaPhone } from "react-icons/fa6"
import { eninfos as infos, frInfos } from "../data"
import { FaMailBulk, FaReact } from "react-icons/fa"
import { SiFirebase, SiReactquery, SiTailwindcss, SiTypescript } from "react-icons/si"


export default function Footer() {
    const {theme, lang} = useContext(ThemeContext) || {}
    return (
          <footer className={`w-full p-2 backdrop-blur-sm mt-10 py-4  flex items-center ${theme == 'dark' ? "bg-white/10" : "bg-black/90 text-white"}`}>
            <div className='p-2 w-1/2 h-full'>
              <ul className='text-[10px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <li className='flex items-center'>
                  <div className='text-white bg-primary p-2 mr-2 rounded-full'>
                    <FaLocationDot />
                  </div>
                  <div className=''>
                    <div className='font-bold'>{infos.address}</div>
                    <div className='mt-[6px]'>{infos.code}</div>
                  </div>
                </li>
                <li className='flex items-center'>
                  <div className='text-white bg-primary  p-2 mr-2 rounded-full'>
                    <FaPhone />
                  </div>
                  <span className=''>{infos.phone}</span>
                </li>
                <li className='flex items-center'>
                  <div className='text-white bg-primary p-2 mr-2 rounded-full'>
                    <FaMailBulk />
                  </div>
                  <span className=''>{infos.email}</span>
                </li>
              </ul>
            </div>
            <div className='flex justify-center h-full w-1/2'>
              <div className=''>
                <h1 className='capitalize text-[14px]'>{lang == 'en' ? infos.footer : frInfos.footer}</h1>
                <ul className='flex mt-4 justify-evenly'>
                  <li><FaReact /></li>
                  <li><SiTypescript /></li>
                  <li><SiTailwindcss /></li>
                  <li><SiFirebase /></li>
                  <li><SiReactquery /></li>
                </ul>
              </div>
            </div>
          </footer>
    )
}