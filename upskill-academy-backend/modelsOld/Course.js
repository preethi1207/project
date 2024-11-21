// const mongoose = require('mongoose');

// // Define schema
// const courseSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   category: { type: String, required: true }, // e.g., 'Courses Taught', 'Classes for', etc.
//   path: { type: String, required: true },
//   fees: { type: Number, required: true }, // Add fees field to the schema
// });

// // Create the Course model
// const Course = mongoose.model('Course', courseSchema);

// module.exports = Course;

const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  path: { type: String, required: true },
  fees: { type: Number, required: true } // Ensure 'fees' is defined
});

module.exports = mongoose.model('Course', CourseSchema);
