


// const bcrypt = require('bcryptjs');
// const User = require('../models/User');
// const Admin = require('../models/Admin');
// const { generateToken } = require('../utils/authService'); // Token generation function

// // Handle login
// exports.login = async (req, res) => {
//   const { email, password } = req.body;
//   console.log('Login attempt for email:', email); // Log the email attempting to log in

//   try {
//     // Check if the user is an admin
//     let user = await Admin.findOne({ email });
//     let role = 'admin';

//     if (!user) {
//       // If not an admin, check if it's a regular user
//       user = await User.findOne({ email });
//       role = 'user';

//       if (!user) {
//         console.error('Login failed: User not found for email:', email); // Log when user is not found
//         return res.status(404).json({ message: 'User not found' });
//       }
//     }

//     // Compare the entered password with the stored hashed password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       console.error('Login failed: Invalid password for email:', email); // Log invalid password attempts
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }

//     // Generate a token using the auth service
//     const token = generateToken({ id: user._id, email: user.email, role });
//     console.log('Login successful for email:', email); // Log successful login

//     // Send response with token and user details
//     res.status(200).json({ token, user: { email: user.email, role } });

//   } catch (error) {
//     console.error('Login error:', error.message); // Log any server error
//     res.status(500).json({ message: 'Server error' });
//   }
// };








const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Admin = require('../models/Admin');
const { generateToken } = require('../utils/authService'); // Import the token generation function

// Handle login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user is an admin
    let user = await Admin.findOne({ email });
    let role = 'admin';

    if (!user) {
      // If not an admin, check if it's a regular user
      user = await User.findOne({ email });
      role = 'user';

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
    }

    // Compare the entered password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate a token using the auth service
    const token = generateToken({ id: user._id, email: user.email, role });

    // Send response with token and user details
    res.status(200).json({ token, user: { email: user.email, role } });

  } catch (error) {
    console.error('Login error:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
};
