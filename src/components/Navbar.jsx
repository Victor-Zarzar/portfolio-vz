import { useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import webdeveloper from "../assets/webdeveloper.gif";

// eslint-disable-next-line react/prop-types
const Navbar = ({ setTheme }) => {
  const Links = [
    { name: "Home", link: "home" },
    { name: "About me", link: "about" },
    { name: "Projects", link: "projects" },
  ];
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full max-w-7xl">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <span className="text-xl text-gray-400 hover:text-white focus:outline-none pl-6 md:pl-20">Victor Zarzar</span>
          <img src={webdeveloper} alt="webdeveloper" className="h-8 ml-2" />
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7 text-gray-400">
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 absolute md:static  md:z-auto z-10 left-0 w-full md:w-auto mt-4 md:mt-0 md:pl-0 pl-9 bg-gray-800 sm:bg-transparent transition-all duration-500 ease-in ${open ? "top-12" : "top-[-490px]"}`}>
          {Links.map((link) => (
            <li className="md:ml-8 md:my-0 my-7 font-semibold" key={link.name}>
              <Link
                to={link.link}
                smooth="true"
                spy="true"
                className="text-xl text-gray-400 hover:text-white focus:outline-none hover:text-primary duration-500">
                {link.name}
              </Link>
            </li>
          ))}
          <li className="md:ml-3 md:my-0 my-7">
            <button
              className="h-12 w-12 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => {
                setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
              }}>
              <svg className="fill-yellow-500 hidden dark:block" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  fillRule="evenodd" clipRule="evenodd"></path>
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
