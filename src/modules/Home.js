import ChangingText from "components/ChangingText";
import Dots from "components/Dots";
import VerticalText from "components/VerticalText";
import React from "react";

const Home = () => {
  return (
    <div className="container flex flex-col lg:flex-row items-center justify-center !mt-10 lg:gap-x-20">
      <div className="relative flex items-center justify-center">
        <Dots className="z-[1] -left-10 -top-10"></Dots>
        <VerticalText className="z-[2]">HoangLoi</VerticalText>
        <img
          src="/hoangloi.png"
          alt="hoangloi"
          className="absolute lg:left-4 img-hoangloi w-[230px] h-[480px] max-w-none z-[3]"
        />
      </div>
      <div className="flex-1 lg:ml-20">
        <div className="flex flex-col items-start justify-start p-10 gap-y-10">
          <div className="p-2 bg-gradient-to-r from-primary via-secondary to-third dark:bg-white dark:bg-none">
            <div className="flex flex-col justify-between h-full p-5 text-white bg-white dark:bg-dark">
              <h1 className="text-2xl font-bold text-transparent lg:text-3xl bg-clip-text bg-gradient-to-r from-primary via-secondary to-third dark:text-white">
                Welcome to my portfolio
              </h1>
            </div>
          </div>
          <div className="flex flex-col text-xl font-medium lg:text-3xl lg:inline-block dark:text-white">
            <span>Hello, I am</span> <ChangingText></ChangingText>
          </div>
          <a
            href="/FrontendDev_NguyenTranHoangLoi.pdf"
            download="FrontendDev_NguyenTranHoangLoi"
            className="flex items-start justify-center p-5 text-xl font-semibold text-white transition-all shadow-md lg:text-2xl lg:font-bold bg-gradient-to-r from-primary via-secondary to-third hover:animate-bounce dark:bg-none dark:bg-white dark:text-primary"
          >
            Download CV
          </a>
        </div>
      </div>
      <div className="flex-1 max-w-[475px]">
        <div className="p-5 relative w-full h-[300px] flex items-start justify-center text-xl bg-white text-justify dark:bg-transparent dark:text-white">
          I am a hardworking and creative person to become master in frontend
          developer. I am eager to be challenged in order to grow and further
          improve my IT skills.
          <Dots className="z-10 right-2 top-40 w-[300px] h-[300px]"></Dots>
          <div className="absolute w-[500px] h-full z-[-1] left-2 bg-gradient-to-r from-third via-secondary to-primary"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
