import Dots from "components/Dots";
import ProjectsSlider from "components/ProjectsSlider";
import VerticalText from "components/VerticalText";
import React from "react";

const Projects = () => {
  return (
    <div
      id="projects"
      className="container flex flex-col lg:flex-row items-center justify-center !mt-20 lg:gap-x-20"
    >
      <div
        className="mb-10 leading-loose z-10 lg:hidden text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4ca5ff] to-[#b673f8]"
        data-aos="fade-up"
      >
        Projects
      </div>
      <div className="relative flex items-center justify-center">
        <Dots className="dark:z-[1] -left-10 -top-10"></Dots>
        <VerticalText className="dark:z-[2]">Projects</VerticalText>
      </div>
      <div className="relative flex-1 lg:ml-20">
        <ProjectsSlider></ProjectsSlider>
        <Dots className="dark:z-[1] right-1 top-96"></Dots>
      </div>
    </div>
  );
};

export default Projects;
