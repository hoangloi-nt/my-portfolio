import AboutSlider from "components/AboutSlider";
import AddressIcon from "components/icons/AddressIcon";
import AgeIcon from "components/icons/AgeIcon";
import SchoolIcon from "components/icons/SchoolIcon";
import UserIcon from "components/icons/UserIcon";
import SocialGroupBtn from "components/SocialGroupBtn";
import VerticalText from "components/VerticalText";
import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="mt-10 w-full h-[full] bg-gradient-to-r from-primary to-secondary py-10"
    >
      <div
        className="container flex items-center justify-between"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <div className="flex flex-col items-center justify-center flex-auto lg:flex-row gap-x-10">
          <div className="z-10 flex flex-col items-start justify-center w-full text-lg text-white lg:text-xl gap-y-3">
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
              <strong>University of Information Technology (UIT) - VNU</strong>
            </span>
            <SocialGroupBtn></SocialGroupBtn>
          </div>
          <AboutSlider></AboutSlider>
        </div>
        <VerticalText className="vertical-text-absolute" right={true}>
          About
        </VerticalText>
      </div>
    </div>
  );
};

export default About;
