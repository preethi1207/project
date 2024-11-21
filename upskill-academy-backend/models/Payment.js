const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  paymentMethodId: {
    type: String,
    required: true,
  },
  paymentMethodType: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  date: { type: Date, default: Date.now },
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;




// const mongoose = require('mongoose');

// const paymentSchema = new mongoose.Schema({
//   userName: { type: String, required: true }, // Add this line to store user names
//   amount: { type: Number, required: true },
//   currency: { type: String, default: 'inr' },
//   paymentMethodId: { type: String, required: true },
//   paymentMethodType: { type: String, required: true },
//   status: { type: String, required: true },
//   date: { type: Date, default: Date.now }, // Store the current date
// }, { timestamps: true });

// module.exports = mongoose.model('Payment', paymentSchema);
