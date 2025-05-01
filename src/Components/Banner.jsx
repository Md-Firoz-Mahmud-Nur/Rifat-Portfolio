import React from "react";
import UiUx from "../Sticker/UiUx";
import BestDeveloper from "../Sticker/BestDeveloper";

const Banner = () => {
  return (
    <header className="bg-gradient-to-r from-[#fff4f3] to-[#f8e6da] pt-5">
      <section className="mx-auto flex max-w-6xl items-center justify-between px-5 pt-10">
        <div>
          <h1 className="mb-6 text-6xl font-bold">
            Hi! I am <br /> Rokibul Hasan Rifat
          </h1>
          <p className="max-w-2xl text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            tempora error autem magnam quia maxime omnis explicabo. In, at
            sequi? Sed autem numquam officiis velit distinctio iure quidem eius
            omnis!
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
        </div>
      </section>
    </header>
  );
};

export default Banner;
