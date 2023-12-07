// eslint-disable-next-line no-unused-vars
import React from "react"
import { Link } from "react-router-dom";
import { FaHome, FaUsers, FaChartBar } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex">
      <div className="navbar flex flex-grow text-white sm:h-20 md:h-20 lg:h-20 xl:h-20 items-center bg-slate-400">
        <div className="flex items-center justify-between w-full px-6">
          <div className="flex items-center">
            <span className="sm:text-[11px] md:text-xs lg:text-lg">Victor Zarzar</span>
          </div>
          <ul className="text-navbar flex space-x-6">
            <div className="flex items-center">
              <FaHome className="nav-icon sm:mr-1 md:mr-1 lg:mr-1 sm:w-3 md:w-4 lg:w-6" />
              <li className="sm:text-[11px] md:text-xs lg:text-lg">
                <Link to="/home">Home</Link>
              </li>
            </div>
            <div className="flex items-center">
              <FaUsers className="nav-icon sm:mr-1 md:mr-1 lg:mr-1 sm:w-3 md:w-4 lg:w-6" />
              <li className="sm:text-[11px] md:text-xs lg:text-lg">
                <Link to="/about">About</Link>
              </li>
            </div>
            <div className="flex items-center">
              <FaChartBar className="nav-icon sm:mr-1 md:mr-1 lg:mr-1 sm:w-3 md:w-4 lg:w-6" />
              <li className="sm:text-[11px] md:text-xs lg:text-lg">
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