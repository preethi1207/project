
// import { Link } from 'react-router-dom';
// import logo1 from "../assets/logo1-removebg-preview.png";
// import logo2 from "../assets/logo2-removebg-preview.png";
// import './Navbar.css';

// const Navbar = ({ onLoginClick, onSignupClick, isAuthenticated, user }) => {
//   // Get user initials from either name or email
//   const userInitial = user?.name ? user.name[0].toUpperCase() : user?.email ? user.email[0].toUpperCase() : '';

//   return (
//     <nav className="navbar">
//       {/* Logo Container */}
//       <div className="logo-container">
//         <img src={logo1} alt="Logo 1" className="logo logo1" />
//         <img src={logo2} alt="Logo 2" className="logo logo2" />
//       </div>

//       {/* Navigation Links */}
//       <ul className="nav-links">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/course">Course</Link></li>
//         <li><Link to="/admissionEnquiry">Admission Form</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/staffs">Staffs</Link></li>
//         <li><Link to="/Cart">Cart</Link></li>
//       </ul>

//       {/* Display user initial or authentication buttons */}
//       {isAuthenticated && user ? (
//         <div className="user-logo">
//           {/* Show user's initial */}
//           <span className="user-initial">{userInitial}</span>
//         </div>
//       ) : (
//         <div className="auth-buttons">
//           <button onClick={onLoginClick}>Login</button>
//           <button onClick={onSignupClick}>Sign Up</button>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo1 from "../assets/logo1-removebg-preview.png";
import logo2 from "../assets/logo2-removebg-preview.png";
import './Navbar.css';

const Navbar = ({ onLoginClick, onSignupClick, isAuthenticated, user }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Toggle dropdown visibility when initials are clicked
  const handleInitialsClick = () => {
    setDropdownVisible(!dropdownVisible);
  };

  // Handle logout functionality
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.reload(); // Refresh the page to reset state
  };

  return (
    <nav className="navbar">
      {/* Logo Container */}
      <div className="logo-container">
        <img src={logo1} alt="Logo 1" className="logo logo1" />
        <img src={logo2} alt="Logo 2" className="logo logo2" />
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/course">Course</Link></li>
        <li><Link to="/admissionEnquiry">Admission Form</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/staffs">Staffs</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>

      {/* Authentication Buttons and User Initials */}
      <div className="auth-buttons">
        {isAuthenticated && user ? (
          <div className="user-container" onClick={handleInitialsClick}>
            {/* Show user initials */}
            <button className="user-initial">
              {user.name ? user.name.charAt(0) : user.email.charAt(0)}
            </button>

            {/* Dropdown for email and logout */}
            {dropdownVisible && (
              <div className="dropdown">
                <ul>
                  <li>{user.email}</li>
                  <li>
                    <button onClick={handleLogout}>Logout</button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <>
            <button onClick={onLoginClick} className="login-btn">Login</button>
            <button onClick={onSignupClick} className="signup-btn">Sign Up</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
