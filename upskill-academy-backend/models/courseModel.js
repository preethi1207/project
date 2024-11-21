// // models/courseModel.js
// const mongoose = require('mongoose');

// const courseSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         required: true,
//     },
//     description: {
//         type: String,
//         required: true,
//     },
//     imageUrl: {
//         type: String,
//         required: true,
//     },
//     price: {
//         type: Number,
//         required: true,
//     },
//     duration: {
//         type: String,
//         required: true,
//     }
// });

// module.exports = mongoose.models.Course || mongoose.model('Course', courseSchema);











// const mongoose = require('mongoose');

// // Define schema
// const courseSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   duration: {
//     type: String,
//     required: true,
//   },
//   imageUrl: {
//     type: String,
//   },
// });

// // Use try-catch to handle any potential errors
// let Course;
// try {
//   Course = mongoose.model('Course');
// } catch (error) {
//   Course = mongoose.model('Course', courseSchema);
// }

// module.exports = Course;






const mongoose = require('mongoose');

// Define schema
const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
});

// Use try-catch to handle model overwrite error during hot reloads
let Course;
try {
  Course = mongoose.model('Course');
} catch (error) {
  Course = mongoose.model('Course', courseSchema);
}

module.exports = Course;
