import React from "react";
import LanguageInfo from "./LanguageInfo";

import "./Languages.css";

const Languages = () => {
  return (
    <div className="languages">
      <p className="languages-subtitle">Languages</p>
      <LanguageInfo
        icon="portugal-flag.png"
        description="Portuguese"
        data="Native"
      />
      <LanguageInfo icon="british-flag.png" description="English" data="C1" />
    </div>
  );
};

export default Languages;
