import React from "react";

const Projects = () => {
  return (
    <main className="my-12">
      <h2 className="text-center text-5xl font-extrabold text-blue-950">
        Recent Projects
      </h2>
      <div className="mt-10 flex items-center justify-center gap-6">
        {[
          "https://arafat0122.netlify.app/CodesRaft.png",
          "https://i.ibb.co/zxLxz5Z/QutorOn.png",
          "https://i.ibb.co/JvrJTRM/Book-Vibe-Website.png",
        ].map((src, idx) => (
          <img
            key={idx}
            className="w-96 rounded-xl border border-gray-300 transition duration-400 ease-in-out hover:scale-105"
            src={src}
            alt={`Project ${idx + 1}`}
          />
        ))}
      </div>
    </main>
  );
};

export default Projects;
