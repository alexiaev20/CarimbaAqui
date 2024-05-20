// Footer.js

import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="content-container">
        <div className="left-section">
          <img src="/path/to/logo.png" alt="Logo" className="logo" />
          <p className="description">
            Pernambuco, um pedaço de paraíso para todos! Um destino único, caloroso e que te abraça o ano inteiro.
          </p>
        </div>

        <div className="right-section">
          <div className="icons-container">
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="linkedin-icon">
              <img src="/path/to/linkedin-icon.png" alt="LinkedIn" />
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="github-icon">
              <img src="/path/to/github-icon.png" alt="GitHub" />
            </a>
          </div>
        </div>
      </div>

      <hr className="line" />

      <div className="copy-right">
        Copyright 2024 Todos os direitos reservados
      </div>
    </footer>
  );
};

export default Footer;
