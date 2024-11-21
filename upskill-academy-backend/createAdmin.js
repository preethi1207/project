require('dotenv').config(); 
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Admin = require('./models/Admin'); // Adjust the path if necessary

// Function to create an admin user
const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    const username = 'Admin'; // Replace with the desired username
    const password = 'admin1234'; // Replace with the desired password

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new Admin instance
    const admin = new Admin({
      username,
      password: hashedPassword
    });

    // Save the admin user to the database
    await admin.save();
    console.log('Admin user created successfully');
  } catch (error) {
    console.error('Error creating admin user:', error.message);
  } finally {
    mongoose.connection.close();
  }
};

createAdmin();
