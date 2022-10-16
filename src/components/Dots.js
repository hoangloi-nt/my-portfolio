import React from "react";
import { darkmodeStore } from "store/darkmode-store";

const Dots = ({ className = "" }) => {
  const { darkmode } = darkmodeStore((state) => state);
  return (
    <div
      className={`dots ${
        darkmode ? "" : "darkMode"
      } bg-transparent w-[300px] h-[300px] absolute opacity-70 z-[-1] pointer-events-none ${className}`}
    ></div>
  );
};

export default Dots;
