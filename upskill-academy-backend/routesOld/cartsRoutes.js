const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart'); // Adjust the path as necessary

// GET all carts
router.get('/', async (req, res) => {
  try {
    const carts = await Cart.find(); // Assuming Cart is your model for carts
    res.status(200).json(carts);
  } catch (error) {
    console.error('Error fetching carts:', error.message);
    res.status(500).json({ success: false, message: 'Failed to fetch carts' });
  }
});

// Add other cart-related routes as needed

module.exports = router;
