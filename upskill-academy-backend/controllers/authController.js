

// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const Admin = require('../models/Admin');  // Admin model
// const User = require('../models/User');    // User model

// // Signup logic
// exports.signup = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const existingUser = await Admin.findOne({ email }) || await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newAdmin = new Admin({ email, password: hashedPassword }); // Change to User if needed
//     await newAdmin.save();

//     return res.status(201).json({ message: 'User created successfully' });
//   } catch (error) {
//     console.error('Signup error:', error.message);
//     return res.status(500).json({ message: 'Server error' });
//   }
// };

// // Login logic
// exports.login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const admin = await Admin.findOne({ email });
//     const user = await User.findOne({ email });
//     const account = admin || user;

//     if (!account) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     const isMatch = await bcrypt.compare(password, account.password);

//     if (!isMatch) {
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }

//     const token = jwt.sign(
//       { id: account._id, role: admin ? 'admin' : 'user' },
//       process.env.JWT_SECRET,
//       { expiresIn: '1h' }
//     );

//     return res.status(200).json({
//       token,
//       role: admin ? 'admin' : 'user',
//       user: { id: account._id, email: account.email },
//     });
//   } catch (error) {
//     console.error('Login error:', error.message);
//     return res.status(500).json({ message: 'Server error' });
//   }
// };











const User = require('../models/User'); // Ensure this path is correct
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); // If you use JWT for authentication

// Define and export the signup function
exports.signup = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const newUser = new User({
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
};

// Define and export the login function if needed
exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
    // Find the user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Generate and send JWT token (if using JWT)
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    console.error('Error logging in:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
};
