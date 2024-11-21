// const express = require('express');
// const router = express.Router();
// const staffController = require('../controllers/staffController'); // Ensure this is correctly imported

// // Example route to get all staff
// router.get('/', staffController.getAllStaff); 

// // Example route to get a single staff member by ID
// router.get('/:id', staffController.getStaffById);

// // Example route to create a new staff member
// router.post('/', staffController.createStaff);

// module.exports = router;


const express = require('express');
const router = express.Router();
const staffController = require('../controllers/staffController'); // Adjust the path as necessary

// Get all staff members
router.get('/', staffController.getAllStaff);

// Add a new staff member
router.post('/add-staff', staffController.addStaff);

// Update an existing staff member
router.put('/:id', staffController.updateStaff);

// Delete a staff member
router.delete('/:id', staffController.deleteStaff);

module.exports = router;
