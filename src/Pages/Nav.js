import React from 'react';
import logo from '../Pages/img/club.png';
import '../Pages/Nav.css';

const Nav = () => {
  return (
    <div className="nav">
      <ul>
        <img src={logo} alt="" />
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Past Events</a></li>
        <li><a href="#">Gallery</a></li>
      </ul>
    </div>
  );
};

export default Nav;
