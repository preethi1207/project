// const express = require('express');
// const router = express.Router();
// const AdmissionEnquiry = require('../models/AdmissionEnquiry');
// const Course = require('../models/Course');

// // POST Route: To handle admission enquiries and save the course details with fees
// router.post('/enquiry', async (req, res) => {
//   const { name, email, phone, age, course, standard, message } = req.body;

//   try {
//     // Fetch courses from the database with matching names
//     const selectedCourses = await Course.find({ name: { $in: course } });

//     // Check if any course is missing or not found in the database
//     if (selectedCourses.length !== course.length) {
//       return res.status(400).json({ message: 'Some selected courses were not found' });
//     }

//     // Create a new admission enquiry with course details (name and fees)
//     const enquiry = new AdmissionEnquiry({
//       name,
//       email,
//       phone,
//       age,
//       course: selectedCourses.map(course => ({
//         name: course.name,
//         fees: course.fees,
//       })),
//       standard,
//       message,
//     });

//     // Save the enquiry to the database
//     await enquiry.save();
//     res.status(201).json({ message: 'Enquiry submitted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error submitting enquiry', error: error.message });
//   }
// });

// // GET Route: To fetch all enquiries along with the selected course names and fees
// router.get('/enquiries', async (req, res) => {
//   try {
//     const enquiries = await AdmissionEnquiry.find();
//     res.status(200).json(enquiries);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching enquiries', error: error.message });
//   }
// });

// module.exports = router;



// backend/routes/enquiries.js

// const express = require('express');
// const router = express.Router();
// const AdmissionEnquiry = require('../models/AdmissionEnquiry');
// const Course = require('../models/Course');

// // POST Route: To handle admission enquiries and save the course details with fees
// router.post('/enquiry', async (req, res) => {
//   const { name, email, phone, age, course, standard, message } = req.body;

//   try {
//     // Fetch courses from the database with matching names
//     const selectedCourses = await Course.find({ name: { $in: course } });

//     // Check if any course is missing or not found in the database
//     if (selectedCourses.length !== course.length) {
//       return res.status(400).json({ message: 'Some selected courses were not found' });
//     }

//     // Create a new admission enquiry with course details (name and fees)
//     const enquiry = new AdmissionEnquiry({
//       name,
//       email,
//       phone,
//       age,
//       course: selectedCourses.map(course => ({
//         name: course.name,
//         fees: course.fees, // Store course fees
//       })),
//       standard,
//       message,
//     });

//     // Save the enquiry to the database
//     await enquiry.save();
//     res.status(201).json({ message: 'Enquiry submitted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error submitting enquiry', error: error.message });
//   }
// });

// // GET Route: To fetch all enquiries along with the selected course names and fees
// router.get('/enquiries', async (req, res) => {
//   try {
//     const enquiries = await AdmissionEnquiry.find().populate('course'); // Populate the course field with details
//     res.status(200).json(enquiries);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching enquiries', error: error.message });
//   }
// });

// module.exports = router;




// const express = require('express');
// const router = express.Router();
// const AdmissionEnquiry = require('../models/AdmissionEnquiry');
// const Course = require('../models/Course');

// // POST Route: To handle admission enquiries and save the course details with fees
// router.post('/enquiry', async (req, res) => {
//     const { name, email, phone, age, course, standard, message } = req.body;

//     try {
//         const selectedCourses = await Course.find({ name: { $in: course } });

//         if (selectedCourses.length !== course.length) {
//             return res.status(400).json({ message: 'Some selected courses were not found' });
//         }

//         const enquiry = new AdmissionEnquiry({
//             name,
//             email,
//             phone,
//             age,
//             course: selectedCourses.map((course) => ({
//                 name: course.name,
//                 fees: course.fees
//             })),
//             standard,
//             message,
//         });

//         await enquiry.save();
//         res.status(201).json({ message: 'Enquiry submitted successfully' });
//     } catch (error) {
//         res.status(500).json({ message: 'Error submitting enquiry', error: error.message });
//     }
// });

// // GET Route: To fetch all enquiries
// router.get('/', async (req, res) => {
//     try {
//         const enquiries = await AdmissionEnquiry.find();
//         res.status(200).json(enquiries);
//     } catch (error) {
//         res.status(500).json({ message: 'Error fetching enquiries', error: error.message });
//     }
// });

// module.exports = router;


// routes/enquiryRoutes.js or similar file

router.post('/enquiry', async (req, res) => {
  const { name, email, phone, age, course, standard, message } = req.body;

  try {
      const selectedCourses = await Course.find({ name: { $in: course } });

      if (selectedCourses.length !== course.length) {
          return res.status(400).json({ message: 'Some selected courses were not found' });
      }

      const enquiry = new AdmissionEnquiry({
          name,
          email,
          phone,
          age,
          course: selectedCourses.map((course) => ({
              name: course.name,
              fees: course.fees
          })),
          standard,
          message,
      });

      await enquiry.save();
      await sendUserReply(enquiry); // Send a reply to the user
      res.status(201).json({ message: 'Enquiry submitted successfully' });
  } catch (error) {
      console.error('Error submitting enquiry:', error.message);
      res.status(500).json({ message: 'Error submitting enquiry', error: error.message });
  }
});
