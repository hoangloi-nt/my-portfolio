import { ContactUs } from "components/ContactUs";
import Dots from "components/Dots";
import SocialGroupBtn from "components/SocialGroupBtn";
import VerticalText from "components/VerticalText";
import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="container flex flex-col lg:flex-row items-center justify-center !my-10 lg:gap-x-20 mt-20"
    >
      <div className="relative flex items-center justify-center">
        <div
          className="mb-10 z-10 lg:hidden text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4ca5ff] to-[#b673f8]"
          data-aos="fade-up"
        >
          Contact
        </div>
        <Dots className="dark:z-[1] lg:-left-20 lg:top-60 left-0 -top-20"></Dots>
        <VerticalText className="dark:z-[2]">Contact</VerticalText>
      </div>
      <div className="flex-1 w-full lg:w-auto" data-aos="zoom-in-right">
        <ContactUs></ContactUs>
      </div>
      <div
        className="my-10 text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] lg:my-0"
        data-aos="zoom-in-up"
      >
        Or
      </div>
      <div className="relative flex-1 max-w-[200px]" data-aos="zoom-in-left">
        <SocialGroupBtn
          className="relative grid grid-cols-2 lg:flex lg:flex-col"
          className2="justify-end"
        ></SocialGroupBtn>
        <Dots className="dark:z-[1] -top-44 right-0"></Dots>
      </div>
    </div>
  );
};

export default Contact;
