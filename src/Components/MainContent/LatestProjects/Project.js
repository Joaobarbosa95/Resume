import React from "react";

const Project = ({ project }) => {
  return (
    <div className="project">
      <img src={project.image} alt="" />
      <p className="project-name">{project.name}</p>
      <p className="project-description">{project.description}</p>
      <a className="project-url" href={project.url}>
        {project.url}
      </a>
    </div>
  );
};

export default Project;
