import { useContext } from "react";
import { ThemeContext } from "./contexts";

export default function LastProject() {
  const { theme } = useContext(ThemeContext) || {};
  return (
    <div>
      <div
        className={`relative grid gap-2 h-fit md:h-[500px] grid-cols-12 ${
          theme === "light"
            ? "bg-white text-black"
            : "bg-black text-white border-white/10 shadow-white/10"
        } my-[200px] border-[1px] shadow-xl rounded`}
      >
        <div className="absolute top-[-10px] left-[-10px] bg-primary px-8 rounded text-sm py-3 text-white font-cav">
          new project
        </div>
        <div className="col-span-12 md:col-span-6 md:pl-20 h-[500px] md:h-full flex justify-center items-center">
          <div className="px-6 md:p-0">
            <p className="text-lg font-cav">new project</p>
            <h1 className="mt-2 text-[30pt] font-semibold">
              Interactive Gaming & Chat Platform
            </h1>
            <p className="mt-2 text-xs">
              a dynamic web application that combines real-time communication
              and competitive gameplay. Users can chat, send and accept friend
              requests, and engage in interactive games like ping pong—either
              casually or through organized tournaments. The platform emphasizes
              community, friendly competition, and seamless user experience
              across all features.
            </p>
            <button className="mt-6 bg-primary h-[44px] w-[160px] rounded-full flex">
              <a
                className="text-sm w-full h-full flex items-center justify-center text-white"
                href="https://ping-pong.tech/"
                target="#"
              >
                visit now !
              </a>
            </button>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 flex items-end">
          <img
            src={theme === "light" ? "/7.png" : "5.png"}
            className="h-auto rounded w-full"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
