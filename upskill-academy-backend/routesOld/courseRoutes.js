// const express = require('express');
// const router = express.Router();
// const Course = require('../models/Course'); // Ensure the correct path to the Course model

// // GET all courses
// router.get('/', async (req, res) => {  // Shortened path to '/api/courses/'
//   try {
//     const courses = await Course.find();  // Retrieve all courses
//     res.status(200).json(courses);
//   } catch (error) {
//     console.error('Error fetching courses:', error.message);
//     res.status(500).json({ message: 'Error fetching courses' });
//   }
// });

// // GET course by ID
// router.get('/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     const course = await Course.findById(id);
//     if (!course) {
//       return res.status(404).json({ message: 'Course not found' });
//     }
//     res.status(200).json(course);
//   } catch (error) {
//     console.error('Error fetching course by ID:', error.message);
//     res.status(500).json({ message: 'Error fetching course' });
//   }
// });

// // POST a new course (optional, if you plan to create courses via API)
// router.post('/', async (req, res) => {
//   const { name, category, path, fees } = req.body;

//   if (!name || !category || !path || !fees) {
//     return res.status(400).json({ message: 'All fields are required' });
//   }

//   try {
//     const newCourse = new Course({ name, category, path, fees });
//     await newCourse.save();
//     res.status(201).json({ message: 'New course created successfully', course: newCourse });
//   } catch (error) {
//     console.error('Error creating course:', error.message);
//     res.status(500).json({ message: 'Error creating course' });
//   }
// });

// module.exports = router;








// const express = require('express');
// const router = express.Router();
// const Course = require('../models/Course'); // Ensure the correct path to the Course model

// // GET all courses
// router.get('/', async (req, res) => {  
//   try {
//     const courses = await Course.find();  
//     res.status(200).json(courses);
//   } catch (error) {
//     console.error('Error fetching courses:', error.message);
//     res.status(500).json({ message: 'Error fetching courses' });
//   }
// });

// // GET course by ID
// router.get('/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     const course = await Course.findById(id);
//     if (!course) {
//       return res.status(404).json({ message: 'Course not found' });
//     }
//     res.status(200).json(course);
//   } catch (error) {
//     console.error('Error fetching course by ID:', error.message);
//     res.status(500).json({ message: 'Error fetching course' });
//   }
// });

// // POST a new course
// router.post('/', async (req, res) => {
//   const { name, category, path, fees } = req.body;

//   if (!name || !category || !path || !fees) {
//     return res.status(400).json({ message: 'All fields are required' });
//   }

//   try {
//     const newCourse = new Course({ name, category, path, fees });
//     await newCourse.save();
//     res.status(201).json({ message: 'New course created successfully', course: newCourse });
//   } catch (error) {
//     console.error('Error creating course:', error.message);
//     res.status(500).json({ message: 'Error creating course' });
//   }
// });

// // PUT update a course by ID
// router.put('/:id', async (req, res) => {
//   const { id } = req.params;
//   const updatedData = req.body;

//   try {
//     const updatedCourse = await Course.findByIdAndUpdate(id, updatedData, { new: true });
//     if (!updatedCourse) return res.status(404).json({ message: 'Course not found' });
//     res.status(200).json({ message: 'Course updated successfully', course: updatedCourse });
//   } catch (error) {
//     console.error('Error updating course:', error.message);
//     res.status(500).json({ message: 'Error updating course' });
//   }
// });

// // DELETE a course by ID
// router.delete('/:id', async (req, res) => {
//   const { id } = req.params;

//   try {
//     const deletedCourse = await Course.findByIdAndDelete(id);
//     if (!deletedCourse) return res.status(404).json({ message: 'Course not found' });
//     res.status(200).json({ message: 'Course deleted successfully' });
//   } catch (error) {
//     console.error('Error deleting course:', error.message);
//     res.status(500).json({ message: 'Error deleting course' });
//   }
// });

// module.exports = router;





// const express = require('express');
// const router = express.Router();
// const Course = require('../models/Course'); // Ensure the correct path to the Course model

// // GET all courses
// router.get('/', async (req, res) => {  
//   try {
//     const courses = await Course.find();  
//     res.status(200).json(courses);
//   } catch (error) {
//     console.error('Error fetching courses:', error.message);
//     res.status(500).json({ message: 'Error fetching courses' });
//   }
// });

// // GET course by ID
// router.get('/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     const course = await Course.findById(id);
//     if (!course) {
//       return res.status(404).json({ message: 'Course not found' });
//     }
//     res.status(200).json(course);
//   } catch (error) {
//     console.error('Error fetching course by ID:', error.message);
//     res.status(500).json({ message: 'Error fetching course' });
//   }
// });

// // POST a new course
// router.post('/', async (req, res) => {
//   const { name, category, path, fees } = req.body;

//   // Check for required fields
//   if (!name || !category || !path || fees === undefined) {
//     return res.status(400).json({ message: 'All fields are required' });
//   }

//   try {
//     const newCourse = new Course({ name, category, path, fees });
//     await newCourse.save();
//     res.status(201).json({ message: 'New course created successfully', course: newCourse });
//   } catch (error) {
//     console.error('Error creating course:', error.message);
//     res.status(500).json({ message: 'Error creating course' });
//   }
// });

// // PUT update a course by ID
// router.put('/:id', async (req, res) => {
//   const { id } = req.params;
//   const updatedData = req.body;

//   try {
//     const updatedCourse = await Course.findByIdAndUpdate(id, updatedData, { new: true });
//     if (!updatedCourse) return res.status(404).json({ message: 'Course not found' });
//     res.status(200).json({ message: 'Course updated successfully', course: updatedCourse });
//   } catch (error) {
//     console.error('Error updating course:', error.message);
//     res.status(500).json({ message: 'Error updating course' });
//   }
// });

// // DELETE a course by ID
// router.delete('/:id', async (req, res) => {
//   const { id } = req.params;

//   try {
//     const deletedCourse = await Course.findByIdAndDelete(id);
//     if (!deletedCourse) return res.status(404).json({ message: 'Course not found' });
//     res.status(200).json({ message: 'Course deleted successfully' });
//   } catch (error) {
//     console.error('Error deleting course:', error.message);
//     res.status(500).json({ message: 'Error deleting course' });
//   }
// });

// module.exports = router;



const express = require('express');
const multer = require('multer');
const Course = require('../models/Course'); // Ensure the correct path to the Course model
const router = express.Router();

// Configure multer for file uploads
const upload = multer({ dest: 'uploads/' }); // Directory to store uploaded files

// GET all courses
router.get('/', async (req, res) => {  
    try {
        const courses = await Course.find();  
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

// POST a new course
router.post('/', upload.single('image'), async (req, res) => {
    const { name, category, path, fees } = req.body;
    const imagePath = req.file ? req.file.path : null; // Get the uploaded image path

    // Check for required fields
    if (!name || !category || !path || fees === undefined) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const newCourse = new Course({ name, category, path, fees, image: imagePath });
        await newCourse.save();
        res.status(201).json({ message: 'New course created successfully', course: newCourse });
    } catch (error) {
        console.error('Error creating course:', error.message);
        res.status(500).json({ message: 'Error creating course', error: error.message });
    }
});

// PUT update a course by ID
router.put('/:id', upload.single('image'), async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
    const imagePath = req.file ? req.file.path : null; // Get the uploaded image path

    if (imagePath) {
        updatedData.image = imagePath; // If an image is uploaded, add it to the updated data
    }

    try {
        const updatedCourse = await Course.findByIdAndUpdate(id, updatedData, { new: true });
        if (!updatedCourse) return res.status(404).json({ message: 'Course not found' });
        res.status(200).json({ message: 'Course updated successfully', course: updatedCourse });
    } catch (error) {
        console.error('Error updating course:', error.message);
        res.status(500).json({ message: 'Error updating course' });
    }
});

// DELETE a course by ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deletedCourse = await Course.findByIdAndDelete(id);
        if (!deletedCourse) return res.status(404).json({ message: 'Course not found' });
        res.status(200).json({ message: 'Course deleted successfully' });
    } catch (error) {
        console.error('Error deleting course:', error.message);
        res.status(500).json({ message: 'Error deleting course' });
    }
});

module.exports = router;
