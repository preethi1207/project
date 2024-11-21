// import React, { useState } from 'react';
// import axios from 'axios';
// import '../styles/LoginForm.css';

// const LoginForm = ({ onClose, onSignupClick }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/login', { email, password });
//       console.log('Login successful:', response.data);
//       // Handle successful login (e.g., store token, redirect, etc.)
//     } catch (error) {
//       console.error('Login error:', error.response ? error.response.data : error.message);
//       // Handle login error
//     }
//   };

//   return (
//     <div className="form-overlay">
//       <div className="form-container">
//         <button className="close-button" onClick={onClose}>X</button>
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>Email:</label>
//             <div className="input-container">
//               <i className="fas fa-envelope"></i>
//               <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//             </div>
//           </div>
//           <div className="form-group">
//             <label>Password:</label>
//             <div className="input-container">
//               <i className="fas fa-lock"></i>
//               <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//             </div>
//           </div>
//           <button type="submit" className="login-button">Login</button>
//         </form>
//         <p className="signup-text">
//           Don't have an account? <span onClick={onSignupClick} className="signup-link">Sign Up</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// // export default LoginForm;
// import React, { useState } from 'react';
// import axios from 'axios';
// import '../styles/LoginForm.css';

// const LoginForm = ({ onClose, onSignupClick }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/login', { email, password });

//       if (response.status === 200) {
//         const { token } = response.data;
//         // Store token in localStorage or state management
//         localStorage.setItem('token', token);
//         setSuccessMessage('Login Successfully');
//         setErrorMessage(''); // Clear any previous error messages
//         // Redirect or handle successful login
//         // e.g., window.location.href = '/home';
//       }
//     } catch (error) {
//       setErrorMessage(
//         error.response && error.response.data ? error.response.data.message : 'Login failed. Please try again.'
//       );
//       setSuccessMessage(''); // Clear any previous success messages
//     }
//   };

//   return (
//     <div className="form-overlay">
//       <div className="form-container">
//         <button className="close-button" onClick={onClose}>X</button>
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>Email:</label>
//             <div className="input-container">
//               <i className="fas fa-envelope"></i>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//           </div>
//           <div className="form-group">
//             <label>Password:</label>
//             <div className="input-container">
//               <i className="fas fa-lock"></i>
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//           </div>
//           <button type="submit" className="login-button">Login</button>
//         </form>

//         {/* Display success or error messages */}
//         {successMessage && <p className="success-message">{successMessage}</p>}
//         {errorMessage && <p className="error-message">{errorMessage}</p>}

//         <p className="signup-text">
//           Don't have an account?{' '}
//           <span onClick={onSignupClick} className="signup-link">Sign Up</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;


// import React, { useState } from 'react';
// import axios from 'axios';
// import '../styles/LoginForm.css';

// const LoginForm = ({ onClose, onSignupClick }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/login', { email, password });

//       if (response.status === 200) {
//         const { token } = response.data;
//         // Store token in localStorage or state management
//         localStorage.setItem('token', token);
//         setSuccessMessage('Login Successfully');
//         setErrorMessage(''); // Clear any previous error messages
//         // Redirect or handle successful login
//         // e.g., window.location.href = '/home';
//       }
//     } catch (error) {
//       setErrorMessage(
//         error.response && error.response.data ? error.response.data.message : 'Login failed. Please try again.'
//       );
//       setSuccessMessage(''); // Clear any previous success messages
//     }
//   };

//   return (
//     <div className="form-overlay">
//       <div className="form-container">
//         <button className="close-button" onClick={onClose}>X</button>
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>Email:</label>
//             <div className="input-container">
//               <i className="fas fa-envelope"></i>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//           </div>
//           <div className="form-group">
//             <label>Password:</label>
//             <div className="input-container">
//               <i className="fas fa-lock"></i>
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//           </div>
//           <button type="submit" className="login-button">Login</button>
//         </form>

//         {/* Display success or error messages */}
//         {successMessage && <p className="success-message">{successMessage}</p>}
//         {errorMessage && <p className="error-message">{errorMessage}</p>}

//         <p className="signup-text">
//           Don't have an account?{' '}
//           <span onClick={onSignupClick} className="signup-link">Sign Up</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;


import React, { useState } from 'react';
import axios from 'axios';
import '../styles/LoginForm.css';

const LoginForm = ({ onClose, onSignupClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', { email, password });

      if (response.status === 200) {
        const { token } = response.data;
        // Store token in localStorage or state management
        localStorage.setItem('token', token);
        setSuccessMessage('Login Successfully');
        setErrorMessage(''); // Clear any previous error messages

        // Close the form after successful login
        onClose();

        // Redirect or handle successful login
        // e.g., window.location.href = '/home';
      }
    } catch (error) {
      setErrorMessage(
        error.response && error.response.data ? error.response.data.message : 'Login failed. Please try again.'
      );
      setSuccessMessage(''); // Clear any previous success messages
    }
  };

  return (
    <div className="form-overlay">
      <div className="form-container">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <div className="input-container">
              <i className="fas fa-envelope"></i>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label>Password:</label>
            <div className="input-container">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>

        {/* Display success or error messages */}
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <p className="signup-text">
          Don't have an account?{' '}
          <span onClick={onSignupClick} className="signup-link">Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
