import React from "react";

const skills = [
  {
    name: "ReactJS",
    url: "https://miro.medium.com/max/500/1*cPh7ujRIfcHAy4kW2ADGOw.png",
  },
  {
    name: "HTML",
    url: "https://i.ibb.co/NjNdq6v/image.png",
  },
  {
    name: "CSS",
    url: "https://i.ibb.co/cNs3HY5/image.png",
  },
  {
    name: "Javascript",
    url: "https://i.ibb.co/8MxWWTg/image.png",
  },
  {
    name: "TailwindCSS",
    url: "https://i.ibb.co/Vj7Mjqb/image.png",
  },
  {
    name: "Sass",
    url: "https://i.ibb.co/2c04SLt/image.png",
  },
  {
    name: "Bootstrap",
    url: "https://i.ibb.co/VJXJwq8/image.png",
  },
  {
    name: "styled-components",
    url: "https://i.ibb.co/YcnNn0w/image.png",
  },
  {
    name: "Figma",
    url: "https://i.ibb.co/zQykQTb/image.png",
  },
  {
    name: "Firebase",
    url: "https://i.ibb.co/h78VCQb/image.png",
  },
  {
    name: "VSCode",
    url: "https://i.ibb.co/Z1WKxFK/image.png",
  },
  {
    name: "Github",
    url: "https://i.ibb.co/cgJBzb8/image.png",
  },
  {
    name: "npm",
    url: "https://i.ibb.co/gTkQHHD/image.png",
  },
  {
    name: "Redux",
    url: "https://i.ibb.co/9vKGnP4/image.png",
  },
  {
    name: "Zustand",
    url: "https://i.ibb.co/k1Ndz8B/image.png",
  },
];

const SkillsList = () => {
  return (
    <div className="grid w-full h-full grid-cols-2 gap-5 lg:grid-cols-6">
      {skills.map((skill) => (
        <div
          key={skill.name}
          title={skill.name}
          className="flex items-center justify-center border border-transparent group hover:border-text"
        >
          <img
            src={skill.url}
            alt={skill.name}
            className="max-w-[100px] max-h-[100px] p-1 object-contain grayscale group-hover:grayscale-0 transition-all opacity-40 group-hover:opacity-100"
          />
        </div>
      ))}
    </div>
  );
};

export default SkillsList;
