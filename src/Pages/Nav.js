import React from 'react';
import logo from '../Pages/img/club.png';
import '../Pages/Nav.css';

const Nav = () => {
  return (
    <div className="nav">
      <img className="logo" src={logo} alt="TechWiz Club Logo" />
      <ul className="nav-links">
        <li><a href="#home1">Home</a></li>
        <li><a href="#ab">About</a></li>
        <li><a href="#pas">Events</a></li>
        <li><a href="#g">MetaVerse</a></li>
      </ul>
    </div>
  );
};

export default Nav;
