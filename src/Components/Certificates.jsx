import React from "react";

const Certificates = () => {
  return (
    <main className="bg-linear-to-r/increasing from-white to-[#fbd2b6] py-10">
      <h2 className="text-center text-5xl font-extrabold text-blue-950">
        Certificates
      </h2>
      <div className="mt-10 flex items-center justify-center gap-6">
        {[
          "https://i.ibb.co.com/N65XQb2Z/certificate-2.webp",
          "https://i.ibb.co.com/8DYv7xjw/certificate-4.webp",
          "https://i.ibb.co.com/yc6s52dY/certificate-5.webp",
          "https://i.ibb.co.com/Q7mDKpFt/certificate-6.webp",
          "https://i.ibb.co.com/h1cnBNZ2/certificate-7.webp",
          "https://i.ibb.co.com/cSQpq5cZ/certificate.webp",
          "https://i.ibb.co.com/zVMxsmVd/MD-Rokibul-Hasan-Rifat-Appreciation-Certificate.png",
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

export default Certificates;
