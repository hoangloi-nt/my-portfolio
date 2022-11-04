import AboutSlider from "components/AboutSlider";
import Dots from "components/Dots";
import AddressIcon from "components/icons/AddressIcon";
import AgeIcon from "components/icons/AgeIcon";
import SchoolIcon from "components/icons/SchoolIcon";
import UserIcon from "components/icons/UserIcon";
import SocialGroupBtn from "components/SocialGroupBtn";
import VerticalText from "components/VerticalText";
import React from "react";

const About = () => {
  return (
    <div id="about" className="mt-20 w-full h-[full] py-10">
      <div
        className="container relative flex items-center justify-between"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <div className="flex flex-col items-center justify-center flex-auto lg:flex-row gap-x-10">
          <h1 className="mb-10 z-10 lg:hidden text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4ca5ff] to-[#b673f8]">
            About
          </h1>
          <div className="z-10 flex flex-col items-start justify-center w-full text-lg text-text lg:text-xl gap-y-3">
            <span className="flex items-start justify-between lg:items-center gap-x-3">
              <UserIcon></UserIcon> <strong>Nguyen Tran Hoang Loi</strong>
            </span>
            <span className="flex items-start justify-between lg:items-center gap-x-3">
              <AgeIcon></AgeIcon>
              <strong>{new Date().getFullYear() - 2001}</strong>
            </span>
            <span className="flex items-start justify-between lg:items-center gap-x-3">
              <AddressIcon></AddressIcon>
              <strong>Linh Trung, Thu Duc City, HCMC</strong>
            </span>
            <span className="flex items-start justify-between lg:items-center gap-x-3">
              <SchoolIcon></SchoolIcon>
              <strong>
                University of Information Technology (UIT) - VNUHCM
              </strong>
            </span>
            <SocialGroupBtn></SocialGroupBtn>
          </div>
          <AboutSlider></AboutSlider>
        </div>
        <VerticalText className="vertical-text-absolute z-[1]" right={true}>
          About
        </VerticalText>
        <Dots className="z-[0] right-0 -top-16"></Dots>
      </div>
    </div>
  );
};

export default About;
