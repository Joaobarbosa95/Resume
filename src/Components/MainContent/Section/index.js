import React from "react";
import "./Section.css";

const Section = ({ title, children }) => {
  return (
    <div className="section">
      <div className="section-divider">
        <div class="section-divider-step-icon-base">
          <div class="section-divider-step-icon-center"></div>
        </div>
      </div>
      <div className="section-content">
        <h2 className="section-title">{title}</h2>
        <div className="section-data">{children}</div>
      </div>
    </div>
  );
};

export default Section;
