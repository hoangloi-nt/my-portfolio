import { ContactUs } from "components/ContactUs";
import Dots from "components/Dots";
import SocialGroupBtn from "components/SocialGroupBtn";
import VerticalText from "components/VerticalText";
import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="container flex flex-col lg:flex-row items-center justify-center !my-10 lg:gap-x-20"
    >
      <div className="relative flex items-center justify-center">
        <Dots className="dark:z-[1] -left-20 top-60"></Dots>
        <VerticalText className="dark:z-[2]">Contact</VerticalText>
      </div>
      <div className="flex-1 w-full lg:w-auto">
        <ContactUs></ContactUs>
      </div>
      <div className="my-10 text-6xl font-bold text-center lg:ml-30 text-primary lg:my-0">
        OR
      </div>
      <div className="relative flex-1 max-w-[200px]">
        <SocialGroupBtn
          className="relative grid grid-cols-2 lg:flex lg:flex-col"
          className2="justify-end"
        ></SocialGroupBtn>
        <Dots className="dark:z-[1] top-0 left-32"></Dots>
      </div>
    </div>
  );
};

export default Contact;
