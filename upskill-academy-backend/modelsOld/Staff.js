// const mongoose = require('mongoose');

// const staffSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   degree: { type: String },
//   courses: [{ name: String, session: String }],
// });

// const Staff = mongoose.model('Staff', staffSchema);
// module.exports = Staff;


const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
});

const Staff = mongoose.model('Staff', staffSchema);
module.exports = Staff;
