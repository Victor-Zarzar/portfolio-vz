import React from "react"
import { Link } from "react-router-dom";
import webdeveloper from "../assets/webdeveloper.gif";


const Navbar = () => {
  return (
    <div className="flex">
      <div className="navbar flex flex-grow text-white sm:h-20 md:h-20 lg:h-20 xl:h-20 items-center bg-gray-800">
        <div className="flex items-center justify-between w-full px-6">
          <div className="flex items-center">
            <span className="sm:text-[10px] md:text-xs lg:text-lg hover:text-gray-400 sm:pl-2 md:pl-6 lg:pl-20">Victor Zarzar</span>
            <img src={webdeveloper} alt="webdeveloper" className="sm:h-4 md:h-5 lg:h-8 ml-2" />
          </div>
          <ul className="text-navbar flex sm:mr-20 md:mr-20 lg:mr-80 space-x-10">
            <div className="flex items-center">
              <li className="sm:text-[10px] md:text-xs lg:text-lg hover:text-gray-400">
                <Link to="/home">Home</Link>
              </li>
            </div>
            <div className="flex items-center">
              <li className="sm:text-[10px] md:text-xs lg:text-lg hover:text-gray-400">
                <Link to="/about">About</Link>
              </li>
            </div>
            <div className="flex items-center">
              <li className="sm:text-[10px] md:text-xs lg:text-lg hover:text-gray-400">
                <Link to="/projects">Projects</Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;