// const jwt = require('jsonwebtoken');
// const Admin = require('../models/Admin');

// const adminAuthMiddleware = async (req, res, next) => {
//   const token = req.header('Authorization');
//   if (!token) {
//     return res.status(401).json({ message: 'Access denied. No token provided.' });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     const admin = await Admin.findById(decoded.id);
//     if (!admin) {
//       return res.status(401).json({ message: 'Access denied. Invalid token.' });
//     }
//     req.admin = admin;
//     next();
//   } catch (error) {
//     res.status(400).json({ message: 'Invalid token.' });
//   }
// };

// module.exports = adminAuthMiddleware;

// middleware/authMiddleware.js
// const jwt = require('jsonwebtoken');

// const verifyAdminToken = (req, res, next) => {
//   const authHeader = req.headers['authorization'];

//   if (!authHeader) {
//     return res.status(401).json({ message: 'Authorization header missing' });
//   }

//   const token = authHeader.split(' ')[1];

//   if (!token) {
//     return res.status(401).json({ message: 'Access token missing' });
//   }

//   jwt.verify(token, process.env.JWT_SECRET, (err, admin) => {
//     if (err) {
//       return res.status(403).json({ message: 'Invalid or expired token' });
//     }

//     req.admin = admin; // Store the admin data in the request object
//     next();
//   });
// };

// module.exports = { verifyAdminToken };






// const jwt = require('jsonwebtoken');

// const verifyAdminToken = (req, res, next) => {
//   const authHeader = req.headers['authorization'];

//   if (!authHeader) {
//     return res.status(401).json({ message: 'Authorization header missing' });
//   }

//   const token = authHeader.split(' ')[1];

//   if (!token) {
//     return res.status(401).json({ message: 'Access token missing' });
//   }

//   jwt.verify(token, process.env.JWT_SECRET, (err, admin) => {
//     if (err) {
//       return res.status(403).json({ message: 'Invalid or expired token' });
//     }

//     req.admin = admin; // Store the admin data in the request object
//     next();
//   });
// };

// module.exports = verifyAdminToken;








// // In middleware/authMiddleware.js
// const jwt = require('jsonwebtoken');

// const isAuthenticated = (req, res, next) => {
//     const authHeader = req.headers['authorization'];

//     if (!authHeader) {
//         return res.status(401).json({ message: 'Authorization header missing' });
//     }

//     const token = authHeader.split(' ')[1];

//     if (!token) {
//         return res.status(401).json({ message: 'Access token missing' });
//     }

//     jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//         if (err) {
//             return res.status(403).json({ message: 'Invalid or expired token' });
//         }

//         req.user = user; // Store user data in the request object
//         next();
//     });
// };

// module.exports = { isAuthenticated };



const jwt = require('jsonwebtoken');

const verifyAdminToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(401).json({ message: 'Authorization header missing' });
  }

  const token = authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access token missing' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, admin) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid or expired token' });
    }

    req.admin = admin; // Store the admin data in the request object
    next();
  });
};

module.exports = verifyAdminToken;
