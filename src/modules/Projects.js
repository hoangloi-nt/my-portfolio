import Dots from "components/Dots";
import ProjectsSlider from "components/ProjectsSlider";
import VerticalText from "components/VerticalText";
import React from "react";

const Projects = () => {
  return (
    <div
      id="projects"
      className="container flex flex-col lg:flex-row items-center justify-center !mt-10 lg:gap-x-20"
    >
      <div
        className="relative flex items-center justify-center"
        data-aos="fade-left"
        data-aos-offset="500"
        data-aos-duration="500"
      >
        <Dots className="h-[500px] dark:z-[1] -left-10 -top-60"></Dots>
        <VerticalText className="dark:z-[2]">Projects</VerticalText>
      </div>
      <div
        className="relative flex-1 lg:ml-20"
        data-aos="fade-left"
        data-aos-offset="500"
        data-aos-duration="500"
      >
        <ProjectsSlider></ProjectsSlider>
        <Dots className="dark:z-[1] right-1 top-72"></Dots>
      </div>
    </div>
  );
};

export default Projects;
