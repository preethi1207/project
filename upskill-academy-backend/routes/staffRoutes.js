

// const express = require('express');
// const router = express.Router();
// const Staff = require('../models/Staff'); // Import the Staff model

// // Get all staff members
// router.get('/get-staff', async (req, res) => {
//   try {
//     const staff = await Staff.find();
//     res.status(200).json(staff);
//   } catch (error) {
//     console.error('Error fetching staff:', error.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// // Add a new staff member
// router.post('/add-staff', async (req, res) => {
//   const { name, degree, courses } = req.body;

//   // Validate request body
//   if (!name || !degree || !Array.isArray(courses) || courses.length === 0) {
//     return res.status(400).json({ error: 'All fields are required and courses should be a non-empty array' });
//   }

//   try {
//     const newStaff = new Staff({ name, degree, courses });
//     await newStaff.save();
//     res.status(201).json({ message: 'Staff added successfully', staff: newStaff });
//   } catch (error) {
//     console.error('Error adding staff:', error.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// // Update a staff member
// router.put('/update-staff/:staffId', async (req, res) => {
//   const { staffId } = req.params;
//   const { name, degree, courses } = req.body;

//   // Validate request body
//   if (!name && !degree && !courses) {
//     return res.status(400).json({ error: 'At least one field (name, degree, or courses) must be provided for update' });
//   }

//   try {
//     const updatedStaff = await Staff.findByIdAndUpdate(staffId, req.body, { new: true, runValidators: true });

//     if (!updatedStaff) {
//       return res.status(404).json({ error: 'Staff not found' });
//     }

//     res.status(200).json({ message: 'Staff updated successfully', staff: updatedStaff });
//   } catch (error) {
//     console.error('Error updating staff:', error.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// // Delete a staff member
// router.delete('/delete-staff/:staffId', async (req, res) => {
//   const { staffId } = req.params;

//   try {
//     const deletedStaff = await Staff.findByIdAndDelete(staffId);

//     if (!deletedStaff) {
//       return res.status(404).json({ error: 'Staff not found' });
//     }

//     res.status(200).json({ message: 'Staff deleted successfully' });
//   } catch (error) {
//     console.error('Error deleting staff:', error.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// module.exports = router;


// const express = require('express');
// const router = express.Router();
// const Staff = require('../models/Staff');
// const verifyAdminToken = require('../middleware/authMiddleware'); 

// router.use(verifyAdminToken); // Apply authentication middleware

// // CRUD routes
// router.get('/get-staff', async (req, res) => {
//   try {
//     const staff = await Staff.find();
//     res.json(staff);
//   } catch (error) {
//     console.error('Error fetching staff:', error.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// router.post('/add-staff', async (req, res) => {
//   const { name, degree, courses } = req.body;
//   if (!name || !degree || !courses) {
//     return res.status(400).json({ error: 'All fields are required' });
//   }

//   try {
//     const newStaff = new Staff({ name, degree, courses });
//     await newStaff.save();
//     res.status(201).json(newStaff);
//   } catch (error) {
//     console.error('Error adding staff:', error.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// router.put('/update-staff/:staffId', async (req, res) => {
//   const { staffId } = req.params;
//   const updatedData = req.body;

//   try {
//     const updatedStaff = await Staff.findByIdAndUpdate(staffId, updatedData, { new: true });
//     if (!updatedStaff) return res.status(404).json({ error: 'Staff not found' });
//     res.json(updatedStaff);
//   } catch (error) {
//     console.error('Error updating staff:', error.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// router.delete('/delete-staff/:staffId', async (req, res) => {
//   const { staffId } = req.params;

//   try {
//     const deletedStaff = await Staff.findByIdAndDelete(staffId);
//     if (!deletedStaff) return res.status(404).json({ error: 'Staff not found' });
//     res.json({ message: 'Staff deleted successfully' });
//   } catch (error) {
//     console.error('Error deleting staff:', error.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// module.exports = router;



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
