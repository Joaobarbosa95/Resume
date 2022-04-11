import React from "react";
import Section from "../Section";
import Project from "./Project";

import "./LatestProjects.css";

const projects = [
  {
    image: "Chat.png",
    name: "Chat",
    description: "Individual and global chat options (under development)",
    url: "https://chateia-me.herokuapp.com",
  },
  {
    image: "chat_server.png ",
    name: "Chat Server and Database",
    description: "Chat Backend and Database Logic",
    url: "https://chateia-me-server.heroku.com",
  },
];
const LatestProjects = () => {
  return (
    <Section title="Latest Projects">
      <div className="latest-projects">
        {projects.map((project) => (
          <Project project={project} />
        ))}
      </div>
    </Section>
  );
};

export default LatestProjects;
