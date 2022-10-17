import React from "react";

const VerticalText = ({ right = false, children, className = "" }) => {
  return (
    <div
      className={`dark:text-white uppercase mb-0 text-primary text-[100px] font-bold leading-none ${className} ${
        right ? "vertical-text-right" : "vertical-text-left"
      } `}
    >
      {children}
    </div>
  );
};

export default VerticalText;
