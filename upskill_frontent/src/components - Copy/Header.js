import React from 'react';
import logo from '../assets/logo.png';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      {/* <img src={logo} alt="Upskill Academy Logo" className="logo" /> */}
      <nav className="navbar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Course</li>
          <li>Admission Enquiry</li>
          <li>Contact</li>
          <li>Login</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
