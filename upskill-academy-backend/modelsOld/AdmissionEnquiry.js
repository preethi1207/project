
// const mongoose = require('mongoose');

// // Define the AdmissionEnquiry schema
// const admissionEnquirySchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: {
//     type: String,
//     required: true,
//     match: [/.+\@.+\..+/, 'Please fill a valid email address'], // Email format validation
//   },
//   phone: {
//     type: String,
//     required: true,
//     match: [/^\d{10}$/, 'Please enter a valid 10-digit phone number'], // Phone number format validation
//   },
//   age: { type: Number, required: true },
//   course: [{ type: String, required: true }], // Change to array of strings
//   standard: { type: String, required: true },
//   message: { type: String, required: true },
// }, { timestamps: true });

// const AdmissionEnquiry = mongoose.model('AdmissionEnquiry', admissionEnquirySchema);

// module.exports = AdmissionEnquiry;




// backend/models/AdmissionEnquiry.js



// const mongoose = require('mongoose');

// // Define the AdmissionEnquiry schema
// const admissionEnquirySchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: {
//     type: String,
//     required: true,
//     match: [/.+\@.+\..+/, 'Please fill a valid email address'], // Email format validation
//   },
//   phone: {
//     type: String,
//     required: true,
//     match: [/^\d{10}$/, 'Please enter a valid 10-digit phone number'], // Phone number format validation
//   },
//   age: { type: Number, required: true },
//   course: [{ 
//     name: { type: String, required: true }, // Store course names
//     fees: { type: Number, required: true }  // Store fees
//   }],
//   standard: { type: String, required: true },
//   message: { type: String, required: true },
// }, { timestamps: true });

// const AdmissionEnquiry = mongoose.model('AdmissionEnquiry', admissionEnquirySchema);

// module.exports = AdmissionEnquiry;




// models/AdmissionEnquiry.js
const mongoose = require('mongoose');

// Define the AdmissionEnquiry schema
const admissionEnquirySchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: {
        type: String,
        required: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address'], // Email format validation
    },
    phone: {
        type: String,
        required: true,
        match: [/^\d{10}$/, 'Please enter a valid 10-digit phone number'], // Phone number format validation
    },
    age: { type: Number, required: true },
    course: [{ 
        name: { type: String, required: true }, // Store course names
        fees: { type: Number, required: true }  // Store fees
    }],
    standard: { type: String, required: true },
    message: { type: String, required: true },
}, { timestamps: true });

const AdmissionEnquiry = mongoose.model('AdmissionEnquiry', admissionEnquirySchema);

module.exports = AdmissionEnquiry;
