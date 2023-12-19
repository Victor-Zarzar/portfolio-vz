import { useLocation } from "react-router-dom";
import itdeveloper from "../assets/itdeveloper.gif";
import react from "../assets/react.svg";
import flutter from "../assets/flutter.svg";
import docker from "../assets/docker.svg";

export default function Home() {
  const location = useLocation();

  if (location.pathname !== "/home") {
    return null;
  }

  return (
    <>
      <div className="py-8 z-10 font-serif mt-5">
        <div className="flex flex-col md:flex-row items-center max-w-6xl px-6 py-8 mx-auto">
          <div className="w-full md:w-1/2 py-8">
            <h1 className="text-purple-900 text-2xl md:text-3xl lg:text-4xl font-semibold leading-none tracking-tighter">
              Welcome to <p className="text-blue-500">My Portfolio, </p> I´am Web/Mobile Developer🖖🏻.
            </h1>
          </div>
          <div className="w-full md:w-1/2 py-8 text-right">
            <img src={itdeveloper} alt="itdeveloper" className="h-40 md:h-40 lg:h-60 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-1 inline-block" />
          </div>
        </div>
        <div className="container-button relative inline-flex group md:ml-0 lg:ml-20 xl:ml-24 2xl:ml-96 space-x-5 max-w-6xl">
          <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200">
          </div>
          <a href="https://github.com/Victor-Zarzar" target="_blank" rel="noreferrer" className="relative inline-flex items-center justify-center w-[6rem] md:w-[8rem] lg:w-[9rem] text-xs md:text-xs lg:text-xs px-8 py-4 font-bold text-white transition-all duration-200 bg-neutral-800 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" type="button">GitHub</a>
          <a href="https://www.linkedin.com/in/victorzarzar" target="_blank" rel="noreferrer" className="relative inline-flex items-center justify-center w-[6rem] md:w-[8rem] lg:w-[9rem] text-xs md:text-xs lg:text-xs px-8 py-4 font-bold text-white transition-all duration-200 bg-neutral-800 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" type="button">Linkedin</a>
        </div>
        <div className="text-gray-200 mt-40">
          <div className="max-w-6xl mx-auto px-5 py-2">
            <div className="text-center mb-20">
              <h1 className="title-skills mb-4 font-extrabold leading-10 tracking-tight md:text-2xl lg:text-4xl text-blue-500">Skills</h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-purple-900 md:text-2xl lg:text-2xl font-semibold tracking-tighter">Some of the technologies I use in my daily life.</p>
              <div className="flex mt-6 justify-center">
                <div className="w-32 h-1 rounded-full bg-indigo-500 inline-flex">
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-4 -mb-10 -mt-4">
              <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col mx-auto">
                <div className="pattern-dots-md gray-light">
                  <div className="rounded-2xl bg-gray-800 p-4 transform translate-x-6 -translate-y-6">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0 p-2">
                      <img src={react} alt="react" className="md:w-5 md:h-6 lg:w-10 lg:h-8" />
                    </div>
                    <div className="flex-grow h-60 w-48 md:h-60 md:w-40 lg:h-60 lg:w-40">
                      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E]"></span>
                      <h2 className="md:text-lg lg:text-xl title-font font-medium mb-3">Front End</h2>
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
              <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col mx-auto">
                <div className="pattern-dots-md gray-light">
                  <div className="rounded-2xl bg-gray-800 p-4 transform translate-x-6 -translate-y-6">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
                      <img src={flutter} alt="flutter" className="md:w-5 md:h-6 lg:w-10 lg:h-8" />
                    </div>
                    <div className="flex-grow h-60 w-48 md:h-60 md:w-40 lg:h-60 lg:w-40">
                      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E]"></span>
                      <h2 className="md:text-lg lg:text-xl title-font font-medium mb-3">Mobile</h2>
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
              <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col mx-auto">
                <div className="pattern-dots-md gray-light">
                  <div className="rounded-2xl bg-gray-800 p-4 transform translate-x-6 -translate-y-6">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-5 flex-shrink-0">
                      <img src={docker} alt="docker" className="md:w-5 md:h-6 lg:w-10 lg:h-8" />
                    </div>
                    <div className="flex-grow h-60 w-48 md:h-60 md:w-40 lg:h-60 lg:w-40">
                      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E]"></span>
                      <h2 className="md:text-lg lg:text-xl title-font font-medium mb-3">Technologies</h2>
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
          <div className="col-span-4 mt-20">
            <div className="shadow rounded-lg p-6">
              <h2 className="title-skills mb-4 text-4xl font-extrabold leading-10 tracking-tight md:text-2xl lg:text-4xl text-blue-500 text-center mt-14">My Current Location</h2>
              <p className="text-base leading-relaxed text-center xl:w-2/4 lg:w-3/4 mx-auto text-purple-900 md:text-2xl lg:text-2xl font-semibold tracking-tighter mt-5">
                Novo Hamburgo, RS - Brazil
              </p>
              <h3 className="text-base text-center leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-purple-900 md:text-2xl lg:text-2xl font-semibold tracking-tighter">
                (51) 9.98618-1044
              </h3>
              <div className="flex mt-6 justify-center">
                <div className="w-32 h-1 rounded-full bg-indigo-500 inline-flex">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-20 text-center text-white items-center">
          <ul className="flex justify-center mt-5 space-x-5">
            <li>
              <a href="https://facebook.com/victorzarzar58" target="_blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400" rel="noreferrer">
                <svg className="h-8 w-8 md:w-12 md:h-12 lg:w-12 lg-h-12" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://instagram.com/victorzarzar7" target="_blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400" rel="noreferrer">
                <svg className="h-8 w-8 md:w-12 md:h-12 lg:w-12 lg-h-12" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/victorzarzar" target="_blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400" aria-label="Visit TrendyMinds LinkedIn" rel="noreferrer"><svg
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-8 w-8 md:w-12 md:h-12 lg:w-12 lg-h-12">
                <path fill="currentColor"
                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                </path>
              </svg>
              </a>
            </li>
            <li>
              <a href="https://github.com/Victor-Zarzar" target="_blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400" rel="noreferrer">
                <svg className="h-8 w-8 md:w-12 md:h-12 lg:w-12 lg-h-12" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}