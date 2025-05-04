import React from "react";

const Navbar = () => {
  return (
    <header className="relative bg-gradient-to-r from-[#fff4f3] to-[#f8e6da] py-5">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-lg bg-white px-5 py-2">
        <img
          src="/arafat-icon.png"
          alt="Arafat Icon"
          className="size-16 object-cover object-top"
        />
        <div className="flex items-center gap-5">
          <ul className="flex gap-5 text-lg font-medium">
            <li>
              <a href="/" className="font-bold">
                Home
              </a>
            </li>
            <li>
              <a href="#">About Me</a>
            </li>
            <li>
              <a href="/certificates">Certificates</a>
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
