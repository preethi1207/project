const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController'); // Adjust the path if necessary
const authController = require('../controllers/authController'); // Adjust the path if necessary
const enquiryController = require('../controllers/enquiryController'); // Adjust the path if necessary
const paymentsController = require('../controllers/paymentController'); // Corrected to paymentController
const authMiddleware = require('../middleware/authMiddleware'); // Adjust the path if necessary

// Route for getting admins
router.get('/get-admins', authMiddleware.verifyAdminToken, adminController.getAdmins);

// Route for getting enquiries
router.get('/enquiries', authMiddleware.verifyToken, enquiryController.getEnquiries);

// Route for payments
router.get('/payments', authMiddleware.verifyToken, paymentsController.getPayments);

// Authentication route
router.get('/auth', authController.getAuth);

// Additional routes can be defined below...
// Example:
// router.post('/create-enquiry', authMiddleware.verifyToken, enquiryController.createEnquiry);

module.exports = router;
