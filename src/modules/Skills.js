import SkillsList from "components/SkillsList";
import VerticalText from "components/VerticalText";
import React from "react";

const Skills = () => {
  return (
    <div
      id="skills"
      className="mt-10 w-full h-[full] bg-gradient-to-r from-primary to-secondary py-10"
    >
      <div
        className="container flex items-center justify-between"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <div className="flex flex-col items-center justify-center flex-auto lg:flex-row gap-x-10"></div>
        <SkillsList></SkillsList>
        <VerticalText
          right={true}
          className="vertical-text-right__translateX10px"
        >
          Skills
        </VerticalText>
      </div>
    </div>
  );
};

export default Skills;
