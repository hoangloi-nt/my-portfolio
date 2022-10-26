import React from "react";
import DarkmodeButton from "./DarkmodeButton";

const FixedMenu = ({ menuNav, showFixedMenu, className = "" }) => {
  return (
    <div
      className={`hidden py-5 px-8 z-50 w-[1260px] mx-auto fixed top-0 left-0 right-0 lg:flex items-center justify-between bg-white gap-x-20 h-[88px] transition-all ${className} ${
        showFixedMenu
          ? "translate-y-0 opacity-100 shadow-md"
          : "-translate-y-full opacity-70"
      }`}
    >
      {menuNav.map((item) => (
        <a
          key={item.title}
          href={item.url}
          className="text-lg font-medium text-text"
        >
          {item.title}
        </a>
      ))}
      <div className="flex items-center justify-center ml-auto gap-x-20">
        <a
          href="#contact"
          className="px-5 py-2 text-lg font-medium border rounded-full text-text border-text hover:text-white hover:bg-text transition-all"
        >
          Contact
        </a>
        <DarkmodeButton></DarkmodeButton>
      </div>
    </div>
  );
};

export default FixedMenu;
