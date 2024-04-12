import React from 'react'
import logo from '../Pages/img/club.png'
import '../Pages/Nav.css'
const Nav = () => {
  return (
    <>
      <div className="nav">
     
      <ul>
      <img src={logo} alt=""  />
        <li>Home</li>
        <li>About</li>
        <li>Past Events</li>
        <li>gallery</li>
       
      </ul>
      </div>
    </>
  )
}

export default Nav