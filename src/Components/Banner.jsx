import React from "react";

const Banner = () => {
  return (
    <header className="bg-gradient-to-r from-[#fff4f3] to-[#f8e6da] pt-5 relative">
      <section className="flex justify-between items-center max-w-6xl mx-auto px-5 py-10">
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
      <div class="bg-white p-2 px-4 flex items-center gap-3 rounded-2xl w-fit absolute -bottom-12 right-175">
        <img
          class="w-16 bg-lime-100 p-2 rounded-full"
          src="https://cdn3d.iconscout.com/3d/premium/thumb/ui-ux-3d-icon-download-in-png-blend-fbx-gltf-file-formats--web-design-development-programming-computer-graphic-pack-icons-9831982.png"
          alt=""
        />
        <div>
          <h3 class="text-lg font-bold">Ui/Ux</h3>
          <p class="text-gray-700">
            Lorem ipsum dolor sit <br /> amet consectetur
          </p>
        </div>
      </div>
    </header>
  );
};

export default Banner;
