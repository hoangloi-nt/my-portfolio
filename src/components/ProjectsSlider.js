import React from "react";

const projects = [
  {
    id: 1,
    name: "DeveStore",
    desc: "DeveStore is a website to discover, sell and collect rare NFTs.",
    demoLink: "https://www.youtube.com/watch?v=NHKIBAJGUM0",
    githubLink: "https://github.com/hoangloi-nt/DoAn_Devera",
    imgLink: "https://i.ibb.co/XZV2WTy/devestore.png",
  },
  {
    id: 2,
    name: "Monkey Blogging Web App",
    desc: "Web application to become a blogger for everybody.",
    demoLink: "https://monkey-blogging-app.netlify.app/",
    githubLink: "https://github.com/hoangloi-nt/monkey-blogging-app",
    imgLink: "https://i.ibb.co/ZTkRV3L/image.png",
  },
  {
    id: 3,
    name: "HoangLoi Movies",
    desc: "Website that displays movie information based on The MovieData API.",
    demoLink: "https://hoangloi-movies.netlify.app/",
    githubLink: "https://github.com/hoangloi-nt/hoangloi-movies",
    imgLink: "https://i.ibb.co/yp8gPRb/image.png",
  },
  {
    id: 4,
    name: "TodoApp Redux",
    desc: "Todo Application made by Redux",
    demoLink: "https://todo-app-redux-hoangloi.netlify.app/",
    githubLink: "https://github.com/hoangloi-nt/todo-app-redux",
    imgLink: "https://i.ibb.co/h9040yb/image.png",
  },
];

const ProjectsSlider = () => {
  const openProjectModel = (id) => {
    let currentProject = {};
    projects.forEach((project) => {
      if (project.id === id) {
        currentProject = { ...project };
      }
    });
    console.log(currentProject);
    const template = `
    <div class="lightbox">
      <div class="lightbox-content">
        <img
          src="${currentProject.imgLink}"
          alt="${currentProject.name}"
          class="lightbox-image"
        />
        <div class="lightbox-desc">
            <h1>${currentProject.name}</h1>
            <span>${currentProject.desc}</span>
            <div class="lightbox-groupbtn">
                <a href="${currentProject.githubLink}" target="_blank">Source code</a>
                <a href="${currentProject.demoLink}" target="_blank">View demo</a>
            </div>
        </div>
      </div>
    </div>`;
    document.body.insertAdjacentHTML("beforeend", template);
  };
  document.addEventListener("click", function (e) {
    if (e.target.matches(".lightbox")) {
      e.target.parentNode.removeChild(e.target);
    }
  });

  return (
    <div className="grid justify-center grid-cols-1 mt-10 lg:gap-3 gap-y-5 lg:mt-0 lg:grid-cols-3">
      {projects.map((project) => (
        <div
          key={project.id}
          className="relative w-full max-h-[210px] duration-500 cursor-pointer group"
          onClick={() => openProjectModel(project.id)}
        >
          <img
            src={project.imgLink}
            alt=""
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 z-10 items-center justify-center w-full h-full text-2xl text-white transition-all opacity-0 group-hover:bg-black group-hover:flex group-hover:opacity-100 group-hover:bg-opacity-70">
            {project.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsSlider;
