import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Online Quizz. All Rights Reserved.</p>
        
      </div>
    </footer>
  );
};

export default Footer;
