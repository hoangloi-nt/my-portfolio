import React from "react";
import DarkmodeButton from "./DarkmodeButton";

const MenuMobile = ({ showMenu, menuNav }) => {
  return (
    <div
      className={`lg:hidden h-full w-80 z-30 transition-all duration-500 delay-100 fixed inset-0 flex flex-col  gap-y-10 bg-white px-5 py-20 ${
        showMenu
          ? "opacity-100 translate-x-1/2 sm:-translate-x-[-165%]"
          : "opacity-50 translate-x-[200%] sm:translate-x-[400%]"
      }`}
    >
      {menuNav.map((item) => (
        <a
          key={item.title}
          href={item.url}
          className="text-xl font-medium text-text"
        >
          {item.title}
        </a>
      ))}

      <a
        href="#contact"
        className="px-5 py-2 text-xl font-medium border rounded-full text-text border-text w-fit"
      >
        Contact
      </a>
      <DarkmodeButton></DarkmodeButton>
    </div>
  );
};

export default MenuMobile;
