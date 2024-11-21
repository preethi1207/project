// authService.js
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.JWT_SECRET || 'your-secret-key'; // Ensure this is in your .env file

// Generate JWT token
const generateToken = (payload) => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
};

// Verify JWT token
const verifyToken = (token) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    return null;
  }
};

// Middleware for checking roles
const authorizeAdmin = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Get token from header

  if (!token) {
    return res.status(403).json({ message: 'No token provided' });
  }

  const decoded = verifyToken(token);
  
  if (!decoded || decoded.role !== 'admin') {
    return res.status(403).json({ message: 'Unauthorized access' });
  }

  req.user = decoded; // Attach decoded token info to request
  next();
};

module.exports = { generateToken, verifyToken, authorizeAdmin };
