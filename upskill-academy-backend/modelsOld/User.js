
// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   role: {
//     type: String,
//     enum: ['user', 'admin'], // Enum to define valid roles
//     default: 'user', // Default role is 'user'
//   },
// });

// const User = mongoose.model('User', userSchema);

// module.exports = User;









// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//     match: [/.+\@.+\..+/, 'Please fill a valid email address'], // Email format validation
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   role: {
//     type: String,
//     enum: ['user', 'admin'], // Enum to define valid roles
//     default: 'user', // Default role is 'user'
//   },
// });

// const User = mongoose.model('User', userSchema);

// module.exports = User;











// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('User', UserSchema);
