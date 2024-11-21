
// src/controllers/staffController.js
const Staff = require('../models/Staff'); // Adjust the path as necessary

// Get all staff
exports.getAllStaff = async (req, res) => {
  try {
    const staffMembers = await Staff.find();
    res.json(staffMembers);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching staff' });
  }
};

// Add new staff
exports.addStaff = async (req, res) => {
  try {
    const { name, role } = req.body;
    const newStaff = new Staff({ name, role });
    await newStaff.save();
    res.json(newStaff);
  } catch (error) {
    res.status(500).json({ error: 'Error adding staff' });
  }
};

// Update staff
exports.updateStaff = async (req, res) => {
  try {
    const updatedStaff = await Staff.findByIdAndUpdate(
      req.params.id,
      { name: req.body.name, role: req.body.role },
      { new: true }
    );
    res.json(updatedStaff);
  } catch (error) {
    res.status(500).json({ error: 'Error updating staff' });
  }
};

// Delete staff
exports.deleteStaff = async (req, res) => {
  try {
    await Staff.findByIdAndDelete(req.params.id);
    res.json({ message: 'Staff member deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting staff' });
  }
};
