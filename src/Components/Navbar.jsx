import React from "react";

const Navbar = () => {
  return (
    <header className="bg-gradient-to-r from-[#fff4f3] to-[#f8e6da] pt-5 relative">
      <nav className="flex justify-between items-center max-w-6xl mx-auto px-5 py-2 bg-white rounded-lg">
        <img
          src="/arafat-icon.png"
          alt="Arafat Icon"
          className="size-16 object-cover object-top"
        />
        <div className="flex items-center gap-5">
          <ul className="flex gap-5 text-lg font-medium">
            <li>
              <a href="#" className="font-bold">
                Home
              </a>
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
    </header>
  );
};

export default Navbar;
