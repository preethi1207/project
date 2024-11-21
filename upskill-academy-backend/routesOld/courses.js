const express = require('express');
const router = express.Router();
const Course = require('../models/Course');
const Staff = require('../models/Staff');
const { verifyAdminToken } = require('../middleware/verifyAdminToken');

// Apply middleware to protect all routes
router.use(verifyAdminToken);

// Function to handle errors
const handleError = (res, error, defaultMessage) => {
  console.error(error.message);
  res.status(500).json({ error: defaultMessage });
};

// Course Routes
router.get('/get-courses', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    handleError(res, error, 'Error fetching courses');
  }
});

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
    handleError(res, error, 'Error adding course');
  }
});

router.put('/update-course/:courseId', async (req, res) => {
  const { courseId } = req.params;
  const updatedData = req.body;

  try {
    const updatedCourse = await Course.findByIdAndUpdate(courseId, updatedData, { new: true });
    if (!updatedCourse) return res.status(404).json({ error: 'Course not found' });
    res.json(updatedCourse);
  } catch (error) {
    handleError(res, error, 'Error updating course');
  }
});

router.delete('/delete-course/:courseId', async (req, res) => {
  const { courseId } = req.params;

  try {
    const deletedCourse = await Course.findByIdAndDelete(courseId);
    if (!deletedCourse) return res.status(404).json({ error: 'Course not found' });
    res.json({ message: 'Course deleted successfully' });
  } catch (error) {
    handleError(res, error, 'Error deleting course');
  }
});

// Staff Routes
router.get('/get-staff', async (req, res) => {
  try {
    const staff = await Staff.find();
    res.json(staff);
  } catch (error) {
    handleError(res, error, 'Error fetching staff');
  }
});

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
    handleError(res, error, 'Error adding staff');
  }
});

router.put('/update-staff/:staffId', async (req, res) => {
  const { staffId } = req.params;
  const updatedData = req.body;

  try {
    const updatedStaff = await Staff.findByIdAndUpdate(staffId, updatedData, { new: true });
    if (!updatedStaff) return res.status(404).json({ error: 'Staff not found' });
    res.json(updatedStaff);
  } catch (error) {
    handleError(res, error, 'Error updating staff');
  }
});

router.delete('/delete-staff/:staffId', async (req, res) => {
  const { staffId } = req.params;

  try {
    const deletedStaff = await Staff.findByIdAndDelete(staffId);
    if (!deletedStaff) return res.status(404).json({ error: 'Staff not found' });
    res.json({ message: 'Staff deleted successfully' });
  } catch (error) {
    handleError(res, error, 'Error deleting staff');
  }
});

module.exports = router;
