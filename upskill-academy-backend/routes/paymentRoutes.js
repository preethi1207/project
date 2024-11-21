// // src/routes/paymentRoutes.js
// const express = require('express');
// const router = express.Router();
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
// const Payment = require('../models/Payment');
// const nodemailer = require('nodemailer');

// // Payment route
// router.post('/', async (req, res) => {
//   const { amount, currency = 'inr', paymentMethodId, paymentMethodType = 'card', userEmail, userName, courses } = req.body;

//   if (amount < 50) {
//     return res.status(400).json({ success: false, message: 'Amount must be at least ₹50 to process payment.' });
//   }

//   try {
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: amount * 100, // Convert to paise
//       currency: currency,
//       payment_method: paymentMethodId,
//       confirmation_method: 'automatic',
//       confirm: true,
//       payment_method_types: [paymentMethodType],
//     });

//     const payment = new Payment({
//       userName,
//       userEmail,
//       amount: paymentIntent.amount / 100, // Store the amount in rupees
//       status: paymentIntent.status,
//       courses,
//     });

//     await payment.save();

//     res.status(200).json({ success: true, paymentIntent });
//   } catch (error) {
//     console.error('Error processing payment:', error);
//     res.status(500).json({ success: false, message: 'Payment failed', error: error.message });
//   }
// });

// module.exports = router;


// src/routes/paymentRoutes.js
const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Payment = require('../models/Payment');
const nodemailer = require('nodemailer');

// Payment route
router.post('/api/payment', async (req, res) => {
  // Destructure fields from request body
  const { amount, currency = 'inr', paymentMethodId, paymentMethodType = 'card', userEmail, userName, courses } = req.body;

  // Validate required fields
  if (!amount || !paymentMethodId || !userEmail || !userName) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  if (amount < 50) {
    return res.status(400).json({ success: false, message: 'Amount must be at least ₹50 to process payment.' });
  }

  try {
    // Create payment intent with Stripe
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Convert to paise (e.g., ₹400 = 40000 paise)
      currency: currency,
      payment_method: paymentMethodId,
      confirmation_method: 'automatic',
      confirm: true,
      payment_method_types: [paymentMethodType],
    });

    // Save payment details to the database
    const payment = new Payment({
      userName,
      userEmail,
      amount: paymentIntent.amount / 100, // Store the amount in rupees
      status: paymentIntent.status,
      courses,
    });

    await payment.save();

    // Send success response
    res.status(200).json({ success: true, paymentIntent });
  } catch (error) {
    console.error('Error processing payment:', error);
    res.status(500).json({ success: false, message: 'Payment failed', error: error.message });
  }
});

module.exports = router;
