import React from "react";

const Dots = ({ className = "" }) => {
  return (
    <div
      className={`dots dark:bg-white-dots bg-transparent w-[300px] h-[300px] absolute opacity-70 z-[-1] pointer-events-none" ${className}`}
    ></div>
  );
};

export default Dots;
