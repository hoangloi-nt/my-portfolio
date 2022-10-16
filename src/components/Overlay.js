import React from "react";

const Overlay = ({ showMenu }) => {
  return (
    <div
      className={`overlay lg:hidden fixed inset-0 z-20 bg-black bg-opacity-70  transition-all duration-500 ${
        showMenu ? "opacity-100 translate-x-0" : "opacity-50 translate-x-full"
      }`}
    ></div>
  );
};

export default Overlay;
