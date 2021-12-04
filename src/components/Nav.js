import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <header>
      <div className="navbar">
        <div><h1 className="logo-text">NETLIFY TESTING</h1></div>
        <ul>
          <li><NavLink to="/" exact activeClassName="active_class">Home</NavLink></li>
          <li><NavLink to="/about" exact activeClassName="active_class">About</NavLink></li>
          <li><NavLink to="/service" exact activeClassName="active_class">Service</NavLink></li>
          <li><NavLink to="/contact" exact activeClassName="active_class">Contact</NavLink></li>
        </ul>
      </div>
    </header>
  )
}

export default Nav
