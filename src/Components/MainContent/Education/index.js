import React from "react";
import Section from "../Section";
import EducationItem from "./EducationItem";

import "./Education.css";

const courses = [
  {
    image: "harvard_logo.png",
    institution: "Harvard",
    name: "CS50",
    finished: 2021,
  },
  {
    image: "utad_logo.png",
    institution: "UTAD",
    name: "Economics Bachelor",
    finished: 2019,
  },
];

const Education = () => {
  return (
    <Section title="Education">
      <div className="education">
        {courses.map((course) => (
          <EducationItem course={course} />
        ))}
      </div>
    </Section>
  );
};

export default Education;
