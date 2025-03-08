import React from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div className="relative flex h-[calc(100vh-2rem)] w-full max-w-[20rem] flex-col rounded-xl bg-white bg-clip-border p-4 text-gray-700 shadow-xl shadow-blue-gray-900/5 sha">
      <div className="p-4 mb-2">
        <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          Sidebar
        </h5>
      </div>
      <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
        <Link
          to="/"
          className="flex items-center p-3 leading-tight transition-all rounded-lg hover:bg-blue-gray-50 hover:bg-opacity-80"
        >
          Home
        </Link>
        <Link
          to="/projects"
          className="flex items-center p-3 leading-tight transition-all rounded-lg hover:bg-blue-gray-50 hover:bg-opacity-80"
        >
          Projects
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
