import React from "react";

import "./LanguageInfo.css";

const LanguageInfo = ({ icon, description, data }) => {
  return (
    <div className="language-container">
      <div className="flag-icon">
        <img src={icon} alt="" />
      </div>
      <div className="language-info">
        <p className="language-description">{description}</p>
        <p className="language-data">{data}</p>
      </div>
    </div>
  );
};

export default LanguageInfo;
