import { useLocation } from "react-router-dom";
import itdeveloper from "../assets/itdeveloper.gif";
import react from "../assets/react.svg";
import flutter from "../assets/flutter.svg";
import docker from "../assets/docker.svg";

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
            <h1 className="text-purple-900 sm:text-xl md:text-2xl lg:text-5xl font-semibold leading-none tracking-tighter">
              Welcome to <p className="text-blue-500">My Portfolio, </p> I´am Web/Mobile Developer 👋.
            </h1>
          </div>
          <div className="w-full md:w-1/2 py-8 text-right">
            <img src={itdeveloper} alt="itdeveloper" className="sm:h-28 md:h-40 lg:h-60 sm:mr-20 sm:-mt-60 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-1 inline-block" />
          </div>
        </div>
        <div className="container-button relative inline-flex group sm:ml-0 md:ml-0 lg:ml-20 xl:ml-24 2xl:ml-96 space-x-5 max-w-6xl">
          <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200">
          </div>
          <a href="https://github.com/Victor-Zarzar" target="_blank" rel="noreferrer" className="relative inline-flex items-center justify-center sm:min-w-[5vh] md:min-w-[5vh] lg:min-w-[5vh] xl:min-w-[7vh] 2xl:min-w-[9vh] sm:text-[8px] md:text-xs lg:text-xs xl:text-xs 2xl:text-sm px-8 py-4 font-bold text-white transition-all duration-200 bg-neutral-800 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" type="button">GitHub</a>
          <a href="https://www.linkedin.com/in/victorzarzar" target="_blank" rel="noreferrer" className="relative inline-flex items-center justify-center sm:min-w-[5vh] md:min-w-[5vh] lg:min-w-[5vh] xl:min-w-[7vh] 2xl:min-w-[9vh] sm:text-[8px] md:text-xs lg:text-xs xl:text-xs 2xl:text-sm px-8 py-4 font-bold text-white transition-all duration-200 bg-neutral-800 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" type="button">Linkedin</a>
        </div>
        <hr className="divider-home border-2 mt-28" />
        <div className="text-gray-200 mt-20">
          <div className="max-w-6xl mx-auto px-5 py-2">
            <div className="text-center mb-20">
              <h1 className="title-skills mb-4 font-extrabold leading-10 tracking-tight sm:text-xl md:text-2xl lg:text-4xl sm:leading-none text-blue-500">Skills</h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-purple-900 sm:text-lg md:text-2xl lg:text-2xl font-semibold tracking-tighter">Some of the technologies I use in my daily life.</p>
              <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex">
                </div>
              </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
              <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col">
                <div className="pattern-dots-md gray-light">
                  <div className="rounded-2xl bg-gray-800 p-4 transform translate-x-6 -translate-y-6">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0 p-2">
                      <img src={react} alt="react" className="sm:w-4 sm:h-5 md:w-5 md:h-6 lg:w-10 lg:h-8" />
                    </div>
                    <div className="flex-grow sm:h-60 sm:w-40 md:h-60 md:w-40 lg:h-60 lg:w-40">
                      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E]"></span>
                      <h2 className="sm:text-sm md:text-lg lg:text-xl title-font font-medium mb-3">Front End</h2>
                      <ul className="text-sm text-justify">
                        <li className="mb-2">HTML</li>
                        <li className="mb-2">Tailwind CSS</li>
                        <li className="mb-2">Javascript</li>
                        <li className="mb-2">React</li>
                        <li className="mb-2">Cypress</li>
                        <li className="mb-2">Fast API - Swagger</li>
                        <li className="mb-2">Postman</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col">
                <div className="pattern-dots-md gray-light">
                  <div className="rounded-2xl bg-gray-800 p-4 transform translate-x-6 -translate-y-6">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
                      <img src={flutter} alt="flutter" className="sm:w-4 sm:h-5 md:w-5 md:h-6 lg:w-10 lg:h-8" />
                    </div>
                    <div className="flex-grow sm:h-60 sm:w-40 md:h-60 md:w-40 lg:h-60 lg:w-40">
                      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E]"></span>
                      <h2 className="sm:text-sm md:text-lg lg:text-xl title-font font-medium mb-3">Mobile</h2>
                      <ul className="text-sm text-justify">
                        <li className="mb-2">Dart</li>
                        <li className="mb-2">Flutter</li>
                        <li className="mb-2">Android Studio</li>
                        <li className="mb-2">Xcode</li>
                        <li className="mb-2">Firebase</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col">
                <div className="pattern-dots-md gray-light">
                  <div className="rounded-2xl bg-gray-800 p-4 transform translate-x-6 -translate-y-6">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-5 flex-shrink-0">
                      <img src={docker} alt="docker" className="sm:w-4 sm:h-5 md:w-5 md:h-6 lg:w-10 lg:h-8" />
                    </div>
                    <div className="flex-grow sm:h-60 sm:w-40 md:h-60 md:w-40 lg:h-60 lg:w-40">
                      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E]"></span>
                      <h2 className="sm:text-sm md:text-lg lg:text-xl title-font font-medium mb-3">Technologies</h2>
                      <ul className="text-sm text-justify">
                        <li className="mb-2">Docker</li>
                        <li className="mb-2">Git</li>
                        <li className="mb-2">GitLab</li>
                        <li className="mb-2">Visual Studio Code</li>
                        <li className="mb-2">Linux</li>
                        <li className="mb-2">macOS</li>
                        <li className="mb-2">Windows</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="divider-home border-2 mt-20" />
          <div className="col-span-4 sm:col-span-9">
            <div className="shadow rounded-lg p-6">
              <h2 className="title-skills mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-xl md:text-2xl lg:text-4xl sm:leading-none text-blue-500 text-center mt-14">My Current Location</h2>
              <p className="text-base leading-relaxed text-center xl:w-2/4 lg:w-3/4 mx-auto text-purple-900 sm:text-lg md:text-2xl lg:text-2xl font-semibold tracking-tighter mt-5">
                Novo Hamburgo, RS - Brazil
              </p>
              <h3 className="text-base text-center leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-purple-900 sm:text-lg md:text-2xl lg:text-2xl font-semibold tracking-tighter">
                (51) 9.98618-1044
              </h3>
              <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}