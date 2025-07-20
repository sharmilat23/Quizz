import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import assets from "../../assets/assets.js";
import Icon from "../../assets/Q-icon.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div
        className="navbar-logo"
        onClick={() => {
          navigate("/");
          setIsOpen(false);
        }}
        style={{ cursor: "pointer" }}
      >
        <img src={Icon} alt="logo" />
        <p>Online Quizz</p>
      </div>

      {/* Hamburger Icon */}
      <div
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        <span
          onClick={() => {
            navigate("/");
            setIsOpen(false);
          }}
        >
          Home
        </span>
        <span
          onClick={() => {
            navigate("/topics");
            setIsOpen(false);
          }}
        >
          Topics
        </span>
        <span
          onClick={() => {
            navigate("/about");
            setIsOpen(false);
          }}
        >
          About
        </span>
        <button
          className="login-btn"
          onClick={() => {
            navigate("/login"); 
            setIsOpen(false);
          }}
        >
          login/signup
        </button>
      </div>
    </div>
  );
};

export default Navbar;
