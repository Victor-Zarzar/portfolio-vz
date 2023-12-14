import { useState } from "react";
import { Link } from "react-router-dom";
import webdeveloper from "../assets/webdeveloper.gif";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex">
      <div className="navbar flex flex-grow text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400 h-20 items-center bg-gray-800">
        <div className={`flex items-center justify-between w-full px-6 ${menuOpen ? 'lg:pl-6' : 'lg:pl-32'}`}>
          <div className="flex items-center">
            <span className="text-lg hover:text-gray-400 pl-4">Victor Zarzar</span>
            <img src={webdeveloper} alt="webdeveloper" className="h-8 ml-2" />
          </div>
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-lg text-gray-400 hover:text-white focus:outline-none">
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
          <ul className={`text-navbar flex space-x-3 ${menuOpen ? "flex-col" : "hidden"} lg:flex`}>
            <div className={`flex items-center ${menuOpen ? 'ml-4' : 'mr-3'}`}>
              <li className="text-lg hover:text-gray-400">
                <Link to="/home" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
            </div>
            <div className={`flex items-center ${menuOpen ? 'mr-0' : 'mr-3'}`}>
              <li className="text-lg hover:text-gray-400">
                <Link to="/about" onClick={toggleMenu}>
                  About
                </Link>
              </li>
            </div>
            <div className={`flex items-center ${menuOpen ? 'mr-0' : 'mr-3'}`}>
              <li className="text-lg hover:text-gray-400">
                <Link to="/projects" onClick={toggleMenu}>
                  Projects
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
