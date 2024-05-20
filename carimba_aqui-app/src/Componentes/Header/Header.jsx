import React from "react";
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img className="logo" alt="Logo" src="" />
      </div>
      <nav className="nav-links">
        <a href="#sobre" className="nav-link">Sobre</a>
        <a href="#lugares" className="nav-link">Lugares</a>
        <a href="#contatos" className="nav-link">Contatos</a>
      </nav>
    </header>
  );
};

export default Header;

