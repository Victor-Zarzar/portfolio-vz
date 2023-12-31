import { Link } from "react-router-dom";

export default function Error404() {
    return (
        <div className="flex items-center h-screen p-16">
            <div className="container flex flex-col items-center ">
                <div className="flex flex-col gap-6 max-w-md text-center">
                    <h2 className="font-extrabold text-9xl text-gray-600">
                        <span className="sr-only">Error</span>404
                    </h2>
                    <p className="text-2xl md:text-3xl dark:text-gray-400">Sorry, we couldn't find this page.</p>
                    <div className="container-button relative inline-flex group mx-auto mt-40 mb-20">
                        <div
                            className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200">
                        </div>
                        <Link to="/portfolio/home">
                            <button className="relative inline-flex items-center justify-center w-[10rem] md:w-[12rem] lg:w-[13rem] text-[10px] md:text-xs lg:text-xs px-8 py-4 font-bold text-white transition-all duration-200 bg-neutral-800 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" type="button">Back to Home Page</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
