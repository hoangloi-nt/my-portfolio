import ChangingText from "components/ChangingText";
import Dots from "components/Dots";
import VerticalText from "components/VerticalText";
import React from "react";

const Home = () => {
  return (
    <div className="container flex flex-col lg:flex-row items-center justify-center !mt-10 lg:gap-x-20">
      <div
        className="relative flex items-center justify-center"
        data-aos="fade-right"
      >
        <Dots className="z-[1] -left-10 -top-10"></Dots>
        <VerticalText className="z-[2]">HoangLoi</VerticalText>
      </div>
      <div className="flex-1 lg:ml-20" data-aos="fade-up">
        <div className="flex flex-col items-start justify-start gap-y-10">
          <h1 className="mt-10 text-5xl font-bold text-transparent lg:text-6xl lg:mt-0">
            <span className="text-text">Welcome to </span> <br></br>
            <span className="bg-clip-text bg-gradient-to-r from-[#4ca5ff] to-[#b673f8]">
              my portfolio
            </span>
          </h1>
          <div className="flex flex-col text-3xl font-semibold lg:text-4xl lg:inline-block">
            <span className="text-text">Hello, I am</span>
            <ChangingText></ChangingText>
          </div>
          <div className="flex items-start justify-center w-full text-lg text-justify lg:text-xl dark:bg-transparent text-text">
            I am a hardworking and creative person to become master in frontend
            developer. I am eager to be challenged in order to grow and further
            improve my IT skills.
          </div>
          <div className="flex items-start justify-center gap-x-10">
            <a
              href="/FrontendIntern_NguyenTranHoangLoi_CV.pdf"
              target="_blank"
              className="flex items-start justify-center px-4 py-2 text-xl border rounded-full text-text border-text max-w-[200px] hover:bg-text hover:text-white transition-all"
            >
              View CV
            </a>
            <a
              href="/FrontendIntern_NguyenTranHoangLoi_CV.pdf"
              download="FrontendIntern_NguyenTranHoangLoi_CV"
              className="flex items-start justify-center px-4 py-2 text-xl border rounded-full text-text border-text max-w-[200px] hover:bg-text hover:text-white transition-all"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
      <div
        className="mt-10 lg:mt-0 flex-1 max-w-[400px] relative z-0"
        data-aos="fade-left"
      >
        <img srcSet="/hoangloi-bg.png 2x" alt="hoangloi-bg" />
        <Dots className="absolute z-10 right-2 top-3 w-[300px] h-[300px]"></Dots>
      </div>
    </div>
  );
};

export default Home;
