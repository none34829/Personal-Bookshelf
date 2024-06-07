import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Book App</Link>
      </div>
      <ul className="navbar-nav">
        <li>
          <Link to="/">Book Search</Link>
        </li>
        <li>
          <Link to="/bookshelf">My Bookshelf</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;