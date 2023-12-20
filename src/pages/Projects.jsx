import { Link } from "react-router-dom";
import todo from "../assets/projects/todo.png";
import portfolio from "../assets/projects/portfolio.png";
import mario from "../assets/projects/mario.png";

export default function Projects() {

  const projects = [
    {
      title: "To-do List",
      description:
        "App Todo-List in flutter Android/iOS.",
      photo: todo,
    },
    {
      title: "Portfolio",
      description:
        "My portfolio in react, web project.",
      photo: portfolio,
    },
    {
      title: "Mario Jump",
      description:
        "App Mario Jump in flutter Android/iOS",
      photo: mario,
    },
  ];

  const sourceCodeLinks = [
    "https://github.com/Victor-Zarzar/ToDoList-Flutter",
    "https://github.com/Victor-Zarzar/SuperMario-Flutter",
    "https://github.com/Victor-Zarzar/portfolio-vz",
  ];

  return (
    <div className="col-span-4 mx-auto">
      <div className="shadow rounded-lg p-6">
        <h2 className="title-projects mb-4 text-4xl font-extrabold leading-10 tracking-tight md:text-2xl lg:text-4xl text-blue-500 text-center mt-14">Projects</h2>
        <div className="flex mt-6 justify-center">
          <div className="w-32 h-1 rounded-full bg-indigo-500 inline-flex"></div>
        </div>
      </div>
      <div className="px-10 my-4 mt-20" id="projects">
        <h1 className="title-skills mb-4 font-extrabold leading-10 tracking-tight md:text-2xl lg:text-4xl text-blue-500 mt-16">
          Featured projects:
        </h1>
        <p className="text-base leading-relaxed text-purple-900 md:text-2xl lg:text-2xl font-semibold tracking-tighter mb-16">
          Here are a few of my live, real-world projects
        </p>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-10 gap-10 md:gap-16 lg:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col shadow-sm h-[26rem] w-[21rem] md:h-[28rem] md:w-[25rem] lg:h-[28rem] lg:w-[25rem] bg-gray-800 p-8 rounded-2xl">
                <a href={sourceCodeLinks[index]} target="_blank" rel="noreferrer" className="mb-4">
                  <img src={project.photo} alt={project.title} />
                </a>
                <h3 className="title-projects mb-4 text-lg font-extrabold leading-10 tracking-tight md:text-lg text-blue-500 text-center">
                  {project.title}
                </h3>
                <p className="text-base leading-relaxed text-purple-800 md:text-2xl lg:text-2xl font-semibold tracking-tighter">
                  {project.description}
                </p>
                <div className="container-button relative inline-flex mt-5 mb-3 mx-auto">
                  <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200">
                  </div>
                  <a href={sourceCodeLinks[index]} target="_blank" rel="noreferrer">
                    <button className="relative inline-flex items-center justify-center w-[9rem] md:w-[9rem] text-xs md:text-xs px-8 py-4 font-bold text-white transition-all duration-200 bg-neutral-800 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" type="button">Source Code</button>
                  </a>
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E]"></div>
            </div>
          ))}
        </div>
        <div className="py-8 z-10 font-serif mt-40 flex items-center justify-center">
          <div className="container-button relative inline-flex group max-w-6xl mb-2">
            <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
            <Link to="/portfolio/home">
              <button className="relative inline-flex items-center justify-center w-[10rem] md:w-[12rem] lg:w-[13rem] text-[10px] md:text-xs lg:text-xs px-8 py-4 font-bold text-white transition-all duration-200 bg-neutral-800 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" type="button">
                Back to Home Page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
