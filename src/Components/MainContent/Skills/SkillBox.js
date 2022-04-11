import React from "react";

const SkillBox = ({ skills }) => {
  return (
    <div className="skill-container">
      <h3 className="skill-title">{skills.skillBox}</h3>
      <div className="skills-box">
        <div className="skill-description" style={{ color: skills.color }}>
          {skills.skillsArray.map((skill) => (
            <div className="skill">{skill}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillBox;
