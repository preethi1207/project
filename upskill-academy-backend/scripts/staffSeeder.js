// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const Staff = require('../models/Staff'); // Import your Staff model

// dotenv.config(); // Load environment variables from .env file

// // Connect to MongoDB
// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('Connected to MongoDB'))
// .catch(err => {
//   console.error('Error connecting to MongoDB:', err.message);
//   process.exit(1); // Exit with failure
// });

// // List of existing staff members to be added
// const staffList = [
//   {
//     name: "Dharani",
//     degree: "MSc",
//     courses: [
//       { name: "Brain Gym Exercise", session: "Forenoon" },
//       { name: "Memory Techniques", session: "Afternoon" },
//     ],
//   },
//   {
//     name: "Kalaivani",
//     degree: "MCA",
//     courses: [
//       { name: "Creative Thinking", session: "Forenoon" },
//       { name: "Right Brain Activation", session: "Afternoon" },
//     ],
//   },
//   // Add more staff members as needed
// ];

// // Function to insert the staff list into the database
// const addStaffMembers = async () => {
//   try {
//     // Insert multiple documents at once
//     await Staff.insertMany(staffList);
//     console.log('Staff members added successfully.');
//     process.exit(); // Exit after successful insertion
//   } catch (error) {
//     console.error('Error adding staff members:', error.message);
//     process.exit(1); // Exit with failure
//   }
// };

// // Call the function to add staff members
// addStaffMembers();


const mongoose = require('mongoose');
const dotenv = require('dotenv');

const Staff = require('../models/Staff'); // Import your Staff model

dotenv.config(); // Load environment variables from .env file

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { // Use MONGO_URI instead of MONGODB_URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => {
  console.error('Error connecting to MongoDB:', err.message);
  process.exit(1); // Exit with failure
});

// List of existing staff members to be added
const staffList = [
  {
    name: "Dharani",
    degree: "MSc",
    courses: [
      { name: "Brain Gym Exercise", session: "Forenoon" },
      { name: "Memory Techniques", session: "Afternoon" },
    ],
  },
  {
    name: "Kalaivani",
    degree: "MCA",
    courses: [
      { name: "Creative Thinking", session: "Forenoon" },
      { name: "Right Brain Activation", session: "Afternoon" },
    ],
  },
  // Add more staff members as needed
];

// Function to insert the staff list into the database
const addStaffMembers = async () => {
  try {
    // Insert multiple documents at once
    await Staff.insertMany(staffList);
    console.log('Staff members added successfully.');
    process.exit(); // Exit after successful insertion
  } catch (error) {
    console.error('Error adding staff members:', error.message);
    process.exit(1); // Exit with failure
  }
};

// Call the function to add staff members
addStaffMembers();
