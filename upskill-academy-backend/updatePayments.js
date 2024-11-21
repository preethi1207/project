// const mongoose = require('mongoose');
const Payment = require('./models/Payment'); // Adjust the path based on your project structure
const mongoose = require('mongoose');
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/upskill_academy', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
// Function to update payments
const updatePayments = async () => {
  try {
    const payments = await Payment.find({ date: { $exists: false } }); // Find payments without a date
    const updatedPayments = payments.map(payment => {
      return Payment.findByIdAndUpdate(payment._id, { date: payment.createdAt }, { new: true });
    });

    await Promise.all(updatedPayments); // Wait for all updates to complete
    console.log('Payments updated successfully');
  } catch (error) {
    console.error('Error updating payments:', error);
  } finally {
    mongoose.connection.close(); // Close the connection
  }
};

updatePayments();
