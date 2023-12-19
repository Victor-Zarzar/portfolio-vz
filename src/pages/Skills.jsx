import { useLocation } from "react-router-dom";
import react from "../assets/react.svg";
import flutter from "../assets/flutter.svg";
import docker from "../assets/docker.svg";

export default function Skills() {

    const location = useLocation();

    if (location.pathname !== "/home") {
        return null;
    }

    return (
        <div className="text-gray-200 mt-40">
            <div className="max-w-6xl mx-auto px-5 py-2">
                <div className="text-center mb-20">
                    <h1 className="title-skills mb-4 text-4xl font-extrabold leading-10 tracking-tight md:text-2xl lg:text-4xl text-blue-500 text-center">Skills</h1>
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
        </div>
    )
}
