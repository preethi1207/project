
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
//       // Send login request to backend
//       const response = await axios.post('http://localhost:5000/api/login', { email, password });

//       if (response.status === 200) {
//         const { token, user } = response.data; // Assume backend returns user details
//         localStorage.setItem('token', token); // Store token in localStorage

//         if (user.role === 'admin') {
//           setSuccessMessage('Admin Login Successful');
//           window.location.href = '/admin/dashboard'; // Redirect to admin dashboard
//         } else {
//           setSuccessMessage('User Login Successful');
//           window.location.href = '/home'; // Redirect to home page for regular users
//         }

//         setErrorMessage(''); // Clear any previous error messages
//         onClose(); // Close the form upon successful login
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
//             <i className="fas fa-envelope"></i>
//             <div className="input-container">
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)} // Use setEmail to update state
//                 required
//               />
//             </div>
//           </div>
//           <div className="form-group">
//             <label>Password:</label>
//             <i className="fas fa-lock"></i>
//             <div className="input-container">
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)} // Use setPassword to update state
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
import { useNavigate } from 'react-router-dom';
import '../styles/LoginForm.css';

const LoginForm = ({ onClose, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();  // Use useNavigate instead of window.location

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send login request to backend
      const response = await axios.post('http://localhost:5000/api/login', { email, password });

      if (response.status === 200) {
        const { token, user } = response.data;
        localStorage.setItem('token', token); // Store token in localStorage
        localStorage.setItem('user', JSON.stringify(user)); // Store user details in localStorage

        // Call onLoginSuccess to update parent component state
        onLoginSuccess(user);

        if (user.role === 'admin') {
          setSuccessMessage('Admin Login Successful');
          navigate('/admin/dashboard');  // Navigate to admin dashboard without reloading
        } else {
          setSuccessMessage('User Login Successful');
          navigate('/home');  // Navigate to home page for regular users
        }

        setErrorMessage(''); // Clear any previous error messages
        onClose();  // Close the form upon successful login
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
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
      </div>
    </div>
  );
};

export default LoginForm;
