import { useContext } from "react"
import { ThemeContext } from "../contexts"
import { FaMoon } from "react-icons/fa"


export default function Nav() {
    const theme = useContext(ThemeContext)
    return (
        <nav className={`flex justify-between w-full p-4`}>
          <h1 className='text-sm'>
            <span className='text-2xl bg-gradient-to-r from-[#8A2387] via-[#E94057] to-[#F27121] text-transparent bg-clip-text'>A
              <span className='text-sm'>2.</span>
            </span>
            M
          </h1>
          <ul className='flex items-center'>
            <li onClick={() => {
              theme?.themeHandler(theme?.theme == 'light' ? 'dark' : 'light')
            }} className='cursor-pointer border-[1px] h-[35px] p-2 rounded-full'>
              <FaMoon />
            </li>
            <li  className='cursor-pointer border-[1px] h-[35px] p-2 rounded-full ml-2 flex text-[14px] items-center'>
              <h1>English</h1>
            </li>
            <li className='ml-4 bg-gradient-to-r from-[#8A2387] via-[#E94057] to-[#F27121] h-[35px] flex items-center text-white py-1 px-4 rounded-full'>
              <h1 className='capitalize text-[13px]'>resume</h1>
            </li>
          </ul>
        </nav>
    )
  }