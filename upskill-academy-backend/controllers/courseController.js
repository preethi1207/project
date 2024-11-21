// // controllers/courseController.js
// const Course = require('../models/Course');

// // Get all courses
// exports.getAllCourses = async (req, res) => {
//   try {
//     const courses = await Course.find();
//     res.json(courses);
//   } catch (error) {
//     res.status(500).json({ error: 'Error fetching courses' });
//   }
// };

// // Add new course
// exports.addCourse = async (req, res) => {
//   try {
//     const { name, category, path } = req.body;
//     const newCourse = new Course({ name, category, path });
//     await newCourse.save();
//     res.json(newCourse);
//   } catch (error) {
//     res.status(500).json({ error: 'Error adding course' });
//   }
// };

// // Update course
// exports.updateCourse = async (req, res) => {
//   try {
//     const updatedCourse = await Course.findByIdAndUpdate(
//       req.params.id,
//       { name: req.body.name, category: req.body.category, path: req.body.path },
//       { new: true }
//     );
//     res.json(updatedCourse);
//   } catch (error) {
//     res.status(500).json({ error: 'Error updating course' });
//   }
// };

// // Delete course
// exports.deleteCourse = async (req, res) => {
//   try {
//     await Course.findByIdAndDelete(req.params.id);
//     res.json({ message: 'Course deleted' });
//   } catch (error) {
//     res.status(500).json({ error: 'Error deleting course' });
//   }
// };


const Course = require('../models/Course');

// Get all courses
exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching courses' });
  }
};

// Add new course
exports.addCourse = async (req, res) => {
  try {
    const { name, category, path, fees } = req.body; // Include fees in the request body
    const newCourse = new Course({ name, category, path, fees }); // Add fees when creating a new course
    await newCourse.save();
    res.json(newCourse);
  } catch (error) {
    res.status(500).json({ error: 'Error adding course' });
  }
};

// Update course
exports.updateCourse = async (req, res) => {
  try {
    const { name, category, path, fees } = req.body; // Include fees in the request body
    const updatedCourse = await Course.findByIdAndUpdate(
      req.params.id,
      { name, category, path, fees }, // Update with fees
      { new: true }
    );
    res.json(updatedCourse);
  } catch (error) {
    res.status(500).json({ error: 'Error updating course' });
  }
};

// Delete course
exports.deleteCourse = async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.json({ message: 'Course deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting course' });
  }
};
