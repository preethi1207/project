


// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
// const Payment = require('../models/Payment'); // Adjust the path based on your project structure
// const moment = require('moment'); // Import moment for date handling

// // Function to store payment details in the database
// const storePaymentDetails = async (userName, amount, status, paymentMethodId, paymentMethodType) => {
//   const paymentDetails = new Payment({
//     userName,
//     amount,
//     paymentMethodId,
//     paymentMethodType,
//     status,
//     date: moment().toISOString(), // Store the current date in ISO format
//   });

//   try {
//     await paymentDetails.save();
//     return { success: true };
//   } catch (error) {
//     console.error('Failed to save payment details:', error);
//     return { success: false, message: 'Failed to save payment details.', error };
//   }
// };

// // Function to process payment
// const processPayment = async (req, res) => {
//   const { amount, currency = 'inr', paymentMethodId, paymentMethodType, userName } = req.body;

//   // Validate required fields
//   if (!amount || !paymentMethodId || !userName) {
//     return res.status(400).json({ success: false, message: 'All fields are required.' });
//   }

//   if (amount < 50) {
//     return res.status(400).json({ success: false, message: 'Amount must be at least ₹50 to process payment.' });
//   }

//   try {
//     // Create payment intent with Stripe
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: amount * 100, // Convert to paise (e.g., ₹400 = 40000 paise)
//       currency: currency,
//       payment_method: paymentMethodId,
//       confirmation_method: 'automatic',
//       confirm: true,
//       payment_method_types: [paymentMethodType],
//     });

//     // Save payment details to the database
//     const saveResult = await storePaymentDetails(userName, amount, paymentIntent.status, paymentMethodId, paymentMethodType);
    
//     if (saveResult.success) {
//       res.status(200).json({ success: true, paymentIntent });
//     } else {
//       res.status(500).json({ success: false, message: saveResult.message });
//     }
//   } catch (error) {
//     console.error('Error processing payment:', error);
//     res.status(500).json({ success: false, message: 'Payment failed', error: error.message });
//   }
// };

// module.exports = {
//   processPayment,
// };



const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Payment = require('../models/Payment'); // Adjust the path based on your project structure
const moment = require('moment'); // Import moment for date handling

// Function to store payment details in the database
const storePaymentDetails = async (userName, amount, status, paymentMethodId, paymentMethodType) => {
  const paymentDetails = new Payment({
    userName,
    amount,
    paymentMethodId,
    paymentMethodType,
    status,
    date: moment().toISOString(), // Store the current date in ISO format
  });

  try {
    await paymentDetails.save();
    return { success: true };
  } catch (error) {
    console.error('Failed to save payment details:', error);
    return { success: false, message: 'Failed to save payment details.', error };
  }
};

// Function to process payment
const processPayment = async (req, res) => {
  const { amount, currency = 'inr', paymentMethodId, paymentMethodType, userName } = req.body;

  // Validate required fields
  if (!amount || !paymentMethodId || !userName) {
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
    const saveResult = await storePaymentDetails(userName, amount, paymentIntent.status, paymentMethodId, paymentMethodType);
    
    if (saveResult.success) {
      res.status(200).json({ success: true, paymentIntent });
    } else {
      res.status(500).json({ success: false, message: saveResult.message });
    }
  } catch (error) {
    console.error('Error processing payment:', error);
    res.status(500).json({ success: false, message: 'Payment failed', error: error.message });
  }
};

module.exports = {
  processPayment,
};
