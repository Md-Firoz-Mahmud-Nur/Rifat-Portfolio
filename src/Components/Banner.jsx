import React from "react";
import UiUx from "../Sticker/UiUx";
import BestDeveloper from "../Sticker/BestDeveloper";
import ReactRouter from "../Sticker/ReactRouter";

const Banner = () => {
  return (
    <header className="bg-gradient-to-r from-[#fff4f3] to-[#f8e6da] pt-5">
      <section className="mx-auto flex max-w-6xl items-center justify-between px-5 pt-10">
        <div>
          <h1 className="mb-6 text-6xl font-bold">
            Hi! I am <br /> Rokibul Hasan Rifat
          </h1>
          <p className="max-w-2xl text-gray-600">
            I'm a skilled SEO expert specializing in organic
            growth, keyword research, on-page and off-page SEO, helping
            businesses rank higher on search engines and drive targeted website
            traffic effectively.
          </p>
          <button className="btn btn-warning mt-8 bg-[#e56813] text-white">
            Hire Me
          </button>
        </div>
        <div className="relative">
          <img
            src="/arafat-icon.png"
            alt="Arafat Icon"
            className="h-[587.76px]"
          />
          <UiUx></UiUx>
          <BestDeveloper></BestDeveloper>
          <ReactRouter></ReactRouter>
        </div>
      </section>
    </header>
  );
};

export default Banner;
