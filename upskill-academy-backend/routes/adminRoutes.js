const express = require('express');
const router = express.Router();
const Course = require('../models/Course');
const Staff = require('../models/Staff');
const Admin = require('../models/Admin');
const { verifyAdminToken } = require('../middleware/verifyAdminToken');
const multer = require('multer');
const path = require('path');
// Apply middleware to protect all routes
router.use(verifyAdminToken);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// // Course Routes
// router.get('/get-courses', async (req, res) => {
//   try {
//     const courses = await Course.find();
//     res.json(courses);
//   } catch (error) {
//     console.error('Error fetching courses:', error.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

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

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/'); // Specify the uploads directory
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname)); // Append timestamp to filename
//   },
// });


//////////////////////////////////////////////////////////////



// Get all courses
router.get('/get-courses', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    console.error('Error fetching courses:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
});

// Add a new course
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
    console.error('Error adding course:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update a course
router.put('/update-course/:courseId', async (req, res) => {
  const { courseId } = req.params;
  const updatedData = req.body;

  try {
    const updatedCourse = await Course.findByIdAndUpdate(courseId, updatedData, { new: true });
    if (!updatedCourse) return res.status(404).json({ error: 'Course not found' });
    res.json(updatedCourse);
  } catch (error) {
    console.error('Error updating course:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete a course
router.delete('/delete-course/:courseId', async (req, res) => {
  const { courseId } = req.params;

  try {
    const deletedCourse = await Course.findByIdAndDelete(courseId);
    if (!deletedCourse) return res.status(404).json({ error: 'Course not found' });
    res.json({ message: 'Course deleted successfully' });
  } catch (error) {
    console.error('Error deleting course:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
});


//const upload = multer({ storage });

// // Course Routes
// router.get('/', async (req, res) => {
//   try {
//     const courses = await Course.find();
//     res.json(courses);
//   } catch (error) {
//     console.error('Error fetching courses:', error.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// router.post('/add-course', upload.single('image'), async (req, res) => {
//   const { name, fees } = req.body;
//   const image = req.file ? req.file.path : null;

//   if (!name || !fees) {
//     return res.status(400).json({ error: 'Name and fees are required' });
//   }

//   try {
//     const newCourse = new Course({ name, fees, image });
//     await newCourse.save();
//     res.status(201).json(newCourse);
//   } catch (error) {
//     console.error('Error adding course:', error.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// router.put('/update-course/:courseId', upload.single('image'), async (req, res) => {
//   const { courseId } = req.params;
//   const updatedData = req.body;
//   if (req.file) {
//     updatedData.image = req.file.path; // Update the image path if a new file is uploaded
//   }

//   try {
//     const updatedCourse = await Course.findByIdAndUpdate(courseId, updatedData, { new: true });
//     if (!updatedCourse) return res.status(404).json({ error: 'Course not found' });
//     res.json(updatedCourse);
//   } catch (error) {
//     console.error('Error updating course:', error.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

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






// Staff Routes
router.get('/get-staff', async (req, res) => {
  try {
    const staff = await Staff.find();
    res.json(staff);
  } catch (error) {
    console.error('Error fetching staff:', error.message);
    res.status(500).json({ error: 'Server error' });
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
    console.error('Error adding staff:', error.message);
    res.status(500).json({ error: 'Server error' });
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
    console.error('Error updating staff:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
});

router.delete('/delete-staff/:staffId', async (req, res) => {
  const { staffId } = req.params;

  try {
    const deletedStaff = await Staff.findByIdAndDelete(staffId);
    if (!deletedStaff) return res.status(404).json({ error: 'Staff not found' });
    res.json({ message: 'Staff deleted successfully' });
  } catch (error) {
    console.error('Error deleting staff:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
});



router.get('/get-admins', async (req, res) => {
  try {
    const admins = await Admin.find();
    res.json(admins);
  } catch (error) {
    console.error('Error fetching admins:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
});

router.post('/add-admin', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
    const newAdmin = new Admin({ email, password });
    await newAdmin.save();
    res.status(201).json(newAdmin);
  } catch (error) {
    console.error('Error adding admin:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
});

router.put('/update-admin/:adminId', async (req, res) => {
  const { adminId } = req.params;
  const updatedData = req.body;

  try {
    const updatedAdmin = await Admin.findByIdAndUpdate(adminId, updatedData, { new: true });
    if (!updatedAdmin) return res.status(404).json({ error: 'Admin not found' });
    res.json(updatedAdmin);
  } catch (error) {
    console.error('Error updating admin:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
});

router.delete('/delete-admin/:adminId', async (req, res) => {
  const { adminId } = req.params;

  try {
    const deletedAdmin = await Admin.findByIdAndDelete(adminId);
    if (!deletedAdmin) return res.status(404).json({ error: 'Admin not found' });
    res.json({ message: 'Admin deleted successfully' });
  } catch (error) {
    console.error('Error deleting admin:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
});


const AdmissionEnquiry = require('../models/AdmissionEnquiry');

// Fetch all admission enquiries with pagination
router.get('/get-enquiries', async (req, res) => {
  const { page = 1, limit = 10 } = req.query; // Default values

  try {
    // Calculate the number of documents to skip based on page and limit
    const skip = (page - 1) * limit;

    // Fetch enquiries with pagination
    const enquiries = await AdmissionEnquiry.find()
      .skip(skip)
      .limit(parseInt(limit))
      .populate('course.name'); // Assuming 'course' is an ObjectId in AdmissionEnquiry

    // Get total number of enquiries for pagination info
    const totalEnquiries = await AdmissionEnquiry.countDocuments();

    res.status(200).json({
      total: totalEnquiries,
      currentPage: page,
      totalPages: Math.ceil(totalEnquiries / limit),
      enquiries,
    });
  } catch (error) {
    console.error('Error fetching admission enquiries:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
});

// Add a new admission enquiry (for demonstration purposes, can be done on the frontend)
router.post('/add-enquiry', async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const newEnquiry = new AdmissionEnquiry({ name, email, phone, message });
    await newEnquiry.save();
    res.status(201).json(newEnquiry);
  } catch (error) {
    console.error('Error adding admission enquiry:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
});

// // Delete an admission enquiry
// router.delete('/delete-enquiry/:enquiryId', async (req, res) => {
//   const { enquiryId } = req.params;

//   try {
//     const deletedEnquiry = await AdmissionEnquiry.findByIdAndDelete(enquiryId);
//     if (!deletedEnquiry) return res.status(404).json({ error: 'Enquiry not found' });
//     res.json({ message: 'Enquiry deleted successfully' });
//   } catch (error) {
//     console.error('Error deleting admission enquiry:', error.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// });


router.delete('/delete-enquiry/:enquiryId', async (req, res) => {
  const { enquiryId } = req.params;

  try {
    // Find and delete the enquiry by ID
    const deletedEnquiry = await AdmissionEnquiry.findByIdAndDelete(enquiryId);
    
    if (!deletedEnquiry) {
      // If the enquiry does not exist, send a 404 status
      return res.status(404).json({ error: 'Enquiry not found' });
    }

    // Respond with a success message
    res.json({ message: 'Enquiry deleted successfully' });
  } catch (error) {
    console.error('Error deleting admission enquiry:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
});




module.exports = router;
