import React from "react";

const VerticalText = ({ right = false, children, className = "" }) => {
  return (
    <div
      className={`hidden lg:block uppercase mb-0 text-transparent text-[100px] font-bold leading-none ${className} ${
        right ? "vertical-text-right" : "vertical-text-left"
      } `}
    >
      {children}
    </div>
  );
};

export default VerticalText;
