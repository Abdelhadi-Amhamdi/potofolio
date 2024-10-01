import { links, infos } from "../data";
import Img from "./Img";


export default function Hero() {
    return (
          <div className={`p-2 mt-10 py-16 sm:flex sm:justify-center items-center text-center`}>
            <div className='sm:w-1/2 flex items-center'>
              <div className="w-full">
                <h1 className='text-xl font-bold my-8 text-[22pt]'>Hi, I'm <span className='bg-primary text-transparent bg-clip-text'>Abdelhadi Amhamdi</span> 👋</h1>
                <p className='text-[10pt] px-2 text-pretty'>{infos.endesc}</p>
                <ul className='ml-[50%] translate-x-[-50%] m-8 flex w-[200px] justify-evenly p-2'>
                  {
                    links.map((l, index) => <a target="_blank" key={index} href={l.link}>{l.icon}</a>)
                  }
                </ul>
              </div>
            </div>
            <div className='sm:w-1/2  h-[400px] flex items-center justify-center'>
              <div className="m-10">
                <Img />
              </div>
            </div>
          </div>
    )
  }