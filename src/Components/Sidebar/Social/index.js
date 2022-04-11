import React from "react";

import { FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";
import { SiTryhackme } from "react-icons/si";

import "./Social.css";
import ContactInfo from "../ContactInfo";

const Social = () => {
  return (
    <div className="social">
      <p className="social-subtitle">Social</p>
      <ContactInfo
        icon={<FiGithub />}
        description="Github"
        data="https://github.com/Joaobarbosa95/"
      />
      <ContactInfo
        icon={<FiLinkedin />}
        description="Linkedin"
        data="https://www.linkedin.com/in/joão-barbosa-23227321a/"
      />
      <ContactInfo icon={<FiTwitter />} description="Twitter" data="None" />
      <ContactInfo
        icon={<SiTryhackme />}
        description="TryHackMe"
        data="https://tryhackme.com/p/yagura95"
      />
    </div>
  );
};

export default Social;
