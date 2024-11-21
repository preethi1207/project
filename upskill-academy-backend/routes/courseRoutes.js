// const express = require('express');
// const router = express.Router();
// const Course = require('../models/Course'); // Import the Course model

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

// module.exports = router;


// const express = require('express');
// const router = express.Router();
// const courseController = require('../controllers/courseController'); // Make sure this is correctly imported

// // Route to get all courses
// router.get('/', courseController.getAllCourses);

// // Route to get a course by ID
// router.get('/:id', courseController.getCourseById);

// // Route to create a new course
// router.post('/', courseController.createCourse);

// module.exports = router;


// const express = require('express');
// const router = express.Router();
// const { getAllCourses, addCourse, updateCourse, deleteCourse } = require('../controllers/courseController');

// // Define course routes
// router.get('/', getAllCourses); // Fetch all courses
// router.post('/', addCourse); // Add a new course
// router.put('/:id', updateCourse); // Update an existing course
// router.delete('/:id', deleteCourse); // Delete a course

// module.exports = router;



// // routes/courseRoutes.js
// const express = require('express');
// const router = express.Router();
// const courseController = require('../controllers/courseController');

// router.get('/', courseController.getAllCourses);
// router.post('/add-course', courseController.addCourse);
// router.put('/:id', courseController.updateCourse);
// router.delete('/:id', courseController.deleteCourse);

// module.exports = router;


// // routes/course.js
// const express = require('express');
// const router = express.Router();
// const Course = require('../models/Course');

// // GET all courses
// router.get('/', async (req, res) => {
//   try {
//     const courses = await Course.find();
//     res.status(200).json(courses);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching courses', error: error.message });
//   }
// });

// module.exports = router;














// const express = require('express');
// const router = express.Router();
// const Course = require('../models/Course'); // Adjust the path as necessary

// // GET all courses
// router.get('/courses', async (req, res) => {
//   try {
//     const courses = await Course.find();
//     res.json(courses);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching courses' });
//   }
// });

// module.exports = router;











const express = require('express');
const router = express.Router();
const Course = require('../models/Course'); // Ensure the correct path to the Course model

// GET all courses
router.get('/', async (req, res) => {  // Shortened path to '/api/courses/'
  try {
    const courses = await Course.find();  // Retrieve all courses
    res.status(200).json(courses);
  } catch (error) {
    console.error('Error fetching courses:', error.message);
    res.status(500).json({ message: 'Error fetching courses' });
  }
});

// GET course by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const course = await Course.findById(id);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.status(200).json(course);
  } catch (error) {
    console.error('Error fetching course by ID:', error.message);
    res.status(500).json({ message: 'Error fetching course' });
  }
});

// POST a new course (optional, if you plan to create courses via API)
router.post('/', async (req, res) => {
  const { name, category, path, fees } = req.body;

  if (!name || !category || !path || !fees) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newCourse = new Course({ name, category, path, fees });
    await newCourse.save();
    res.status(201).json({ message: 'New course created successfully', course: newCourse });
  } catch (error) {
    console.error('Error creating course:', error.message);
    res.status(500).json({ message: 'Error creating course' });
  }
});

module.exports = router;
