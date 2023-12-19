import { useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import webdeveloper from "../assets/webdeveloper.gif";

const Navbar = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Navbar;