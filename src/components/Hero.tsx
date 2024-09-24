import { links } from "../data";
import ComputerCanvas from "./Computer";


export default function Hero() {
    return (
          <div className={`p-2 mt-10 sm:flex sm:justify-center text-center`}>
            <div className='sm:w-1/2'>
              <h1 className='text-xl font-bold my-8'>Hi, I'm <span className='bg-gradient-to-r from-[#8A2387] via-[#E94057] to-[#F27121] text-transparent bg-clip-text'>Abdelhadi Amhamdi</span> 👋</h1>
              <p className='text-[12px] px-6 text-pretty'>I'm a passionate computer science student with a deep interest in software development, web technologies, and problem-solving. I'm always eager to learn new things and apply my knowledge to build efficient and scalable solutions.</p>
              <ul className='ml-[50%] translate-x-[-50%] m-8 flex w-[200px] justify-evenly p-2'>
                {
                  links.map((l, index) => <a target="_blank" key={index} href={l.link}>{l.icon}</a>)
                }
              </ul>
            </div>
            <div className='sm:w-1/2 '>
              {/* <img className={`w-[150px] h-[150px] border-4 ml-[50%] translate-x-[-50%] my-10 rounded-full`} src="/aamhamdi.jpg" alt="" /> */}
              <ComputerCanvas />
            </div>
          </div>
    )
  }