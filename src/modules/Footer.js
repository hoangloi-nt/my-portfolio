import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-full mt-20 bg-dark">
      <div className="container flex flex-col items-center justify-between text-sm text-slate-400 lg:text-lg gap-y-5 md:flex-row">
        <span className="flex flex-col items-center justify-center">
          <em>© Copyright 2022</em>
          <em>
            All rights reserved. Made by <strong>Hoang Loi</strong>
          </em>
        </span>
        <span className="flex flex-col items-center justify-center">
          <p>Contact me:</p>
          <p>
            Mobile: <strong>0702817585</strong>
          </p>
          <p>
            Email: <strong>ngtran.hoangloi@gmail.com</strong>
          </p>
        </span>
      </div>
    </div>
  );
};

export default Footer;
