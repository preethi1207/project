// const mongoose = require('mongoose');
// const Course = require('./models/Course'); // Adjust the path based on your structure

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/upskill_academy', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Define the new fees for each course
// const staticCourses = {
//   'Courses Taught': [
//     { name: "Brain Gym Exercise", fees: 800 }, // Increase by ₹600
//     { name: "Brain Mapping", fees: 850 }, // Increase by ₹600
//     { name: "Right Brain Activation", fees: 900 }, // Increase by ₹600
//     { name: "Memory Techniques", fees: 750 }, // Increase by ₹600
//     { name: "Speed Reading", fees: 780 }, // Increase by ₹600
//     { name: "Creative Thinking", fees: 820 }, // Increase by ₹600
//     { name: "Drawing", fees: 720 }, // Increase by ₹600
//   ],
//   'Classes for': [
//     { name: "Cube Training", fees: 800 }, // Increase by ₹600
//     { name: "Advanced Memory Techniques", fees: 850 }, // Increase by ₹600
//     { name: "Arts and Crafts", fees: 750 }, // Increase by ₹600
//   ],
//   'Training Type': [
//     { name: "Classes", fees: 700 }, // Increase by ₹600
//     { name: "Tutorial", fees: 780 }, // Increase by ₹600
//   ],
//   'Kids Courses': [
//     { name: "Abacus", fees: 1000 }, // Set to ₹1000
//     { name: "Basic Abacus", fees: 1000 }, // Set to ₹1000
//     { name: "Painting", fees: 720 }, // Increase by ₹600
//   ],
// };

// async function updateCourseFees() {
//   try {
//     for (const category in staticCourses) {
//       for (const course of staticCourses[category]) {
//         await Course.findOneAndUpdate(
//           { name: course.name },
//           { fees: course.fees }, // Update fees
//           { new: true }
//         );
//       }
//     }
//     console.log('Course fees updated successfully');
//   } catch (error) {
//     console.error('Error updating course fees:', error);
//   } finally {
//     mongoose.connection.close(); // Close the connection
//   }
// }

// updateCourseFees();







const mongoose = require('mongoose');
const Course = require('./models/Course'); // Adjust the path based on your structure

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/upskill_academy', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define the new fees for each course
const staticCourses = {
  'Courses Taught': [
    { name: "Brain Gym Exercise", fees: 800 }, // Increase by ₹600
    { name: "Brain Mapping", fees: 850 }, // Increase by ₹600
    { name: "Right Brain Activation", fees: 900 }, // Increase by ₹600
    { name: "Memory Techniques", fees: 750 }, // Increase by ₹600
    { name: "Speed Reading", fees: 780 }, // Increase by ₹600
    { name: "Creative Thinking", fees: 820 }, // Increase by ₹600
    { name: "Drawing", fees: 720 }, // Increase by ₹600
  ],
  'Classes for': [
    { name: "Cube Training", fees: 800 }, // Increase by ₹600
    { name: "Advanced Memory Techniques", fees: 850 }, // Increase by ₹600
    { name: "Arts and Crafts", fees: 750 }, // Increase by ₹600
  ],
  
  'New Courses': [  // New category for Summer Camp
    { name: "Summer Camp", fees: 4999 } // Add the Summer Camp course with fees
  ]
};

async function updateCourseFees() {
  try {
    for (const category in staticCourses) {
      for (const course of staticCourses[category]) {
        await Course.findOneAndUpdate(
          { name: course.name },
          { fees: course.fees }, // Update fees
          { new: true, upsert: true } // Use upsert to add new courses if they don't exist
        );
      }
    }
    console.log('Course fees updated successfully');
  } catch (error) {
    console.error('Error updating course fees:', error);
  } finally {
    mongoose.connection.close(); // Close the connection
  }
}

updateCourseFees();
