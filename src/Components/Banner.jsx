import React from "react";
import UiUx from "../Sticker/UiUx";

const Banner = () => {
  return (
    <header className="bg-gradient-to-r from-[#fff4f3] to-[#f8e6da] pt-5 relative">
      <section className="flex justify-between items-center max-w-6xl mx-auto px-5 pt-10">
        <div>
          <h1 className="text-6xl font-bold mb-6">
            Hi! I am <br /> Rokibul Hasan Rifat
          </h1>
          <p className="max-w-2xl text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            tempora error autem magnam quia maxime omnis explicabo. In, at
            sequi? Sed autem numquam officiis velit distinctio iure quidem eius
            omnis!
          </p>
          <button className="btn btn-warning bg-[#e56813] text-white mt-8">
            Hire Me
          </button>
        </div>
        <img
          src="/arafat-icon.png"
          alt="Arafat Icon"
          className="h-[587.76px]"
        />
      </section>
      <div class="bg-white p-2 flex items-center gap-3 rounded-2xl w-fit absolute top-82 right-84">
        <img
          class="w-16"
          src="https://cdn-icons-png.flaticon.com/512/8092/8092389.png"
          alt=""
        />
        <h3 class="text-lg font-bold">
          Best Developer <br /> Awards
        </h3>
      </div>
      <UiUx></UiUx>
    </header>
  );
};

export default Banner;
