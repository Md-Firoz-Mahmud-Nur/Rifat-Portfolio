import React from "react";

const Brands = () => {
  return (
    <section className="bg-gradient-to-r from-white to-[#fbd2b6] py-10">
      <div className="mx-auto max-w-6xl">
        <h3 className="mb-5 text-lg font-bold">
          Works for all Clients & Brands
        </h3>
        <div className="flex items-center gap-5">
          {[
            "https://cdn.iconscout.com/icon/free/png-256/free-upwork-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-7-pack-logos-icons-2945283.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Dropbox_Icon.svg/2202px-Dropbox_Icon.svg.png",
            "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png",
            "https://purepng.com/public/uploads/large/purepng.com-microsoft-logo-iconlogobrand-logoiconslogos-251519939091wmudn.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Microsoft_Edge_logo_%282019%29.svg/1024px-Microsoft_Edge_logo_%282019%29.svg.png",
          ].map((src, idx) => (
            <img
              key={idx}
              className="w-12 rounded-full bg-white p-2 shadow-md"
              src={src}
              alt={`Client logo ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
