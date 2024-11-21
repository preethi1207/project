// import React, { useState } from 'react';
// import axios from 'axios';
// import './SignupForm.css';

// const SignupForm = ({ onClose, onLoginClick, onSignupSuccess }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/auth/signup', {
//         name: formData.name,
//         email: formData.email,
//         password: formData.password,
//       });
      
//       console.log('Signup successful:', response.data);

//       // Pass user data to parent component
//       onSignupSuccess({ name: formData.name, email: formData.email });

//       onClose();
//     } catch (error) {
//       if (error.response) {
//         console.error('Signup error:', error.response.data);
//       } else {
//         console.error('Signup error:', error.message);
//       }
//     }
//   };

//   return (
//     <div className="form-overlay">
//       <div className="form-container">
//         <button className="close-button" onClick={onClose}>X</button>
//         <h2>Sign Up</h2>
//         <form className="signup-form" onSubmit={handleSubmit}>
//           <div className="input-group">
//             <i className="fa fa-user icon"></i>
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="input-group">
//             <i className="fa fa-envelope icon"></i>
//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="input-group">
//             <i className="fa fa-lock icon"></i>
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="input-group">
//             <i className="fa fa-lock icon"></i>
//             <input
//               type="password"
//               name="confirmPassword"
//               placeholder="Confirm Password"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <button type="submit">Sign Up</button>
//         </form>

//         <div className="switch-form">
//           <p>Already have an account? <span onClick={onLoginClick}>Login</span></p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignupForm;













// import React, { useState } from 'react';
// import axios from 'axios';
// import './SignupForm.css';

// const SignupForm = ({ onClose, onLoginClick, onSignupSuccess }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/auth/signup', {
//         name: formData.name,
//         email: formData.email,
//         password: formData.password,
//       });
      
//       console.log('Signup successful:', response.data);

//       // Store user details in sessionStorage
//       sessionStorage.setItem('user', JSON.stringify({
//         name: formData.name,
//         email: formData.email,
//       }));

//       // Pass user data to parent component
//       onSignupSuccess({ name: formData.name, email: formData.email });

//       onClose();
//     } catch (error) {
//       if (error.response) {
//         console.error('Signup error:', error.response.data);
//       } else {
//         console.error('Signup error:', error.message);
//       }
//     }
//   };

//   return (
//     <div className="form-overlay">
//       <div className="form-container">
//         <button className="close-button" onClick={onClose}>X</button>
//         <h2>Sign Up</h2>
//         <form className="signup-form" onSubmit={handleSubmit}>
//           <div className="input-group">
//             <i className="fa fa-user icon"></i>
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="input-group">
//             <i className="fa fa-envelope icon"></i>
//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="input-group">
//             <i className="fa fa-lock icon"></i>
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="input-group">
//             <i className="fa fa-lock icon"></i>
//             <input
//               type="password"
//               name="confirmPassword"
//               placeholder="Confirm Password"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <button type="submit">Sign Up</button>
//         </form>

//         <div className="switch-form">
//           <p>Already have an account? <span onClick={onLoginClick}>Login</span></p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignupForm;






import React, { useState } from 'react';
import axios from 'axios';
import './SignupForm.css';

const SignupForm = ({ onClose, onLoginClick }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', { // Ensure the path matches
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      
      console.log('Signup successful:', response.data);

      // Close the form after successful signup
      onClose();
    } catch (error) {
      if (error.response) {
        console.error('Signup error:', error.response.data);
      } else {
        console.error('Signup error:', error.message);
      }
    }
  };

  return (
    <div className="form-overlay">
      <div className="form-container">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Sign Up</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <i className="fa fa-user icon"></i>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <i className="fa fa-envelope icon"></i>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <i className="fa fa-lock icon"></i>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <i className="fa fa-lock icon"></i>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <p className="login-link">
          Already have an account?{' '}
          <span onClick={onLoginClick} className="login-text" style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
