import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <h1>Routes</h1>
        </div>
        <div className="navLinks">
          <li><NavLink to="/" className="navLinkCss">Home</NavLink></li>
          <li><NavLink to="/about" className="navLinkCss">About</NavLink></li>
          <li><NavLink to="/contact" className="navLinkCss">Contact</NavLink></li>
          <li><NavLink to="/feedback" className="navLinkCss">Feeback</NavLink></li>
        </div>
      </div>
    </>
  )
}

export default Navbar