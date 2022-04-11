import React from "react";

const Company = ({ company }) => {
  return (
    <div className="company">
      <div className="time-line">
        <div className="point"></div>
        <div className="line"></div>
      </div>
      <div className="company-info">
        <div className="date">{company.date}</div>
        <div className="company-description">
          <img src={company.logo} alt="" />
          <div className="job-position">{company.position}</div>
          <div className="company-name">{company.companyName}</div>
        </div>
      </div>
      <div className="job-description">{company.jobDescription}</div>
    </div>
  );
};

export default Company;
