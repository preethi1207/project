
// const express = require('express');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const adminAuthMiddleware = require('../middleware/authMiddleware');
// const Admin = require('../models/Admin');
// const Course = require('../models/Course'); // Make sure this model exists
// const Staff = require('../models/Staff'); // Make sure this model exists
// const router = express.Router();

// // Admin login
// router.post('/login', async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     const admin = await Admin.findOne({ username });
//     if (!admin) {
//       return res.status(404).json({ message: 'Admin not found' });
//     }

//     const isMatch = await bcrypt.compare(password, admin.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//     res.json({ token });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Route to add a new course
// router.post('/add-course', adminAuthMiddleware, async (req, res) => {
//   const { name, description } = req.body;

//   try {
//     const newCourse = new Course({ name, description });
//     await newCourse.save();
//     res.status(201).json({ message: 'Course added successfully', course: newCourse });
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to add course' });
//   }
// });

// // Route to update a course
// router.put('/update-course/:id', adminAuthMiddleware, async (req, res) => {
//   const { id } = req.params;
//   const { name, description } = req.body;

//   try {
//     const updatedCourse = await Course.findByIdAndUpdate(id, { name, description }, { new: true });
//     if (!updatedCourse) {
//       return res.status(404).json({ message: 'Course not found' });
//     }
//     res.json({ message: 'Course updated successfully', course: updatedCourse });
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to update course' });
//   }
// });

// // Route to delete a course
// router.delete('/delete-course/:id', adminAuthMiddleware, async (req, res) => {
//   const { id } = req.params;

//   try {
//     const deletedCourse = await Course.findByIdAndDelete(id);
//     if (!deletedCourse) {
//       return res.status(404).json({ message: 'Course not found' });
//     }
//     res.json({ message: 'Course deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to delete course' });
//   }
// });

// // Route to add a new staff member
// router.post('/add-staff', adminAuthMiddleware, async (req, res) => {
//   const { name, degree, courses } = req.body;

//   try {
//     const newStaff = new Staff({ name, degree, courses });
//     await newStaff.save();
//     res.status(201).json({ message: 'Staff added successfully', staff: newStaff });
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to add staff' });
//   }
// });

// // Route to update staff member details
// router.put('/update-staff/:id', adminAuthMiddleware, async (req, res) => {
//   const { id } = req.params;
//   const { name, degree, courses } = req.body;

//   try {
//     const updatedStaff = await Staff.findByIdAndUpdate(id, { name, degree, courses }, { new: true });
//     if (!updatedStaff) {
//       return res.status(404).json({ message: 'Staff not found' });
//     }
//     res.json({ message: 'Staff updated successfully', staff: updatedStaff });
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to update staff' });
//   }
// });

// // Route to delete a staff member
// router.delete('/delete-staff/:id', adminAuthMiddleware, async (req, res) => {
//   const { id } = req.params;

//   try {
//     const deletedStaff = await Staff.findByIdAndDelete(id);
//     if (!deletedStaff) {
//       return res.status(404).json({ message: 'Staff not found' });
//     }
//     res.json({ message: 'Staff deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to delete staff' });
//   }
// });

// module.exports = router;





// const express = require('express');
// const router = express.Router();
// const Course = require('../models/Course');
// const Staff = require('../models/Staff');

// // Course Routes
// // Get all courses
// router.get('/get-courses', async (req, res) => {
//   try {
//     const courses = await Course.find();
//     res.json(courses);
//   } catch (error) {
//     console.error('Error fetching courses:', error.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// // Add a new course
// router.post('/add-course', async (req, res) => {
//   const { name, description } = req.body;
//   if (!name || !description) {
//     return res.status(400).json({ error: 'Name and description are required' });
//   }

//   try {
//     const newCourse = new Course({ name, description });
//     await newCourse.save();
//     res.status(201).json(newCourse);
//   } catch (error) {
//     console.error('Error adding course:', error.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// // Update a course
// router.put('/update-course/:courseId', async (req, res) => {
//   const { courseId } = req.params;
//   const updatedData = req.body;

//   try {
//     const updatedCourse = await Course.findByIdAndUpdate(courseId, updatedData, { new: true });
//     if (!updatedCourse) return res.status(404).json({ error: 'Course not found' });
//     res.json(updatedCourse);
//   } catch (error) {
//     console.error('Error updating course:', error.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// // Delete a course
// router.delete('/delete-course/:courseId', async (req, res) => {
//   const { courseId } = req.params;

//   try {
//     const deletedCourse = await Course.findByIdAndDelete(courseId);
//     if (!deletedCourse) return res.status(404).json({ error: 'Course not found' });
//     res.json({ message: 'Course deleted successfully' });
//   } catch (error) {
//     console.error('Error deleting course:', error.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// // Staff Routes
// // Get all staff
// router.get('/get-staff', async (req, res) => {
//   try {
//     const staff = await Staff.find();
//     res.json(staff);
//   } catch (error) {
//     console.error('Error fetching staff:', error.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// // Add a new staff member
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

// // Update a staff member
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

// // Delete a staff member
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



//************************************************************************************************************************ */

// const express = require('express');
// const router = express.Router();
// const Course = require('../models/Course');
// const Staff = require('../models/Staff');
// const { verifyAdminToken } = require('../middleware/verifyAdminToken');

// // Apply middleware to protect all routes
// router.use(verifyAdminToken); 

// // Course Routes
// router.get('/get-courses', async (req, res) => {
//   try {
//     const courses = await Course.find();
//     res.json(courses);
//   } catch (error) {
//     console.error('Error fetching courses:', error.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// router.post('/add-course', async (req, res) => {
//   const { name, description } = req.body;
//   if (!name || !description) {
//     return res.status(400).json({ error: 'Name and description are required' });
//   }

//   try {
//     const newCourse = new Course({ name, description });
//     await newCourse.save();
//     res.status(201).json(newCourse);
//   } catch (error) {
//     console.error('Error adding course:', error.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// router.put('/update-course/:courseId', async (req, res) => {
//   const { courseId } = req.params;
//   const updatedData = req.body;

//   try {
//     const updatedCourse = await Course.findByIdAndUpdate(courseId, updatedData, { new: true });
//     if (!updatedCourse) return res.status(404).json({ error: 'Course not found' });
//     res.json(updatedCourse);
//   } catch (error) {
//     console.error('Error updating course:', error.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// router.delete('/delete-course/:courseId', async (req, res) => {
//   const { courseId } = req.params;

//   try {
//     const deletedCourse = await Course.findByIdAndDelete(courseId);
//     if (!deletedCourse) return res.status(404).json({ error: 'Course not found' });
//     res.json({ message: 'Course deleted successfully' });
//   } catch (error) {
//     console.error('Error deleting course:', error.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// // Staff Routes
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
// const Course = require('../models/Course');
// const Staff = require('../models/Staff');
// const { verifyAdminToken } = require('../middleware/verifyAdminToken');

// // Apply middleware to protect all routes
// router.use(verifyAdminToken);

// // Course Routes
// router.get('/get-courses', async (req, res) => {
//   try {
//     const courses = await Course.find();
//     res.json(courses);
//   } catch (error) {
//     console.error('Error fetching courses:', error.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// router.post('/add-course', async (req, res) => {
//   const { name, description } = req.body;
//   if (!name || !description) {
//     return res.status(400).json({ error: 'Name and description are required' });
//   }

//   try {
//     const newCourse = new Course({ name, description });
//     await newCourse.save();
//     res.status(201).json(newCourse);
//   } catch (error) {
//     console.error('Error adding course:', error.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// router.put('/update-course/:courseId', async (req, res) => {
//   const { courseId } = req.params;
//   const updatedData = req.body;

//   try {
//     const updatedCourse = await Course.findByIdAndUpdate(courseId, updatedData, { new: true });
//     if (!updatedCourse) return res.status(404).json({ error: 'Course not found' });
//     res.json(updatedCourse);
//   } catch (error) {
//     console.error('Error updating course:', error.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// router.delete('/delete-course/:courseId', async (req, res) => {
//   const { courseId } = req.params;

//   try {
//     const deletedCourse = await Course.findByIdAndDelete(courseId);
//     if (!deletedCourse) return res.status(404).json({ error: 'Course not found' });
//     res.json({ message: 'Course deleted successfully' });
//   } catch (error) {
//     console.error('Error deleting course:', error.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// // Staff Routes
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
// const Course = require('../models/Course');
// const Staff = require('../models/Staff');
// const Admin = require('../models/Admin');
// const { verifyAdminToken } = require('../middleware/verifyAdminToken');

// // Apply middleware to protect all routes
// router.use(verifyAdminToken);


// router.get('/get-admins', async (req, res) => {
//   try {
//     const admins = await Admin.find();
//     res.json(admins);
//   } catch (error) {
//     console.error('Error fetching admins:', error.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// });
// // Course Routes
// router.get('/get-courses', async (req, res) => {
//   try {
//     const courses = await Course.find();
//     res.json(courses);
//   } catch (error) {
//     console.error('Error fetching courses:', error.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// router.post('/add-course', async (req, res) => {
//   const { name, description } = req.body;
//   if (!name || !description) {
//     return res.status(400).json({ error: 'Name and description are required' });
//   }

//   try {
//     const newCourse = new Course({ name, description });
//     await newCourse.save();
//     res.status(201).json(newCourse);
//   } catch (error) {
//     console.error('Error adding course:', error.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// router.put('/update-course/:courseId', async (req, res) => {
//   const { courseId } = req.params;
//   const updatedData = req.body;

//   try {
//     const updatedCourse = await Course.findByIdAndUpdate(courseId, updatedData, { new: true });
//     if (!updatedCourse) return res.status(404).json({ error: 'Course not found' });
//     res.json(updatedCourse);
//   } catch (error) {
//     console.error('Error updating course:', error.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// router.delete('/delete-course/:courseId', async (req, res) => {
//   const { courseId } = req.params;

//   try {
//     const deletedCourse = await Course.findByIdAndDelete(courseId);
//     if (!deletedCourse) return res.status(404).json({ error: 'Course not found' });
//     res.json({ message: 'Course deleted successfully' });
//   } catch (error) {
//     console.error('Error deleting course:', error.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// // Staff Routes
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
// const Course = require('../models/Course');
// const Staff = require('../models/Staff');
// const Admin = require('../models/Admin');
// const { verifyAdminToken } = require('../middleware/verifyAdminToken');

// // Apply middleware to protect all routes
// router.use(verifyAdminToken);

// // Admin Routes
// router.get('/get-admins', async (req, res) => {
//   try {
//     const admins = await Admin.find();
//     res.json(admins);
//   } catch (error) {
//     console.error('Error fetching admins:', error.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// router.post('/add-admin', async (req, res) => {
//   try {
//     const { name, email } = req.body;
//     const newAdmin = new Admin({ name, email });
//     await newAdmin.save();
//     res.status(201).json(newAdmin);
//   } catch (error) {
//     res.status(500).json({ error: 'Error adding admin' });
//   }
// });
// // Course Routes
// router.get('/get-courses', async (req, res) => {
//   try {
//     const courses = await Course.find();
//     res.json(courses);
//   } catch (error) {
//     console.error('Error fetching courses:', error.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// router.post('/add-course', async (req, res) => {
//   const { name, description } = req.body;
//   if (!name || !description) {
//     return res.status(400).json({ error: 'Name and description are required' });
//   }

//   try {
//     const newCourse = new Course({ name, description });
//     await newCourse.save();
//     res.status(201).json(newCourse);
//   } catch (error) {
//     console.error('Error adding course:', error.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// router.put('/update-course/:courseId', async (req, res) => {
//   const { courseId } = req.params;
//   const updatedData = req.body;

//   try {
//     const updatedCourse = await Course.findByIdAndUpdate(courseId, updatedData, { new: true });
//     if (!updatedCourse) return res.status(404).json({ error: 'Course not found' });
//     res.json(updatedCourse);
//   } catch (error) {
//     console.error('Error updating course:', error.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// router.delete('/delete-course/:courseId', async (req, res) => {
//   const { courseId } = req.params;

//   try {
//     const deletedCourse = await Course.findByIdAndDelete(courseId);
//     if (!deletedCourse) return res.status(404).json({ error: 'Course not found' });
//     res.json({ message: 'Course deleted successfully' });
//   } catch (error) {
//     console.error('Error deleting course:', error.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// // Staff Routes
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
// const Course = require('../models/Course');
// const Staff = require('../models/Staff');
// const Admin = require('../models/Admin');
// const { verifyAdminToken } = require('../middleware/verifyAdminToken');

// // Apply middleware to protect all routes
// router.use(verifyAdminToken);

// // Admin Routes
// // Get all admins
// router.get('/get-admins', async (req, res) => {
//   try {
//     const admins = await Admin.find();
//     res.json(admins);
//   } catch (error) {
//     console.error('Error fetching admins:', error.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// // Add a new admin
// router.post('/add-admin', async (req, res) => {
//   try {
//     const { email, password } = req.body; // Assuming you want to store email and password
//     if (!email || !password) {
//       return res.status(400).json({ error: 'Email and password are required' });
//     }

//     // Check if admin already exists
//     const existingAdmin = await Admin.findOne({ email });
//     if (existingAdmin) {
//       return res.status(400).json({ error: 'Admin with this email already exists' });
//     }

//     const newAdmin = new Admin({ email, password }); // Ensure to hash the password in a real scenario
//     await newAdmin.save();
//     res.status(201).json(newAdmin);
//   } catch (error) {
//     console.error('Error adding admin:', error.message);
//     res.status(500).json({ error: 'Error adding admin' });
//   }
// });

// // Course Routes
// // Get all courses
// router.get('/get-courses', async (req, res) => {
//   try {
//     const courses = await Course.find();
//     res.json(courses);
//   } catch (error) {
//     console.error('Error fetching courses:', error.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// // Add a new course
// router.post('/add-course', async (req, res) => {
//   const { name, description } = req.body;
//   if (!name || !description) {
//     return res.status(400).json({ error: 'Name and description are required' });
//   }

//   try {
//     const newCourse = new Course({ name, description });
//     await newCourse.save();
//     res.status(201).json(newCourse);
//   } catch (error) {
//     console.error('Error adding course:', error.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// // Update a course
// router.put('/update-course/:courseId', async (req, res) => {
//   const { courseId } = req.params;
//   const updatedData = req.body;

//   try {
//     const updatedCourse = await Course.findByIdAndUpdate(courseId, updatedData, { new: true });
//     if (!updatedCourse) return res.status(404).json({ error: 'Course not found' });
//     res.json(updatedCourse);
//   } catch (error) {
//     console.error('Error updating course:', error.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// // Delete a course
// router.delete('/delete-course/:courseId', async (req, res) => {
//   const { courseId } = req.params;

//   try {
//     const deletedCourse = await Course.findByIdAndDelete(courseId);
//     if (!deletedCourse) return res.status(404).json({ error: 'Course not found' });
//     res.json({ message: 'Course deleted successfully' });
//   } catch (error) {
//     console.error('Error deleting course:', error.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// // Staff Routes
// // Get all staff
// router.get('/get-staff', async (req, res) => {
//   try {
//     const staff = await Staff.find();
//     res.json(staff);
//   } catch (error) {
//     console.error('Error fetching staff:', error.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// // Add a new staff member
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

// // Update a staff member
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

// // Delete a staff member
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
// const Course = require('../models/Course');
// const Staff = require('../models/Staff');
// const Admin = require('../models/Admin');
// const User = require('../models/User');
// const AdmissionEnquiry = require('../models/AdmissionEnquiry'); // Importing AdmissionEnquiry model
// const { verifyAdminToken } = require('../middleware/verifyAdminToken');

// // Apply the admin authentication middleware to all admin routes
// router.use(verifyAdminToken);

// // ==========================
// // ADMIN ROUTES
// // ==========================
// // Get all admins
// router.get('/get-admins', async (req, res) => {
//   try {
//     const admins = await Admin.find();
//     res.json(admins);
//   } catch (error) {
//     console.error('Error fetching admins:', error.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// // Add a new admin
// router.post('/add-admin', async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     if (!email || !password) {
//       return res.status(400).json({ error: 'Email and password are required' });
//     }

//     // Check if admin already exists
//     const existingAdmin = await Admin.findOne({ email });
//     if (existingAdmin) {
//       return res.status(400).json({ error: 'Admin with this email already exists' });
//     }

//     const newAdmin = new Admin({ email, password });
//     await newAdmin.save();
//     res.status(201).json(newAdmin);
//   } catch (error) {
//     console.error('Error adding admin:', error.message);
//     res.status(500).json({ error: 'Error adding admin' });
//   }
// });

// // ==========================
// // COURSE ROUTES
// // ==========================
// // Get all courses
// router.get('/get-courses', async (req, res) => {
//   try {
//     const courses = await Course.find();
//     res.json(courses);
//   } catch (error) {
//     console.error('Error fetching courses:', error.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// // Add a new course
// router.post('/add-course', async (req, res) => {
//   const { name, description } = req.body;
//   if (!name || !description) {
//     return res.status(400).json({ error: 'Name and description are required' });
//   }

//   try {
//     const newCourse = new Course({ name, description });
//     await newCourse.save();
//     res.status(201).json(newCourse);
//   } catch (error) {
//     console.error('Error adding course:', error.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// // Update a course
// router.put('/update-course/:courseId', async (req, res) => {
//   const { courseId } = req.params;
//   const updatedData = req.body;

//   try {
//     const updatedCourse = await Course.findByIdAndUpdate(courseId, updatedData, { new: true });
//     if (!updatedCourse) return res.status(404).json({ error: 'Course not found' });
//     res.json(updatedCourse);
//   } catch (error) {
//     console.error('Error updating course:', error.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// // Delete a course
// router.delete('/delete-course/:courseId', async (req, res) => {
//   const { courseId } = req.params;

//   try {
//     const deletedCourse = await Course.findByIdAndDelete(courseId);
//     if (!deletedCourse) return res.status(404).json({ error: 'Course not found' });
//     res.json({ message: 'Course deleted successfully' });
//   } catch (error) {
//     console.error('Error deleting course:', error.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// // ==========================
// // STAFF ROUTES
// // ==========================
// // Get all staff
// router.get('/get-staff', async (req, res) => {
//   try {
//     const staff = await Staff.find();
//     res.json(staff);
//   } catch (error) {
//     console.error('Error fetching staff:', error.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// // Add a new staff member
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

// // Update a staff member
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

// // Delete a staff member
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

// // ==========================
// // ADMISSION ENQUIRY ROUTES
// // ==========================
// // Get all admission enquiries
// router.get('/get-admission-enquiries', async (req, res) => {
//   try {
//     const enquiries = await AdmissionEnquiry.find();
//     res.json(enquiries);
//   } catch (error) {
//     console.error('Error fetching admission enquiries:', error.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// // Add a new admission enquiry (optional)
// router.post('/add-admission-enquiry', async (req, res) => {
//   const { name, email, phone, courseInterested, message } = req.body;

//   if (!name || !email || !phone || !courseInterested || !message) {
//     return res.status(400).json({ error: 'All fields are required' });
//   }

//   try {
//     const newEnquiry = new AdmissionEnquiry({
//       name,
//       email,
//       phone,
//       courseInterested,
//       message,
//     });
//     await newEnquiry.save();
//     res.status(201).json(newEnquiry);
//   } catch (error) {
//     console.error('Error adding admission enquiry:', error.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// // Delete an admission enquiry
// router.delete('/delete-admission-enquiry/:enquiryId', async (req, res) => {
//   const { enquiryId } = req.params;

//   try {
//     const deletedEnquiry = await AdmissionEnquiry.findByIdAndDelete(enquiryId);
//     if (!deletedEnquiry) return res.status(404).json({ error: 'Enquiry not found' });
//     res.json({ message: 'Enquiry deleted successfully' });
//   } catch (error) {
//     console.error('Error deleting enquiry:', error.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// // ==========================
// // USER ROUTES
// // ==========================
// // Get all users
// router.get('/get-users', async (req, res) => {
//   try {
//     const users = await User.find();
//     res.json(users);
//   } catch (error) {
//     console.error('Error fetching users:', error.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// module.exports = router;






const express = require('express');
const router = express.Router();
const Course = require('../models/Course');
const Staff = require('../models/Staff');
const Admin = require('../models/Admin');
const verifyAdminToken = require('../middleware/verifyAdminToken');

// Apply middleware to protect all routes
router.use(verifyAdminToken);

// ======================== Admin Routes ======================== //

// Get all admins
router.get('/get-admins', async (req, res) => {
  try {
    const admins = await Admin.find();
    res.json(admins);
  } catch (error) {
    console.error('Error fetching admins:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
});

// Add a new admin
router.post('/add-admin', async (req, res) => {
  try {
    const { email, password } = req.body; // Assuming you want to store email and password
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ error: 'Admin with this email already exists' });
    }

    const newAdmin = new Admin({ email, password }); // Ensure to hash the password in a real scenario
    await newAdmin.save();
    res.status(201).json(newAdmin);
  } catch (error) {
    console.error('Error adding admin:', error.message);
    res.status(500).json({ error: 'Error adding admin' });
  }
});

// ======================== Course Routes ======================== //

// Get all courses
router.get('/get-courses', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    console.error('Error fetching courses:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
});

// Add a new course
router.post('/add-course', async (req, res) => {
  const { name, description } = req.body;
  if (!name || !description) {
    return res.status(400).json({ error: 'Name and description are required' });
  }

  try {
    const newCourse = new Course({ name, description });
    await newCourse.save();
    res.status(201).json(newCourse);
  } catch (error) {
    console.error('Error adding course:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update a course
router.put('/update-course/:courseId', async (req, res) => {
  const { courseId } = req.params;
  const updatedData = req.body;

  try {
    const updatedCourse = await Course.findByIdAndUpdate(courseId, updatedData, { new: true });
    if (!updatedCourse) return res.status(404).json({ error: 'Course not found' });
    res.json(updatedCourse);
  } catch (error) {
    console.error('Error updating course:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete a course
router.delete('/delete-course/:courseId', async (req, res) => {
  const { courseId } = req.params;

  try {
    const deletedCourse = await Course.findByIdAndDelete(courseId);
    if (!deletedCourse) return res.status(404).json({ error: 'Course not found' });
    res.json({ message: 'Course deleted successfully' });
  } catch (error) {
    console.error('Error deleting course:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
});

// ======================== Staff Routes ======================== //

// Get all staff
router.get('/get-staff', async (req, res) => {
  try {
    const staff = await Staff.find();
    res.json(staff);
  } catch (error) {
    console.error('Error fetching staff:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
});

// Add a new staff member
router.post('/add-staff', async (req, res) => {
  const { name, degree, courses } = req.body;
  if (!name || !degree || !courses) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const newStaff = new Staff({ name, degree, courses });
    await newStaff.save();
    res.status(201).json(newStaff);
  } catch (error) {
    console.error('Error adding staff:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update a staff member
router.put('/update-staff/:staffId', async (req, res) => {
  const { staffId } = req.params;
  const updatedData = req.body;

  try {
    const updatedStaff = await Staff.findByIdAndUpdate(staffId, updatedData, { new: true });
    if (!updatedStaff) return res.status(404).json({ error: 'Staff not found' });
    res.json(updatedStaff);
  } catch (error) {
    console.error('Error updating staff:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete a staff member
router.delete('/delete-staff/:staffId', async (req, res) => {
  const { staffId } = req.params;

  try {
    const deletedStaff = await Staff.findByIdAndDelete(staffId);
    if (!deletedStaff) return res.status(404).json({ error: 'Staff not found' });
    res.json({ message: 'Staff deleted successfully' });
  } catch (error) {
    console.error('Error deleting staff:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
});

// Export the router
module.exports = router;
