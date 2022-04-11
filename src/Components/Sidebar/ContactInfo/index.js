import React from "react";

import "./ContactInfo.css";

const ContactInfo = ({ icon, description, data }) => {
  return (
    <div className="contact-container">
      <div className="icon">{icon}</div>
      <div className="contact-info">
        <p className="contact-description">{description}</p>
        <p className="contact-data">{data}</p>
      </div>
    </div>
  );
};

export default ContactInfo;
