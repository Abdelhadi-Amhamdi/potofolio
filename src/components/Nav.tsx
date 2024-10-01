import { useContext } from "react"
import { ThemeContext } from "../contexts"
import { SiReaddotcv } from "react-icons/si"
import { TbLanguage } from "react-icons/tb"
import { PiMoonStarsLight } from "react-icons/pi"


export default function Nav() {
    const theme = useContext(ThemeContext)
    return (
        <nav className={`flex justify-between w-full p-4 sticky top-0 left-0 backdrop-blur-xl z-20`}>
          <h1 className='text-sm'>
            <span className='text-2xl bg-primary text-transparent bg-clip-text'>A
              <span className='text-sm'>2.</span>
            </span>
            M
          </h1>
          <ul className='flex items-center'>
            <li onClick={() => {
              theme?.themeHandler(theme?.theme == 'light' ? 'dark' : 'light')
            }} className={`cursor-pointer border-[1px] ${theme?.theme == 'light' ? "border-black/50" : "border-white/40"}  h-[35px] p-2 rounded-full`}>
              <PiMoonStarsLight />
            </li>
            <li  className={`cursor-pointer border-[1px] ${theme?.theme == 'light' ? "border-black/50" : "border-white/40"} h-[35px] w-[100px] p-2 rounded-full ml-2 flex items-center justify-center`}>
              <h1 className="text-[10pt]">English</h1>
              <TbLanguage className="ml-2" />
            </li>
            <li className='ml-4 relative bg-primary h-[35px] flex items-center text-white py-1 rounded-full'>
              <a href="/Resume.pdf" target="_blank" className="h-full flex items-center w-full px-4">
                <h1 className='capitalize text-[13px] flex items-center'>resume <SiReaddotcv className="ml-2" /></h1>
              </a>
              <div className="absolute top-[-3px] left-[-3px] flex h-[14px] w-[14px]">
                <span className="bg-orange-600 w-full h-full rounded-full absolute animate-ping"></span>
                <span className="bg-orange-500 w-full h-full rounded-full"></span>
              </div>
            </li>
          </ul>
        </nav>
    )
  }