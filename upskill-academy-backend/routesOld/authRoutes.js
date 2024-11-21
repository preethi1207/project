// // authRoutes.js

// const express = require('express');
// const router = express.Router();
// const User = require('../models/User'); // Update the path if necessary
// const bcrypt = require('bcryptjs');

// // Login route
// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.status(400).json({ message: 'Email and password are required' });
//   }

//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     // Generate JWT token (use your logic here)
//     const token = 'some_generated_token'; // Replace with actual token generation logic

//     res.status(200).json({ message: 'Login successful', token });
//   } catch (error) {
//     console.error('Error during login:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// module.exports = router;
//****************************************************************************************************** */

// const express = require('express');
// const router = express.Router();
// const { signup, login } = require('../controllers/authController'); // Import handlers

// // Signup and login routes
// router.post('/signup', signup);
// router.post('/login', login);

// module.exports = router;


// const express = require('express');
// const router = express.Router();
// const authController = require('../controllers/authController'); // Import the controller

// // Ensure the handler functions are defined and exported in `authController`
// router.post('/signup', authController.signup);
// router.post('/login', authController.login); // Example additional route

// module.exports = router;



const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController'); // Import the controller

// Ensure the handler functions are defined and exported in `authController`
router.post('/signup', authController.signup); // Add signup route
router.post('/login', authController.login);   // Ensure no middleware is applied here

module.exports = router;
