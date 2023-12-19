import { Link } from 'react-router-dom';
import study from "../assets/study.svg";
import unitedstates from "../assets/unitedstates.svg";
import brazil from "../assets/brazil.svg";
import qa from "../assets/qa.svg";
import dev from "../assets/dev.svg";
import profile from "../assets/profile.jpg";

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
          <img src={profile} alt="profile" className="w-40 h-40 md:w-72 md:h-72 bg-gray-300 rounded-full mb-4 shrink-0 mx-auto mt-14" />
          <p className="text-base leading-relaxed text-center xl:w-2/4 lg:w-3/4 mx-auto text-purple-900 md:text-2xl lg:text-2xl font-semibold tracking-tighter mt-10">
            My first contact with programming was in 2009, using SQL-SERVER 2000 & My SQL technologies, creating, restoring and editing databases, and creating sites in PHP.
            Always looking to improve my knowledge daily, I'm not afraid of the unknown, I try to evolve every day, new challenges are welcome.
            I love learning about new technologies and solving problems. In love with coffee, my vinyl records & Rock 'n' Roll :)
          </p>
        </div>
        <div className="shadow rounded-lg p-6 mt-20">
          <h2 className="title-about mb-4 text-4xl font-extrabold leading-10 tracking-tight md:text-2xl lg:text-4xl text-blue-500 text-center mt-14">Experience Tech</h2>
          <div className="flex mt-6 justify-center">
            <div className="w-32 h-1 rounded-full bg-indigo-500 inline-flex">
            </div>
          </div>
          <div className="flex">
            <div className="flex items-center mx-auto mt-10">
              <img src={qa} alt="qa" className="h-4 w-5 md:w-5 md:h-6 lg:w-6 lg:h-6 mr-1" />
              <span className="text-sm leading-relaxed text-purple-900 md:text-2xl lg:text-2xl font-semibold tracking-tighter">QA Tester - Freelancer - December 2022 - March 2023</span>
            </div>
          </div>
          <div className="flex">
            <div className="flex items-center mx-auto mt-5">
              <img src={dev} alt="dev" className="h-4 w-5 md:w-5 md:h-6 lg:w-6 lg:h-6 mr-1" />
              <span className="text-base leading-relaxed text-purple-900 md:text-2xl lg:text-2xl font-semibold tracking-tighter">Software Developer JR - March 2023 - Present</span>
            </div>
          </div>
        </div>
      </div>
      <div className="shadow rounded-lg p-6 mt-20">
        <h2 className="title-about mb-4 text-4xl font-extrabold leading-10 tracking-tight md:text-2xl lg:text-4xl text-blue-500 text-center mt-14">Education</h2>
        <div className="flex mt-6 justify-center">
          <div className="w-32 h-1 rounded-full bg-indigo-500 inline-flex">
          </div>
        </div>
        <div className="flex">
          <div className="flex items-center mx-auto mt-10">
            <img src={study} alt="study" className="h-4 w-5 md:w-5 md:h-6 lg:w-6 lg:h-6 mr-1" />
            <span className="text-base leading-relaxed text-purple-900 md:text-2xl lg:text-2xl font-semibold tracking-tighter">Analysis and systems development - Ampli/SP</span>
          </div>
        </div>
      </div>
      <div className="shadow rounded-lg p-6 mt-20">
        <h2 className="title-about mb-4 text-4xl font-extrabold leading-10 tracking-tight md:text-2xl lg:text-4xl text-blue-500 text-center mt-14">Languages</h2>
        <div className="flex mt-6 justify-center">
          <div className="w-32 h-1 rounded-full bg-indigo-500 inline-flex">
          </div>
        </div>
        <div className="flex">
          <div className="flex items-center mx-auto mt-10">
            <img src={unitedstates} alt="unitedstates" className="h-4 w-5 md:w-5 md:h-6 lg:w-6 lg:h-6 mr-1" />
            <span className="text-base leading-relaxed text-purple-900 md:text-2xl lg:text-2xl font-semibold tracking-tighter">EN - Basic</span>
          </div>
        </div>
        <div className="flex">
          <div className="flex items-center mx-auto mt-5">
            <img src={brazil} alt="brazil" className="h-4 w-5 md:w-5 md:h-6 lg:w-6 lg:h-6 mr-1" />
            <span className="text-base leading-relaxed text-purple-900 md:text-2xl lg:text-2xl font-semibold tracking-tighter">PT-BR - Native Speaker</span>
          </div>
        </div>
      </div>
      <div className="py-8 z-10 font-serif mt-20 flex items-center justify-center">
        <div className="container-button relative inline-flex group max-w-6xl mb-2">
          <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200">
          </div>
          <Link to="/portfolio/home">
            <button className="relative inline-flex items-center justify-center w-[10rem] md:w-[12rem] lg:w-[13rem] text-[10px] md:text-xs lg:text-xs px-8 py-4 font-bold text-white transition-all duration-200 bg-neutral-800 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" type="button">
              Back to Home Page
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
