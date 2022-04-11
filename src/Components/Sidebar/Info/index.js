import React from "react";
import {
  AiOutlineMail,
  AiFillPhone,
  AiOutlineLink,
  AiOutlineInfo,
} from "react-icons/ai";

import ContactInfo from "../ContactInfo";

import "./Info.css";

const Info = () => {
  return (
    <div className="info">
      <ContactInfo
        icon={<AiOutlineMail />}
        description="Email"
        data="bticjoaobarbosa@hotmail.com"
      />
      <ContactInfo icon={<AiOutlineLink />} description="Website" data="None" />
      <ContactInfo
        icon={<AiFillPhone />}
        description="Phone"
        data="916273011"
      />
      <ContactInfo
        icon={<AiOutlineInfo />}
        description="Address"
        data="Oliveira de Azeméis, Portugal"
      />
    </div>
  );
};

export default Info;
