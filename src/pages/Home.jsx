import { useLocation } from "react-router-dom";
import itdeveloper from "../assets/itdeveloper.gif";
import { Link } from "react-router-dom";

export default function Home() {
  const location = useLocation();

  if (location.pathname !== "/portfolio/home") {
    return null;
  }

  return (
    <>
      <div className="py-8 z-10 font-serif mt-5">
        <div className="flex flex-col md:flex-row items-center max-w-6xl px-6 py-8 mx-auto">
          <div className="w-full md:w-1/2 py-8">
            <h1 className="text-purple-900 sm:text-2xl md:text-4xl lg:text-6xl font-semibold leading-none tracking-tighter">
              Welcome to <p className="text-blue-500">My Portfolio, </p> I´am Web/Mobile Developer 👋.
            </h1>
          </div>
          <div className="w-full md:w-1/2 py-8 text-right">
            <img src={itdeveloper} alt="webdeveloper" className="sm:h-40 md:h-40 lg:h-60 mr-40 inline-block" />
          </div>
        </div>
        <div className="container-button relative inline-flex group sm:ml-0 md:ml-0 lg:ml-20 xl:ml-24 2xl:ml-96 space-x-5 max-w-6xl">
          <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200">
          </div>
          <a href="https://www.instagram.com/victorzarzar7" target="_blank" rel="noreferrer" className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-neutral-800 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" type="button">Contact</a>
          <a href="" target="_blank" rel="noreferrer" className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-neutral-800 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" type="button">Donwload CV</a>
        </div>
      </div>
    </>
  );
}