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
            I am a hardworking and creative individual, because my goal is to
            become a master frontend developer. I am eager to have an internship
            opportunity in order to grow and further improve my frontend skills.
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
        <div className="relative flex items-center justify-center min-h-[500px] lg:min-h-0">
          <img
            srcSet="/hoangloi-remove-bg.png 6x"
            alt="hoangloi-bg"
            className="z-10"
          />
          <div className="absolute lg:w-[600px] lg:h-[600px] w-[500px] h-[500px] flex justify-center items-center">
            <svg
              viewBox="0 0 800 500"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="100%"
              id="blobSvg"
            >
              <g transform="translate(156.80327224731445, 9.722614288330078)">
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "rgb(76, 165, 255)" }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "rgb(182, 115, 248)" }}
                    />
                  </linearGradient>
                </defs>
                <path fill="url(#gradient)">
                  <animate
                    attributeName="d"
                    dur="10000ms"
                    repeatCount="indefinite"
                    values="M416.5,298.5Q365,347,324.5,395Q284,443,224.5,420Q165,397,108,359.5Q51,322,91.5,264.5Q132,207,151.5,160Q171,113,229.5,74.5Q288,36,356.5,70Q425,104,446.5,177Q468,250,416.5,298.5Z;

                    M430.5,317Q410,384,343,390.5Q276,397,209.5,416Q143,435,119,371Q95,307,107.5,255Q120,203,145.5,158.5Q171,114,221.5,118.5Q272,123,319.5,137.5Q367,152,409,201Q451,250,430.5,317Z;

                    M409,316.5Q409,383,349,426Q289,469,226.5,434Q164,399,127.5,353.5Q91,308,63.5,240Q36,172,88.5,116.5Q141,61,208.5,82.5Q276,104,324.5,125.5Q373,147,391,198.5Q409,250,409,316.5Z;

                    M404.5,295.5Q358,341,319.5,384Q281,427,203.5,446Q126,465,123.5,381Q121,297,93,240Q65,183,112,138Q159,93,224,62Q289,31,358,66Q427,101,439,175.5Q451,250,404.5,295.5Z;

                    M428,328.5Q437,407,358,411.5Q279,416,206.5,434Q134,452,88.5,388.5Q43,325,31.5,245.5Q20,166,90,130.5Q160,95,222,75.5Q284,56,345.5,87Q407,118,413,184Q419,250,428,328.5Z;

                    M416.5,298.5Q365,347,324.5,395Q284,443,224.5,420Q165,397,108,359.5Q51,322,91.5,264.5Q132,207,151.5,160Q171,113,229.5,74.5Q288,36,356.5,70Q425,104,446.5,177Q468,250,416.5,298.5Z
                    "
                  ></animate>
                </path>
              </g>
            </svg>
          </div>

          <div className="absolute lg:w-[600px] lg:h-[600px] w-[500px] h-[500px] blur-xl flex justify-center items-center">
            <svg
              viewBox="0 0 800 500"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="100%"
              id="blobSvg"
            >
              <g transform="translate(156.80327224731445, 9.722614288330078)">
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "rgb(76, 165, 255)" }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "rgb(182, 115, 248)" }}
                    />
                  </linearGradient>
                </defs>
                <path fill="url(#gradient)">
                  <animate
                    attributeName="d"
                    dur="10000ms"
                    repeatCount="indefinite"
                    values="M416.5,298.5Q365,347,324.5,395Q284,443,224.5,420Q165,397,108,359.5Q51,322,91.5,264.5Q132,207,151.5,160Q171,113,229.5,74.5Q288,36,356.5,70Q425,104,446.5,177Q468,250,416.5,298.5Z;

                    M430.5,317Q410,384,343,390.5Q276,397,209.5,416Q143,435,119,371Q95,307,107.5,255Q120,203,145.5,158.5Q171,114,221.5,118.5Q272,123,319.5,137.5Q367,152,409,201Q451,250,430.5,317Z;

                    M409,316.5Q409,383,349,426Q289,469,226.5,434Q164,399,127.5,353.5Q91,308,63.5,240Q36,172,88.5,116.5Q141,61,208.5,82.5Q276,104,324.5,125.5Q373,147,391,198.5Q409,250,409,316.5Z;

                    M404.5,295.5Q358,341,319.5,384Q281,427,203.5,446Q126,465,123.5,381Q121,297,93,240Q65,183,112,138Q159,93,224,62Q289,31,358,66Q427,101,439,175.5Q451,250,404.5,295.5Z;

                    M428,328.5Q437,407,358,411.5Q279,416,206.5,434Q134,452,88.5,388.5Q43,325,31.5,245.5Q20,166,90,130.5Q160,95,222,75.5Q284,56,345.5,87Q407,118,413,184Q419,250,428,328.5Z;

                    M416.5,298.5Q365,347,324.5,395Q284,443,224.5,420Q165,397,108,359.5Q51,322,91.5,264.5Q132,207,151.5,160Q171,113,229.5,74.5Q288,36,356.5,70Q425,104,446.5,177Q468,250,416.5,298.5Z
                    "
                  ></animate>
                </path>
              </g>
            </svg>
          </div>
        </div>

        {/* <img srcSet="/hoangloi-bg.png 2x" alt="hoangloi-bg" />
        <Dots className="absolute z-10 right-2 top-3 w-[300px] h-[300px]"></Dots> */}
      </div>
    </div>
  );
};

export default Home;
