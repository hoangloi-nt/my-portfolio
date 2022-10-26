import SkillsList from "components/SkillsList";
import VerticalText from "components/VerticalText";
import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="mt-20 w-full h-full py-10">
      <div
        className="container flex flex-col lg:flex-row items-center justify-between relative"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <h1 className="mb-10 z-10 lg:hidden text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4ca5ff] to-[#b673f8]">
          Skills
        </h1>

        <SkillsList></SkillsList>
        <VerticalText
          right={true}
          className="vertical-text-right__translateX10px z-[2]"
        >
          Skills
        </VerticalText>
      </div>
    </div>
  );
};

export default Skills;
