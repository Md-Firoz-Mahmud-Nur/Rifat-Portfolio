import React from "react";

const Footer = () => {
  return (
    <footer className="divide-y bg-gradient-to-r from-white to-[#fcd2f9] px-4 text-gray-800">
      <div className="container mx-auto flex flex-col justify-between space-y-8 py-10 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <a
            href="#"
            className="flex justify-center space-x-3 lg:justify-start"
          >
            <img className="w-16" src="/arafat-icon.png" alt="Logo" />
            <span className="self-center text-4xl font-extrabold">
              Rokibul Hasan Rifat
            </span>
          </a>
        </div>
        <div className="grid grid-cols-2 gap-x-3 gap-y-8 text-sm sm:grid-cols-4 lg:w-2/3">
          {["Product", "Company", "Developers", "Social media"].map(
            (title, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="tracking-wide text-gray-900 uppercase">
                  {title}
                </h3>
                <ul className="space-y-1">
                  <li>
                    <a href="#">
                      {title === "Product"
                        ? "Features"
                        : title === "Company"
                          ? "Privacy"
                          : "Public API"}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {title === "Product"
                        ? "Integrations"
                        : title === "Company"
                          ? "Terms of Service"
                          : "Documentation"}
                    </a>
                  </li>
                  {title === "Product" && (
                    <li>
                      <a href="#">Pricing</a>
                    </li>
                  )}
                  {title === "Product" && (
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                  )}
                  {title === "Developers" && (
                    <li>
                      <a href="#">Guides</a>
                    </li>
                  )}
                </ul>
              </div>
            ),
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
