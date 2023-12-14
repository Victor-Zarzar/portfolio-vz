import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      <div className="col-span-4">
        <div className="shadow rounded-lg p-6">
          <h2 className="title-about mb-4 text-4xl font-extrabold leading-10 tracking-tight md:text-2xl lg:text-4xl text-blue-500 text-center mt-14">About Me</h2>
          <div className="flex mt-6 justify-center">
            <div className="w-32 h-1 rounded-full bg-indigo-500 inline-flex">
            </div>
          </div>
          <p className="text-base leading-relaxed text-center xl:w-2/4 lg:w-3/4 mx-auto text-purple-900 md:text-2xl lg:text-2xl font-semibold tracking-tighter mt-10">
            My first contact with programming was in 2009, using SQL-SERVER 2000 & My SQL technologies, creating, restoring and editing databases, and creating sites in PHP.
            Always looking to improve my knowledge daily, I'm not afraid of the unknown, I try to evolve every day, new challenges are welcome.
            I love learning about new technologies and solving problems. In love with coffee, my vinyl records & Rock 'n' Roll :)
          </p>
          <h3 className="font-semibold text-center mt-3 -mb-2">
            ...
          </h3>
        </div>
      </div><div className="py-8 z-10 font-serif mt-5 h-screen flex items-center justify-center">
        <div className="container-button relative inline-flex group max-w-6xl mb-2">
          <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200">
          </div>
          <Link to="/portfolio/home">
            <button className="relative inline-flex items-center justify-center md:min-w-[5vh] lg:min-w-[5vh] xl:min-w-[7vh] 2xl:min-w-[9vh] md:text-xs lg:text-xs xl:text-xs 2xl:text-xs px-8 py-4 font-bold text-white transition-all duration-200 bg-neutral-800 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" type="button">
              Back to Home Page
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
