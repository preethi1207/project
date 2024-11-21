// const express = require('express');
// const AdmissionEnquiry = require('../models/AdmissionEnquiry');

// const router = express.Router();

// router.post('/enquiry', async (req, res) => {
//   const { name, email, message } = req.body;

//   try {
//     const enquiry = new AdmissionEnquiry({ name, email, message });
//     await enquiry.save();
//     res.status(201).json({ message: 'Enquiry submitted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// module.exports = router;
// const express = require('express');
// const AdmissionEnquiry = require('../models/AdmissionEnquiry');

// const router = express.Router();

// router.post('/enquiry', async (req, res) => {
//   const { name, email, phone, age, course, standard, message } = req.body;

//   try {
//     // Create a new admission enquiry with all the fields
//     const enquiry = new AdmissionEnquiry({
//       name,
//       email,
//       phone,
//       age,
//       course,
//       standard,
//       message
//     });

//     // Save the enquiry to the database
//     await enquiry.save();

//     // Send a success response
//     res.status(201).json({ message: 'Enquiry submitted successfully' });
//   } catch (error) {
//     console.error('Error submitting enquiry:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });





// router.post('/enquiry', async (req, res) => {
//   const { name, email, phone, age, course, standard, message } = req.body;

//   console.log("Received data:", req.body); // Log the received data

//   try {
//     const enquiry = new AdmissionEnquiry({ name, email, phone, age, course, standard, message });
//     await enquiry.save();
//     console.log("Enquiry saved successfully"); // Log successful save
//     res.status(201).json({ message: 'Enquiry submitted successfully' });
//   } catch (error) {
//     console.error('Error saving enquiry:', error); // Log error if save fails
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// module.exports = router;



const express = require('express');
const router = express.Router();
const AdmissionEnquiry = require('../models/AdmissionEnquiry');
const Course = require('../models/Course');

// POST Route: To handle admission enquiries and save the course details with fees
router.post('/enquiry', async (req, res) => {
  const { name, email, phone, age, course, standard, message } = req.body;

  try {
    // Fetch courses from the database with matching names
    const selectedCourses = await Course.find({ name: { $in: course } });

    // Check if any course is missing or not found in the database
    if (selectedCourses.length !== course.length) {
      return res.status(400).json({ message: 'Some selected courses were not found' });
    }

    // Create a new admission enquiry with course details (name and fees)
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

    // Save the enquiry to the database
    await enquiry.save();
    res.status(201).json({ message: 'Enquiry submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting enquiry', error: error.message });
  }
});

// GET Route: To fetch all enquiries along with the selected course names and fees
router.get('/enquiries', async (req, res) => {
  try {
    const enquiries = await AdmissionEnquiry.find();

    // Return the enquiries along with course details
    res.status(200).json(enquiries);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching enquiries', error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Enquiry.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).send({ error: 'Enquiry not found' });
        }
        res.send({ message: 'Enquiry deleted successfully' });
    } catch (error) {
        console.error('Error deleting enquiry:', error); // Log for debugging
        res.status(500).send({ error: 'Failed to delete enquiry' });
    }
});
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
      const result = await AdmissionEnquiry.findByIdAndDelete(id);
      if (!result) {
          return res.status(404).send({ error: 'Enquiry not found' });
      }
      res.send({ message: 'Enquiry deleted successfully' });
  } catch (error) {
      console.error('Error deleting enquiry:', error); // Log for debugging
      res.status(500).send({ error: 'Failed to delete enquiry' });
  }
});


module.exports = router;
