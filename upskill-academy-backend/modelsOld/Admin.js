


// const mongoose = require('mongoose');

// const adminSchema = new mongoose.Schema({
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//       },
//   password: {
//     type: String,
//     required: true   // Ensure this field is required
//   }
// });

// module.exports = mongoose.model('Admin', adminSchema);



// const mongoose = require('mongoose');

// const adminSchema = new mongoose.Schema({
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//     match: [/.+\@.+\..+/, 'Please fill a valid email address'], // Email format validation
//   },
//   password: {
//     type: String,
//     required: true, // Ensure this field is required
//   }
// });

// module.exports = mongoose.model('Admin', adminSchema);






// const mongoose = require('mongoose');

// const adminSchema = new mongoose.Schema({
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//     match: [/.+\@.+\..+/, 'Please fill a valid email address'], // Email format validation
//   },
//   password: {
//     type: String,
//     required: true, // Ensure this field is required
//   },
// });

// module.exports = mongoose.model('Admin', adminSchema);







const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    refreshToken: { type: String } // Field for refresh token
});

module.exports = mongoose.model('Admin', adminSchema);
