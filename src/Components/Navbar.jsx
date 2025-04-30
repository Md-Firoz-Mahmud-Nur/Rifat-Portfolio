import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-white max-w-6xl mx-auto px-5 py-2 rounded-lg">
      <div className="flex items-center gap-1">
        <img className="w-16" src="/arafat-icon.png" alt="Arafat Icon" />
      </div>
      <div className="flex items-center gap-5">
        <ul className="text-lg flex items-center gap-5">
          <li className="font-bold">
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Me</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
        </ul>
        <button className="btn btn-warning bg-[#e56813] text-white">
          Contact Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
