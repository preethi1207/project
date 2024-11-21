// seedCourses.js
const mongoose = require('mongoose');
const Course = require('./models/Course');
const connectDB = require('./config/db'); // Your database connection file

// Define the list of courses with their respective fees
const courses = [
  // Courses Taught
  { name: 'Brain Gym Exercise', category: 'Courses Taught', path: '/brain-gym', fees: 100 },
  { name: 'Brain Mapping', category: 'Courses Taught', path: '/brain-mapping', fees: 200 },
  { name: 'Right Brain Activation', category: 'Courses Taught', path: '/right-brain', fees: 150 },
  { name: 'Memory Techniques', category: 'Courses Taught', path: '/memory-techniques', fees: 180 },
  { name: 'Speed Reading', category: 'Courses Taught', path: '/speed-reading', fees: 120 },
  { name: 'Creative Thinking', category: 'Courses Taught', path: '/creative-thinking', fees: 130 },
  { name: 'Drawing', category: 'Courses Taught', path: '/drawing', fees: 110 },

  // Classes for
  { name: 'Cube Training', category: 'Classes for', path: '/cube-training', fees: 140 },
  { name: 'Advanced Memory Techniques', category: 'Classes for', path: '/advanced-memory-techniques', fees: 160 },
  { name: 'Arts and Crafts', category: 'Classes for', path: '/arts-and-crafts', fees: 150 },

  // Training Type
  { name: 'Classes', category: 'Training Type', path: '/classes', fees: 90 },
  { name: 'Tutorial', category: 'Training Type', path: '/tutorial', fees: 100 },

  // Kids Courses
  { name: 'Abacus', category: 'Kids Courses', path: '/abacus', fees: 80 },
  { name: 'Basic Abacus', category: 'Kids Courses', path: '/basic-abacus', fees: 85 },
  { name: 'Painting', category: 'Kids Courses', path: '/painting', fees: 95 },
];

// Function to seed the courses
const seedCourses = async () => {
  try {
    await connectDB();
    await Course.deleteMany(); // Clear existing courses
    await Course.insertMany(courses); // Insert the new courses
    console.log('Courses seeded successfully');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding courses:', error);
    mongoose.connection.close();
  }
};

seedCourses();
