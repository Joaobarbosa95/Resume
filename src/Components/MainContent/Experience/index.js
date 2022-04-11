import React from "react";
import Section from "../Section";
import Company from "./Company";

import "./Experience.css";

const experience = [
  {
    logo: "vicaima.png",
    companyName: "Vicaima",
    position: "operator",
    date: "6 January, 2021 - 30 April, 2022",
    jobDescription: "Factory work",
  },
  {
    logo: "colep.png",
    companyName: "Colep, S.A.",
    position: "operator",
    date: "2018 - 2020",
    jobDescription: "Factory work",
  },
];

const Experience = () => {
  return (
    <Section title="Experience">
      {experience.map((company) => (
        <Company company={company} />
      ))}
    </Section>
  );
};

export default Experience;
