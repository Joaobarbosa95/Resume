import React from "react";
import Section from "../Section";
import SkillBox from "./SkillBox";

import "./Skills.css";

const skills = [
  {
    skillBox: "Development",
    color: "#95AAFB",
    skillsArray: ["Javascript", "HTML", "CSS", "ReactJS", "NodeJS", "Git"],
  },
  {
    skillBox: "Understading in",
    color: "#C696FC",
    skillsArray: ["C", "Python", "MongoDB", "SQL"],
  },
];

const Skills = () => {
  return (
    <Section title="Skills">
      <div className="skills-container">
        {skills.map((skillBox) => (
          <SkillBox skills={skillBox} />
        ))}
      </div>
    </Section>
  );
};

export default Skills;
