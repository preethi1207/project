



const mongoose = require('mongoose');

// Define the AdmissionEnquiry schema
const admissionEnquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  age: { type: Number, required: true },
  course: [{ type: String, required: true }], // Change to array of strings
  standard: { type: String, required: true },
  message: { type: String, required: true },
}, { timestamps: true });

const AdmissionEnquiry = mongoose.model('AdmissionEnquiry', admissionEnquirySchema);

module.exports = AdmissionEnquiry;
