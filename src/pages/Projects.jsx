// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from "react-router-dom";

export default function projects() {
  return (
    <div className="container-button relative inline-flex group mx-auto mt-40">
      <div
        className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200">
      </div>
      <Link to="/home">
        <button className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" type="button">Return</button>
      </Link>
    </div>
  )
}
