// const jwt = require('jsonwebtoken');

// // Middleware function to verify the Admin token
// const verifyAdminToken = (req, res, next) => {
//   const authHeader = req.headers['authorization'];

//   // Log incoming request for debugging
//   console.log('Incoming request:', req.method, req.url);
//   console.log('Headers received:', req.headers);

//   // Check if Authorization header is missing
//   if (!authHeader) {
//     console.error('Authorization header missing');
//     return res.status(401).json({ message: 'Authorization header missing' });
//   }

//   // Extract token from Authorization header (Bearer <token>)
//   const tokenParts = authHeader.split(' ');
//   if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
//     console.error('Invalid Authorization header format');
//     return res.status(401).json({ message: 'Invalid Authorization header format' });
//   }

//   const token = tokenParts[1];

//   // Check if token is missing
//   if (!token) {
//     console.error('Access token missing');
//     return res.status(401).json({ message: 'Access token missing' });
//   }

//   // Log the token for debugging (be cautious with sensitive data)
//   console.log('Token received:', token);

//   // Verify token
//   jwt.verify(token, process.env.JWT_SECRET, (err, admin) => {
//     if (err) {
//       console.error('Token verification failed:', err.message);
//       return res.status(403).json({ message: 'Invalid or expired token' });
//     }

//     // Attach admin data to the request object
//     req.admin = admin;

//     // Proceed to the next middleware or route handler
//     next();
//   });
// };

// module.exports = { verifyAdminToken };
















// const jwt = require('jsonwebtoken');

// // Middleware function to verify the Admin token
// const verifyAdminToken = (req, res, next) => {
//   const authHeader = req.headers['authorization'];

//   // Check if the Authorization header is missing
//   if (!authHeader) {
//     return res.status(401).json({ message: 'Authorization header missing' });
//   }

//   // Split the Authorization header and extract the token (Bearer <token>)
//   const tokenParts = authHeader.split(' ');
//   if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
//     return res.status(401).json({ message: 'Invalid Authorization header format' });
//   }

//   const token = tokenParts[1];

//   // Verify the token using JWT
//   jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//     if (err) {
//       return res.status(403).json({ message: 'Invalid or expired token' });
//     }

//     // Attach admin data (decoded payload) to the request object
//     req.admin = decoded;

//     // Proceed to the next middleware or route handler
//     next();
//   });
// };

// module.exports = { verifyAdminToken };







// const jwt = require('jsonwebtoken');

// const verifyAdminToken = (req, res, next) => {
//     console.log('Verifying Admin Token...');
//     const authHeader = req.headers['authorization'];

//     if (!authHeader) {
//         return res.status(401).json({ message: 'Authorization header missing' });
//     }

//     const tokenParts = authHeader.split(' ');
//     if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
//         return res.status(401).json({ message: 'Invalid Authorization header format' });
//     }

//     const token = tokenParts[1];
//     console.log('Extracted token:', token);

//     jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//         if (err) {
//             console.log('Token verification failed:', err.message);
//             return res.status(403).json({ message: 'Invalid or expired token' });
//         }

//         req.admin = decoded;
//         next();
//     });
// };

// module.exports = verifyAdminToken;












// const jwt = require('jsonwebtoken');

// const verifyAdminToken = (req, res, next) => {
//   const token = req.headers['authorization'];
  
//   if (!token) {
//     return res.status(403).json({ error: 'No token provided, access denied' });
//   }

//   try {
//     // Verify the token with the secret key
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.adminId = decoded.id; // Store admin id from token into request
//     next(); // Proceed to next middleware or route
//   } catch (error) {
//     console.error('Invalid token:', error.message);
//     return res.status(403).json({ error: 'Invalid token, access denied' });
//   }
// };

// module.exports = { verifyAdminToken };




















// const jwt = require('jsonwebtoken');

// exports.verifyAdminToken = (req, res, next) => {
//   const token = req.headers['authorization'];

//   if (!token) {
//     return res.status(403).json({ message: 'Authorization token required' });
//   }

//   try {
//     const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);

//     // Ensure the decoded token contains the admin role
//     if (decoded.role !== 'admin') {
//       return res.status(403).json({ message: 'Access denied. Admins only.' });
//     }

//     req.user = decoded; // Attach user info to request
//     next();
//   } catch (err) {
//     return res.status(401).json({ message: 'Invalid or expired token' });
//   }
// };




















// // verifyAdminToken.js
// const jwt = require('jsonwebtoken');

// // Middleware function to verify the Admin token
// const verifyAdminToken = (req, res, next) => {
//     // Get the Authorization header
//     const authHeader = req.headers['authorization'];

//     // Check if the Authorization header is missing
//     if (!authHeader) {
//         return res.status(401).json({ message: 'Authorization header missing' });
//     }

//     // Split the Authorization header and extract the token (Bearer <token>)
//     const tokenParts = authHeader.split(' ');
//     if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
//         return res.status(401).json({ message: 'Invalid Authorization header format' });
//     }

//     const token = tokenParts[1];

//     // Verify the token using JWT
//     jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//         if (err) {
//             return res.status(403).json({ message: 'Invalid or expired token' });
//         }

//         // Attach admin data (decoded payload) to the request object
//         req.admin = decoded;

//         // Proceed to the next middleware or route handler
//         next();
//     });
// };

// // Export the middleware
// module.exports = verifyAdminToken;















const jwt = require('jsonwebtoken');

// Middleware function to verify the Admin token
const verifyAdminToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  // Log incoming request for debugging
  console.log('Incoming request:', req.method, req.url);
  console.log('Headers received:', req.headers);

  // Check if Authorization header is missing
  if (!authHeader) {
    console.error('Authorization header missing');
    return res.status(401).json({ message: 'Authorization header missing' });
  }

  // Extract token from Authorization header (Bearer <token>)
  const tokenParts = authHeader.split(' ');
  if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
    console.error('Invalid Authorization header format');
    return res.status(401).json({ message: 'Invalid Authorization header format' });
  }

  const token = tokenParts[1];

  // Check if token is missing
  if (!token) {
    console.error('Access token missing');
    return res.status(401).json({ message: 'Access token missing' });
  }

  // Log the token for debugging (be cautious with sensitive data)
  console.log('Token received:', token);

  // Verify token
  jwt.verify(token, process.env.JWT_SECRET, (err, admin) => {
    if (err) {
      console.error('Token verification failed:', err.message);
      return res.status(403).json({ message: 'Invalid or expired token' });
    }

    // Attach admin data to the request object
    req.admin = admin;

    // Proceed to the next middleware or route handler
    next();
  });
};

module.exports = { verifyAdminToken };
