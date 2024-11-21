

// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const connectDB = require('./config/db');
// const adminRoutes = require('./routes/adminRoutes');
// const staffRoutes = require('./routes/staffRoutes');
// const authRoutes = require('./routes/authRoutes');
// const courseRoutes = require('./routes/courseRoutes');
// const Payment = require('./models/Payment');
// const AdmissionEnquiry = require('./models/AdmissionEnquiry');
// const Admin = require('./models/Admin');
// const Course = require('./models/Course');
// const nodemailer = require('nodemailer');
// const bcrypt = require('bcryptjs');
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
// const multer = require('multer');
// const jwt = require('jsonwebtoken');

// // Load environment variables from .env file
// dotenv.config();

// // Check if required environment variables are set
// if (!process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD || !process.env.ADMIN_USERNAME || !process.env.ADMIN_PASS || !process.env.JWT_SECRET) {
//     console.error('Some credentials are missing in .env file');
//     process.exit(1);
// }

// // Connect to the database
// connectDB();

// // Initialize Express app
// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());
// const upload = multer({ dest: 'uploads/' });

// // Authentication middleware
// const isAuthenticated = (req, res, next) => {
//     const token = req.headers['authorization'];
//     console.log('Token received:', token); // Debugging line to check token reception

//     if (!token) {
//         return res.status(403).json({ message: 'Authorization token required' });
//     }
//     try {
//         // Ensure Bearer token format and JWT_SECRET are used correctly
//         const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
//         console.log('Decoded token:', decoded); // Debugging line to check decoded token
//         req.user = decoded;
//         next();
//     } catch (err) {
//         console.error('Token verification failed:', err.message); // Debugging line to check token verification failure
//         return res.status(401).json({ message: 'Invalid or expired token' });
//     }
// };

// // Configure Nodemailer for sending emails
// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: process.env.ADMIN_EMAIL,
//         pass: process.env.ADMIN_PASSWORD,
//     },
// });

// // Create admin user if it doesn't exist
// const createAdminUser = async () => {
//     try {
//         const email = process.env.ADMIN_USERNAME;
//         const password = process.env.ADMIN_PASS;

//         const existingAdmin = await Admin.findOne({ email });
//         if (existingAdmin) {
//             console.log('Admin user already exists.');
//             return;
//         }

//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(password, salt);

//         const adminUser = new Admin({ email, password: hashedPassword });
//         await adminUser.save();

//         console.log('Admin user created successfully.');
//     } catch (err) {
//         console.error('Error creating admin user:', err.message);
//     }
// };
// createAdminUser();

// // Payment route with email notifications to both user and admin
// app.post('/api/payment', isAuthenticated, async (req, res) => {
//     const { amount, currency = 'inr', paymentMethodId, paymentMethodType = 'card', username } = req.body;

//     if (!amount || !paymentMethodId || !username) {
//         return res.status(400).json({
//             success: false,
//             message: 'Required fields are missing (amount, paymentMethodId, or username)',
//         });
//     }

//     if (amount < 50) {
//         return res.status(400).json({
//             success: false,
//             message: 'Amount must be at least ₹50 to process payment.',
//         });
//     }

//     try {
//         const paymentIntent = await stripe.paymentIntents.create({
//             amount: amount * 100, // Convert to paise for Stripe
//             currency: currency,
//             payment_method: paymentMethodId,
//             confirmation_method: 'automatic',
//             confirm: true,
//             payment_method_types: [paymentMethodType],
//         });

//         const payment = new Payment({
//             amount: paymentIntent.amount / 100,
//             currency: paymentIntent.currency,
//             paymentMethodId,
//             paymentMethodType,
//             status: paymentIntent.status,
//             username,
//         });

//         await payment.save();

//         res.status(200).json({
//             success: true,
//             paymentIntent,
//             message: 'Payment successful and details stored',
//         });
//     } catch (error) {
//         console.error('Error processing payment:', error.message);
//         res.status(500).json({
//             success: false,
//             message: 'Payment failed',
//             error: error.message,
//         });
//     }
// });

// // Admin-only route to view all payments
// app.get('/api/payments', isAuthenticated, async (req, res) => {
//     try {
//         const payments = await Payment.find();
//         res.status(200).json(payments);
//     } catch (error) {
//         console.error('Error fetching payments:', error.message);
//         res.status(500).json({
//             success: false,
//             message: 'Failed to fetch payments',
//             error: error.message,
//         });
//     }
// });

// // Send user reply and notify admin for new enquiry
// const sendUserReply = async (enquiry) => {
//     const { name, email, phone, age, course, standard, message } = enquiry;

//     const userMailOptions = {
//         from: process.env.ADMIN_EMAIL,
//         to: email,
//         subject: 'Enquiry Received',
//         text: `Hi ${name},\n\nThank you for your enquiry! We will get back to you shortly.\n\nBest regards,\nYour Team`,
//     };

//     const adminMailOptions = {
//         from: process.env.ADMIN_EMAIL,
//         to: process.env.ADMIN_EMAIL,
//         subject: 'New Admission Enquiry Received',
//         text: `New enquiry received:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nAge: ${age}\nCourse: ${course.join(', ')}\nStandard: ${standard}\nMessage: ${message}\n\nBest regards,\nYour Team`,
//     };

//     try {
//         await transporter.sendMail(userMailOptions);
//         console.log(`Email sent to user: ${email}`);

//         await transporter.sendMail(adminMailOptions);
//         console.log(`Email sent to admin: ${process.env.ADMIN_EMAIL}`);
//     } catch (error) {
//         console.error('Error sending email:', error.message);
//     }
// };

// // Admission Enquiry route
// app.post('/api/enquiry', async (req, res) => {
//     const { name, email, phone, age, course, standard, message } = req.body;

//     if (!name || !email || !phone || !age || !course || !standard || !message) {
//         return res.status(400).json({ error: 'All fields are required' });
//     }

//     try {
//         const courseNames = await Course.find({ _id: { $in: course } }).select('name -_id');
//         const courseNamesArray = courseNames.map(course => course.name);

//         const newEnquiry = new AdmissionEnquiry({
//             name,
//             email,
//             phone,
//             age,
//             course: courseNamesArray,
//             standard,
//             message,
//         });

//         await newEnquiry.save();
//         await sendUserReply(newEnquiry);

//         res.status(201).json({ message: 'Enquiry submitted successfully', courses: courseNamesArray });
//     } catch (error) {
//         console.error('Error submitting enquiry:', error.message);
//         res.status(500).json({ error: 'Failed to submit enquiry' });
//     }
// });

// // New route to get all enquiries for admin dashboard
// app.get('/api/enquiries', isAuthenticated, async (req, res) => {
//     try {
//         const enquiries = await AdmissionEnquiry.find(); // Fetch all enquiries
//         res.status(200).json(enquiries);
//     } catch (error) {
//         console.error('Error fetching enquiries:', error.message);
//         res.status(500).json({
//             success: false,
//             message: 'Failed to fetch enquiries',
//             error: error.message,
//         });
//     }
// });

// // Routes
// app.use('/api/admin', adminRoutes);
// app.use('/api/auth', authRoutes);
// app.use('/api/staff', staffRoutes);
// app.use('/api/courses', courseRoutes);

// // Error handling middleware
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).json({ error: 'Something went wrong!' });
// });

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });








/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////







// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const connectDB = require('./config/db');
// const adminRoutes = require('./routes/adminRoutes');
// const AdmissionEnquiry = require('./models/AdmissionEnquiry');
// const Course = require('./models/Course');
// const Admin = require('./models/Admin');
// const Payment = require('./models/Payment'); // Import Payment model
// const nodemailer = require('nodemailer');
// const bcrypt = require('bcryptjs');
// const staffRoutes = require('./routes/staffRoutes');
// const auth = require('./routes/authRoutes');
// const loginController = require('./controllers/loginController');
// const courseRoutes = require('./routes/courseRoutes');
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); // Add Stripe
// const enquiriesRouter = require('./routes/enquiry'); 
// dotenv.config(); // Load environment variables from .env file

// // Connect to the database
// connectDB();

// // Initialize Express app
// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json()); // Parse JSON requests

// // Configure Nodemailer for sending emails
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.ADMIN_EMAIL,
//     pass: process.env.ADMIN_PASSWORD,
//   },
// });

// // Function to create an admin user if one doesn't exist
// const createAdminUser = async () => {
//   try {
//     const email = process.env.ADMIN_USERNAME;
//     const password = process.env.ADMIN_PASS;

//     const existingAdmin = await Admin.findOne({ email });
//     if (existingAdmin) {
//       console.log('Admin user already exists.');
//       return;
//     }

//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     const adminUser = new Admin({ email, password: hashedPassword });
//     await adminUser.save();

//     console.log('Admin user created successfully.');
//   } catch (err) {
//     console.error('Error creating admin user:', err.message);
//   }
// };

// // Call the function to create an admin user
// createAdminUser();

// // Function to send a confirmation email to the user
// const sendUserReply = async (enquiry) => {
//   try {
//     const mailOptions = {
//       from: process.env.ADMIN_EMAIL, // Sender address
//       to: enquiry.email, // User's email address
//       subject: 'Enquiry Received - Confirmation',
//       text: `Dear ${enquiry.name},\n\nThank you for your enquiry regarding the course(s): ${enquiry.course.join(', ')}. We will get back to you shortly.\n\nBest regards,\nThe Team`,
//     };

//     await transporter.sendMail(mailOptions); // Send the email
//     console.log(`Confirmation email sent to ${enquiry.email}`);
//   } catch (error) {
//     console.error('Error sending confirmation email:', error.message);
//   }
// };

// // Function to notify the admin of a new enquiry
// // const notifyAdmin = async (enquiry) => {
// //   try {
// //     const mailOptions = {
// //       from: process.env.ADMIN_EMAIL,
// //       to: process.env.ADMIN_EMAIL, // Send to admin
// //       subject: 'New Admission Enquiry',
// //       text: `A new enquiry has been submitted by ${enquiry.name}. Details: \nCourse(s): ${enquiry.course.join(', ')}\nPhone: ${enquiry.phone}\nEmail: ${enquiry.email}\nMessage: ${enquiry.message}`,
// //     };

// //     await transporter.sendMail(mailOptions);
// //     console.log('Admin notified of new enquiry');
// //   } catch (error) {
// //     console.error('Error notifying admin:', error.message);
// //   }
// // };


// // Function to notify the admin of a new enquiry
// const notifyAdmin = async (enquiry) => {
//   try {
//     const mailOptions = {
//       from: process.env.ADMIN_EMAIL,
//       to: process.env.ADMIN_EMAIL, // Send to admin
//       subject: 'New Admission Enquiry',
//       text: `
//         A new enquiry has been submitted by ${enquiry.name}.

//         Details:
//         -------------------------------
//         Name: ${enquiry.name}
//         Email: ${enquiry.email}
//         Phone: ${enquiry.phone}
//         Age: ${enquiry.age}
//         Course(s): ${enquiry.course.join(', ')}
//         Standard: ${enquiry.standard}
//         Message: ${enquiry.message}
//         -------------------------------
        
//         Please review the enquiry and respond accordingly.
//       `,
//     };

//     await transporter.sendMail(mailOptions);
//     console.log('Admin notified of new enquiry');
//   } catch (error) {
//     console.error('Error notifying admin:', error.message);
//   }
// };

// // Stripe payment route with email notifications to both user and admin
// app.post('/api/payment', async (req, res) => {
//   const { amount, currency = 'inr', paymentMethodId, paymentMethodType = 'card' } = req.body;

//   // Log the amount received for debugging
//   console.log('Received payment amount (in rupees):', amount);

//   // Check if the amount is less than the minimum required
//   if (amount < 50) {
//     return res.status(400).json({
//       success: false,
//       message: 'Amount must be at least ₹50 to process payment.',
//     });
//   }

//   try {
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: amount * 100, // Convert to paise for Stripe (1 rupee = 100 paise)
//       currency: currency,
//       payment_method: paymentMethodId,
//       confirmation_method: 'automatic',
//       confirm: true,
//       payment_method_types: [paymentMethodType],
//     });

//     // Save payment details to your database
//     const payment = new Payment({
//       amount: paymentIntent.amount / 100, // Store the amount in rupees
//       currency: paymentIntent.currency,
//       paymentMethodId: paymentMethodId,
//       paymentMethodType: paymentMethodType,
//       status: paymentIntent.status,
//     });

//     await payment.save(); // Save payment to the database

//     console.log('Payment details saved:', payment); // Log saved payment details for debugging

//     res.status(200).json({
//       success: true,
//       paymentIntent,
//       message: 'Payment successful and details stored',
//     });
//   } catch (error) {
//     console.error('Error processing payment:', error.message);
//     res.status(500).json({
//       success: false,
//       message: 'Payment failed',
//       error: error.message,
//     });
//   }
// });

// // Admin-only route to view all payments
// app.get('/api/payments', async (req, res) => {
//   try {
//     const payments = await Payment.find(); // Fetch all payment records
//     res.status(200).json(payments);
//   } catch (error) {
//     console.error('Error fetching payments:', error.message);
//     res.status(500).json({
//       success: false,
//       message: 'Failed to fetch payments',
//       error: error.message,
//     });
//   }
// });

// // Routes
// app.post('/api/login', loginController.login); // User and admin login
// app.use('/api/admin', adminRoutes); // Admin routes
// app.use('/api/auth', auth); // Auth routes
// app.use('/api/staff', staffRoutes); // Staff routes
// app.use('/api/courses', courseRoutes); // Courses route
// app.use('/api/enquiries', enquiriesRouter);
// // Admission Enquiry route
// app.post('/api/enquiry', async (req, res) => {
//   const { name, email, phone, age, course, standard, message } = req.body;

//   // Validate required fields
//   if (!name || !email || !phone || !age || !course || !standard || !message) {
//     return res.status(400).json({ error: 'All fields are required' });
//   }

//   try {
//     // Look up the course names based on ObjectId
//     const courseNames = await Course.find({ _id: { $in: course } }).select('name -_id');
//     const courseNamesArray = courseNames.map(course => course.name);

//     // Create a new Admission Enquiry
//     const newEnquiry = new AdmissionEnquiry({
//       name,
//       email,
//       phone,
//       age,
//       course: courseNamesArray, // Save course names instead of ObjectId
//       standard,
//       message,
//     });

//     // Save the enquiry to the database
//     await newEnquiry.save();

//     // Send user confirmation reply
//     await sendUserReply(newEnquiry); // Ensure this is defined

//     // Notify admin via email
//     await notifyAdmin(newEnquiry); // Ensure this is defined

//     res.status(201).json({ message: 'Enquiry submitted successfully' });
//   } catch (error) {
//     console.error('Error submitting enquiry:', error.message);
//     res.status(500).json({ error: 'Failed to submit enquiry' });
//   }
// });

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////








const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const adminRoutes = require('./routes/adminRoutes');
const AdmissionEnquiry = require('./models/AdmissionEnquiry');
const Course = require('./models/Course');
const Admin = require('./models/Admin');
const Payment = require('./models/Payment'); // Import Payment model
const nodemailer = require('nodemailer');
const bcrypt = require('bcryptjs');
const staffRoutes = require('./routes/staffRoutes');
const auth = require('./routes/authRoutes');
const loginController = require('./controllers/loginController');
const courseRoutes = require('./routes/courseRoutes');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); // Add Stripe
const enquiriesRouter = require('./routes/enquiry'); 
const multer = require('multer');

dotenv.config(); // Load environment variables from .env file

// Connect to the database
connectDB();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON requests

// Configure Nodemailer for sending emails
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.ADMIN_EMAIL,
    pass: process.env.ADMIN_PASSWORD,
  },
});

// Function to create an admin user if one doesn't exist
const createAdminUser = async () => {
  try {
    const email = process.env.ADMIN_USERNAME;
    const password = process.env.ADMIN_PASS;

    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      console.log('Admin user already exists.');
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const adminUser = new Admin({ email, password: hashedPassword });
    await adminUser.save();

    console.log('Admin user created successfully.');
  } catch (err) {
    console.error('Error creating admin user:', err.message);
  }
};

// Call the function to create an admin user
createAdminUser();

// Function to send a confirmation email to the user
const sendUserReply = async (enquiry) => {
  try {
    const mailOptions = {
      from: process.env.ADMIN_EMAIL, // Sender address
      to: enquiry.email, // User's email address
      subject: 'Enquiry Received - Confirmation',
      text: `Dear ${enquiry.name},\n\nThank you for your enquiry regarding the course(s): ${enquiry.course.join(', ')}. We will get back to you shortly.\n\nBest regards,\nThe Team`,
    };

    await transporter.sendMail(mailOptions); // Send the email
    console.log(`Confirmation email sent to ${enquiry.email}`);
  } catch (error) {
    console.error('Error sending confirmation email:', error.message);
  }
};

// Function to notify the admin of a new enquiry
const notifyAdmin = async (enquiry) => {
  try {
    const mailOptions = {
      from: process.env.ADMIN_EMAIL,
      to: process.env.ADMIN_EMAIL, // Send to admin
      subject: 'New Admission Enquiry',
      text: `
        A new enquiry has been submitted by ${enquiry.name}.

        Details:
        -------------------------------
        Name: ${enquiry.name}
        Email: ${enquiry.email}
        Phone: ${enquiry.phone}
        Age: ${enquiry.age}
        Course(s): ${enquiry.course.join(', ')}
        Standard: ${enquiry.standard}
        Message: ${enquiry.message}
        -------------------------------
        
        Please review the enquiry and respond accordingly.
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('Admin notified of new enquiry');
  } catch (error) {
    console.error('Error notifying admin:', error.message);
  }
};

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Directory to save uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Use timestamp to prevent name collisions
  },
});

const upload = multer({ storage });

// Create a router instance
const router = express.Router();

// Add a new course with an image
router.post('/add-course', upload.single('image'), async (req, res) => {
  const { name, fees } = req.body;

  if (!name || !fees || !req.file) {
    return res.status(400).json({ error: 'Name, fees, and image are required' });
  }

  try {
    const newCourse = new Course({
      name,
      fees,
      image: req.file.path, // Save the path of the uploaded image
    });
    await newCourse.save();
    res.status(201).json(newCourse); // Return the newly created course
  } catch (error) {
    console.error('Error adding course:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
});

// Stripe payment route with email notifications to both user and admin
app.post('/api/payment', async (req, res) => {
  const { amount, currency = 'inr', paymentMethodId, paymentMethodType = 'card' } = req.body;

  // Log the amount received for debugging
  console.log('Received payment amount (in rupees):', amount);

  // Check if the amount is less than the minimum required
  if (amount < 50) {
    return res.status(400).json({
      success: false,
      message: 'Amount must be at least ₹50 to process payment.',
    });
  }

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Convert to paise for Stripe (1 rupee = 100 paise)
      currency: currency,
      payment_method: paymentMethodId,
      confirmation_method: 'automatic',
      confirm: true,
      payment_method_types: [paymentMethodType],
    });

    // Save payment details to your database
    const payment = new Payment({
      amount: paymentIntent.amount / 100, // Store the amount in rupees
      currency: paymentIntent.currency,
      paymentMethodId: paymentMethodId,
      paymentMethodType: paymentMethodType,
      status: paymentIntent.status,
    });

    await payment.save(); // Save payment to the database

    console.log('Payment details saved:', payment); // Log saved payment details for debugging

    res.status(200).json({
      success: true,
      paymentIntent,
      message: 'Payment successful and details stored',
    });
  } catch (error) {
    console.error('Error processing payment:', error.message);
    res.status(500).json({
      success: false,
      message: 'Payment failed',
      error: error.message,
    });
  }
});

// Admin-only route to view all payments
app.get('/api/payments', async (req, res) => {
  try {
    const payments = await Payment.find(); // Fetch all payment records
    res.status(200).json(payments);
  } catch (error) {
    console.error('Error fetching payments:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch payments',
      error: error.message,
    });
  }
});

// Routes
app.post('/api/login', loginController.login); // User and admin login
app.use('/api/admin', adminRoutes); // Admin routes
app.use('/api/auth', auth); // Auth routes
app.use('/api/staff', staffRoutes); // Staff routes
app.use('/api/courses', courseRoutes); // Courses route
app.use('/api/enquiries', enquiriesRouter); // Enquiries route

// Admission Enquiry route
app.post('/api/enquiry', async (req, res) => {
  const { name, email, phone, age, course, standard, message } = req.body;

  // Validate required fields
  if (!name || !email || !phone || !age || !course || !standard || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Look up the course names based on ObjectId
    const courseNames = await Course.find({ _id: { $in: course } }).select('name -_id');
    const courseNamesArray = courseNames.map(course => course.name);

    // Create a new Admission Enquiry
    const newEnquiry = new AdmissionEnquiry({
      name,
      email,
      phone,
      age,
      course: courseNamesArray, // Save course names instead of ObjectId
      standard,
      message,
    });

    // Save the enquiry to the database
    await newEnquiry.save();

    // Send user confirmation reply
    await sendUserReply(newEnquiry); // Ensure this is defined

    // Notify admin via email
    await notifyAdmin(newEnquiry); // Ensure this is defined

    res.status(201).json({ message: 'Enquiry submitted successfully' });
  } catch (error) {
    console.error('Error submitting enquiry:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
