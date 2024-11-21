// controllers/enquiryController.js
const Enquiry = require('../models/Enquiry');

exports.createEnquiry = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newEnquiry = new Enquiry({ name, email, message });
    await newEnquiry.save();
    res.json(newEnquiry);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getEnquiries = async (req, res) => {
  try {
      const enquiries = await AdmissionEnquiry.find(); // Make sure this fetches all enquiries
      res.json(enquiries);
  } catch (err) {
      console.error('Error fetching enquiries:', err.message);
      res.status(500).send('Server error');
  }
};
