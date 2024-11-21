// const mongoose = require('mongoose');

// const paymentSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   amount: {
//     type: Number,
//     required: true,
//   },
//   currency: {
//     type: String,
//     required: true,
//   },
//   paymentMethodId: {
//     type: String,
//     required: true,
//   },
//   paymentMethodType: {
//     type: String,
//     required: true,
//   },
//   status: {
//     type: String,
//     required: true,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// const Payment = mongoose.model('Payment', paymentSchema);

// module.exports = Payment;








// const mongoose = require('mongoose');

// const paymentSchema = new mongoose.Schema({
  
//   amount: { type: Number, required: true },
//   paymentMethodId: { type: String, required: true },
//   paymentMethodType: { type: String, required: true },
//   status: { type: String, required: true },
// }, { timestamps: true });

// const Payment = mongoose.model('Payment', paymentSchema);

// module.exports = Payment;




const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    userEmail: { type: String, required: true }, // Added userEmail
    userName: { type: String, required: true }, // Added userName
    amount: { type: Number, required: true },
    paymentMethodId: { type: String, required: true },
    paymentMethodType: { type: String, required: true },
    status: { type: String, required: true },
    courses: { type: [String], required: true }, // Assuming courses is an array of course IDs or names
}, { timestamps: true });

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
