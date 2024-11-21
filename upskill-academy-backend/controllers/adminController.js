





// const Admin = require('../models/Admin'); // Admin model
// const bcrypt = require('bcryptjs'); // For password hashing
// const jwt = require('jsonwebtoken'); // For generating JWT tokens

// // Load environment variables
// const JWT_SECRET = process.env.JWT_SECRET; // JWT secret for token generation

// // Controller to add a new admin
// const addAdmin = async (req, res) => {
//   const { email, password } = req.body;

//   // Validate the request
//   if (!email || !password) {
//     return res.status(400).json({ message: 'Email and password are required' });
//   }

//   try {
//     // Check if the admin already exists
//     const existingAdmin = await Admin.findOne({ email });
//     if (existingAdmin) {
//       return res.status(400).json({ message: 'Admin with this email already exists' });
//     }

//     // Hash the password before saving
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     // Create a new admin
//     const newAdmin = new Admin({
//       email,
//       password: hashedPassword,
//     });

//     // Save the admin to the database
//     await newAdmin.save();

//     res.status(201).json({ message: 'Admin added successfully', admin: newAdmin });
//   } catch (error) {
//     console.error('Error adding admin:', error.message);
//     res.status(500).json({ message: 'Error adding admin', error: error.message });
//   }
// };

// // Controller to authenticate an admin and provide a JWT token
// const loginAdmin = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Find the admin by email
//     const admin = await Admin.findOne({ email });
//     if (!admin) {
//       return res.status(400).json({ message: 'Invalid email or password' });
//     }

//     // Compare the provided password with the stored hashed password
//     const isMatch = await bcrypt.compare(password, admin.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid email or password' });
//     }

//     // Generate a JWT token
//     const token = jwt.sign({ id: admin._id }, JWT_SECRET, { expiresIn: '1h' });

//     res.status(200).json({ token, message: 'Login successful' });
//   } catch (error) {
//     console.error('Error logging in:', error.message);
//     res.status(500).json({ message: 'Error logging in', error: error.message });
//   }
// };

// // Controller to fetch all admins
// const getAllAdmins = async (req, res) => {
//   try {
//     // Find all admins in the database
//     const admins = await Admin.find();
//     res.status(200).json(admins);
//   } catch (error) {
//     console.error('Error fetching admins:', error.message);
//     res.status(500).json({ message: 'Error fetching admins', error: error.message });
//   }
// };

// module.exports = {
//   addAdmin,
//   loginAdmin,
//   getAllAdmins,
// };















const Course = require('../models/Course'); // Your Course model
const Staff = require('../models/Staff'); // Your Staff model

// Get data for admin dashboard
const getAdminData = async (req, res) => {
  try {
    const courses = await Course.find();
    const staff = await Staff.find();
    res.json({ courses, staff });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Error fetching data', error: error.message });
  }
};

// Add a new course
const addCourse = async (req, res) => {
  const { name } = req.body;

  // Validation check
  if (!name) {
    return res.status(400).json({ message: 'Course name is required' });
  }

  try {
    const newCourse = new Course({ name });
    await newCourse.save();
    res.status(201).json(newCourse);
  } catch (error) {
    console.error('Error adding course:', error);
    res.status(500).json({ message: 'Error adding course', error: error.message });
  }
};

// Update a course
const updateCourse = async (req, res) => {
  const { courseId } = req.params;
  const updatedData = req.body;

  try {
    const updatedCourse = await Course.findByIdAndUpdate(courseId, updatedData, { new: true });
    if (!updatedCourse) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.json(updatedCourse);
  } catch (error) {
    console.error('Error updating course:', error);
    res.status(500).json({ message: 'Error updating course', error: error.message });
  }
};

// Delete a course
const deleteCourse = async (req, res) => {
  const { courseId } = req.params;

  try {
    const course = await Course.findByIdAndDelete(courseId);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting course:', error);
    res.status(500).json({ message: 'Error deleting course', error: error.message });
  }
};

// Add a new staff member
const addStaff = async (req, res) => {
  const { name, degree, courses } = req.body;

  // Validation check
  if (!name || !degree) {
    return res.status(400).json({ message: 'Name and degree are required' });
  }

  try {
    const newStaff = new Staff({ name, degree, courses });
    await newStaff.save();
    res.status(201).json(newStaff);
  } catch (error) {
    console.error('Error adding staff:', error);
    res.status(500).json({ message: 'Error adding staff', error: error.message });
  }
};

// Update a staff member
const updateStaff = async (req, res) => {
  const { staffId } = req.params;
  const updatedData = req.body;

  try {
    const updatedStaff = await Staff.findByIdAndUpdate(staffId, updatedData, { new: true });
    if (!updatedStaff) {
      return res.status(404).json({ message: 'Staff member not found' });
    }
    res.json(updatedStaff);
  } catch (error) {
    console.error('Error updating staff:', error);
    res.status(500).json({ message: 'Error updating staff', error: error.message });
  }
};

// Delete a staff member
const deleteStaff = async (req, res) => {
  const { staffId } = req.params;

  try {
    const staff = await Staff.findByIdAndDelete(staffId);
    if (!staff) {
      return res.status(404).json({ message: 'Staff member not found' });
    }
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting staff:', error);
    res.status(500).json({ message: 'Error deleting staff', error: error.message });
  }
};

module.exports = {
  getAdminData,
  addCourse,
  updateCourse,
  deleteCourse,
  addStaff,
  updateStaff,
  deleteStaff
};
