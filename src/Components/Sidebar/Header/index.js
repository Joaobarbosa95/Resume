import React from "react";
import "./Header.css";
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header">
      <FaRegUserCircle className="face-icon" />
      <p className="name">João Barbosa</p>
      <p className="description">Web Developer</p>
    </div>
  );
};

export default Header;
