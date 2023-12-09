// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div className="col-span-4 sm:col-span-9">
      <div className="shadow rounded-lg p-6">
        <h2 className="title-projects mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-xl md:text-2xl lg:text-4xl sm:leading-none text-blue-500 text-center mt-14">Projects</h2>
        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex">
          </div>
        </div>
        <p className="text-base leading-relaxed text-center xl:w-2/4 lg:w-3/4 mx-auto text-purple-900 sm:text-lg md:text-2xl lg:text-2xl font-semibold tracking-tighter mt-10">...
        </p>
        <h3 className="font-semibold text-center mt-3 -mb-2">
          ...
        </h3>
      </div>
      <div className="py-8 z-10 font-serif mt-5 h-screen flex items-center justify-center">
        <div className="container-button relative inline-flex group max-w-6xl mb-2">
          <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200">
          </div>
          <Link to="/portfolio/home">
            <button className="relative inline-flex items-center justify-center sm:min-w-[5vh] md:min-w-[5vh] lg:min-w-[5vh] xl:min-w-[7vh] 2xl:min-w-[9vh] sm:text-[8px] md:text-xs lg:text-xs xl:text-xs 2xl:text-xs px-8 py-4 font-bold text-white transition-all duration-200 bg-neutral-800 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" type="button">
              Back to Home Page
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
