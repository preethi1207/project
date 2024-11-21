// import React from 'react';
// import { Link } from 'react-router-dom';
// import logo1 from "../assets/logo1.jpg";
// import logo2 from "../assets/logo2.jpg";
// import './Navbar.css';

// const Navbar = ({ onLoginClick, onSignupClick, isAuthenticated }) => {
//   return (
//     <nav className="navbar">
//       <div className="logo-container">
//         <img src={logo1} alt="Logo 1" className="logo1" />
//         <img src={logo2} alt="Logo 2" className="logo2" />
//       </div>
//       <ul className="nav-links">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/course">Course</Link></li>
//         <li><Link to="/admissionEnquiry">Admission Enquiry</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/contact">Contact</Link></li>
//       </ul>
//       {!isAuthenticated && (
//         <div className="auth-buttons">
//           <button onClick={onLoginClick}>Login</button>
//           <button onClick={onSignupClick}>Sign Up</button>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from "../assets/logo1.jpg";
import logo2 from "../assets/logo2.jpg";
import './Navbar.css';

const Navbar = ({ onLoginClick, onSignupClick, isAuthenticated }) => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo1} alt="Logo 1" className="logo logo1" />
        <img src={logo2} alt="Logo 2" className="logo logo2" />
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/course">Course</Link></li>
        <li><Link to="/admissionEnquiry">Admission Form</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      {!isAuthenticated && (
        <div className="auth-buttons">
          <button onClick={onLoginClick}>Login</button>
          <button onClick={onSignupClick}>Sign Up</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
