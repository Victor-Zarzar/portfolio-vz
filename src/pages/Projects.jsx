import { Link } from "react-router-dom";

export default function Projects() {

  const projects = [
    {
      title: "ChatGPT",
      description:
        "...",
      photo: "/src/assets/projects/...",
    },
    {
      title: "Portfolio",
      description:
        "...",
      photo: "/src/assets/projects/...",
    },
    {
      title: "WAF-HOOK",
      description:
        "...",
      photo: "/src/assets/projects/...",
    },
  ];

  return (
    <div className="col-span-4 mx-auto">
      <div className="shadow rounded-lg p-6">
        <h2 className="title-projects mb-4 text-4xl font-extrabold leading-10 tracking-tight md:text-2xl lg:text-4xl text-blue-500 text-center mt-14">Projects</h2>
        <div className="flex mt-6 justify-center">
          <div className="w-32 h-1 rounded-full bg-indigo-500 inline-flex">
          </div>
        </div>
      </div>
      <div className="px-10 my-4 mt-20" id="projects">
        <h1 className="title-skills mb-4 font-extrabold leading-10 tracking-tight md:text-2xl lg:text-4xl text-blue-500 mt-16">
          Featured projects:
        </h1>
        <p className="text-base leading-relaxed text-purple-900 md:text-2xl lg:text-2xl font-semibold tracking-tighter mb-16">
          Here are a few of my live, real-world projects
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 my-20 items-center justify-center space-x-10">
          {projects.map((project, index) => {
            return (
              <div
                key={index}
                className="flex flex-col shadow-sm md:w-[340px] bg-[#31313F] p-4 rounded">
                <a
                  href={project.photo}
                  target="_blank"
                  rel="noreferrer"
                  className="mb-4">
                  <img src={project.photo} alt={project.title} />
                </a>
                <h3 className="text-primary font-semibold text-lg">
                  {project.title}
                </h3>
                <p className=" text-white mt-1">{project.description}</p>
                <div className="mt-5">
                  <button className="btn transition-all duration-500 bg-primary py-2 px-6 rounded text-white hover:bg-white hover:text-primary">
                    About me
                  </button>
                  <button className="btn outline py-1.5 px-9 rounded border-none ml-5 text-white ">
                    Projects
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="py-8 z-10 font-serif mt-40 flex items-center justify-center">
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
      </div>
    </div>
  );
}