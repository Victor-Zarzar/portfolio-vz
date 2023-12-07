// eslint-disable-next-line no-unused-vars
import React from "react"
import { Link } from "react-router-dom";
import { FaHome, FaUsers, FaChartBar } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex">
      <div className="navbar flex flex-grow text-white sm:h-20 md:h-20 lg:h-20 xl:h-20 items-center bg-neutral-800">
        <div className="flex items-center justify-between w-full px-6">
          <div className="flex items-center">
            <span className="sm:text-[10px] md:text-xs lg:text-lg">Victor Zarzar</span>
          </div>
          <ul className="text-navbar flex mr-80 space-x-10">
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