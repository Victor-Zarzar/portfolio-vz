// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from "react-router-dom";

export default function projects() {
  return (
    <div className="py-8 z-10 font-serif mt-5 h-screen flex items-center justify-center">
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
  );
}
