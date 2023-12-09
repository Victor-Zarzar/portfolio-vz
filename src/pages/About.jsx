import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      <div className="col-span-4 sm:col-span-9">
        <div className="shadow rounded-lg p-6">
          <h2 className="title-about mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-4xl text-blue-500 text-center mt-14">About Me</h2>
          <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex">
                </div>
              </div>
          <p className="text-gray-700">...
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
            <button className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-neutral-800 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" type="button">
              Back to Home Page
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
