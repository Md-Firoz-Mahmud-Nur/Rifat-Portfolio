import React from "react";

const Banner = () => {
  return (
    <section className="flex items-center justify-between w-6xl mx-auto pt-15">
      <div>
        <h1 className="text-6xl font-bold my-9">
          Hi! I am
          <br />
          Soyeb Ahmed Arafat
        </h1>
        <p className="w-2xl text-gray-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
          tempora error autem magnam quia maxime omnis explicabo. In, at sequi?
          Sed autem numquam officiis velit distinctio iure quidem eius omnis!
        </p>
        <button className="btn btn-warning bg-[#e56813] text-white my-10">
          Hire Me
        </button>
      </div>
      <div>
        <img src="/arafat-icon.png" alt="" />
      </div>
    </section>
  );
};

export default Banner;
