import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-full mt-10 bg-gradient-to-r from-primary to-secondary">
      <div className="container flex flex-col items-center justify-between text-lg text-white gap-y-5 md:flex-row">
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
            Email: <strong>hoangloi015@gmail.com</strong>
          </p>
        </span>
      </div>
    </div>
  );
};

export default Footer;
