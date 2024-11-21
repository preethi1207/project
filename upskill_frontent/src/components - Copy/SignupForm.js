// import React, { useState } from 'react';
// import axios from 'axios';
// import './SignupForm.css';

// const SignupForm = ({ onClose }) => {
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
//       const response = await axios.post('http://localhost:5000/api/signup', {
//         name: formData.name,
//         email: formData.email,
//         password: formData.password,
//       });
//       console.log('Signup successful:', response.data);
//       // Handle successful signup (e.g., show a message, redirect, etc.)
//     } catch (error) {
//       // Log the full error object for better debugging
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
//               placeholder="Full Name"
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
//               placeholder="Email"
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
//       </div>
//     </div>
//   );
// };

// export default SignupForm;


// import React, { useState } from 'react';
// import axios from 'axios';
// import './SignupForm.css';

// const SignupForm = ({ onClose }) => {
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
//       const response = await axios.post('http://localhost:5000/api/signup', {
//         name: formData.name,
//         email: formData.email,
//         password: formData.password,
//       });
//       console.log('Signup successful:', response.data);

//       // Close the form after successful signup
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
//               placeholder="Full Name"
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
//               placeholder="Email"
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
//       </div>
//     </div>
//   );
// };

// export default SignupForm;

// import React, { useState } from 'react';
// import axios from 'axios';
// import './SignupForm.css';

// const SignupForm = ({ onClose, onLoginClick }) => {
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
//       const response = await axios.post('http://localhost:5000/api/signup', {
//         name: formData.name,
//         email: formData.email,
//         password: formData.password,
//       });
//       console.log('Signup successful:', response.data);

//       // Close the form after successful signup
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
//               placeholder="Full Name"
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
//               placeholder="Email"
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
//         <p className="login-link">
//         Already have an account? {' '}
//          <span onClick={onLoginClick} className="login-text">Login</span>
//         </p>
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
      const response = await axios.post('http://localhost:5000/api/signup', {
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
