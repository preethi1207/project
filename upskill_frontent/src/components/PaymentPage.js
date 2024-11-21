



// import React, { useState } from 'react';
// import axios from 'axios';
// import { useLocation } from 'react-router-dom';

// const PaymentPage = () => {
//   const location = useLocation();
//   const { total, name } = location.state || { total: 0, name: '' }; // Retrieve the total amount and userName from location state
//   const [paymentSuccess, setPaymentSuccess] = useState(false); // State to control payment success

//   const paymentMethodId = 'pm_card_visa'; // Use a valid test payment method ID (e.g., Visa test card)

//   const handlePayment = async () => {
//     // Ensure the amount is at least ₹50
//     if (total < 50) {
//       alert("The total amount must be at least ₹50.");
//       return; // Stop the payment process if amount is too low
//     }

//     try {
//       // Send payment request to backend
//       const response = await axios.post('http://localhost:5000/api/payment', {
//         amount: total, // Send the total amount in rupees
//         currency: 'inr',
//         paymentMethodId: paymentMethodId, // Use a valid payment method ID
//         paymentMethodType: 'card', // Specify the payment method type
//         userName: name // Include the user's name in the payment details
//       });

//       if (response.data.success) {
//         // If successful, set payment success state
//         setPaymentSuccess(true);
//       } else {
//         alert('Payment Failed: ' + response.data.message);
//       }
//     } catch (error) {
//       console.error('Error processing payment:', error.response ? error.response.data : error);
//       alert('An error occurred during payment processing: ' + (error.response ? error.response.data.message : error.message));
//     }
//   };

//   return (
//     <div className="payment-container">
//       <h1>Payment</h1>
//       <p>Total Amount: ₹{total}</p> {/* Display total amount in rupees */}
//       <p>Select Payment Method:</p>
//       <div>
//         <input
//           type="radio"
//           id="card"
//           name="payment-method"
//           value="card"
//           checked
//           disabled
//         />
//         <label htmlFor="card">Pay via Card</label>
//       </div>

//       <button onClick={handlePayment} style={{ backgroundColor: 'green', color: 'white' }}>
//         Proceed with Payment
//       </button>

//       {paymentSuccess && (
//         <div style={{ marginTop: '20px' }}>
//           <h3>Payment Successful!</h3>
//           <p>Thank you, {name}, for your payment of ₹{total}.</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PaymentPage;










import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const PaymentPage = () => {
  const location = useLocation();
  const { total, name } = location.state || { total: 0, name: '' }; // Retrieve total amount and userName from location state
  const [paymentSuccess, setPaymentSuccess] = useState(false); // State to control payment success

  const paymentMethodId = 'pm_card_visa'; // Use a valid test payment method ID

  const handlePayment = async () => {
    // Ensure the amount is at least ₹50
    if (total < 50) {
      alert("The total amount must be at least ₹50.");
      return; // Stop the payment process if amount is too low
    }

    try {
      // Send payment request to backend
      const response = await axios.post('http://localhost:5000/api/payment', {
        amount: total, // Send the total amount in rupees
        currency: 'inr',
        paymentMethodId: paymentMethodId, // Use a valid payment method ID
        paymentMethodType: 'card', // Specify the payment method type
        userName: name // Include the user's name in the payment details
      });

      if (response.data.success) {
        // If successful, set payment success state
        setPaymentSuccess(true);
      } else {
        alert('Payment Failed: ' + response.data.message);
      }
    } catch (error) {
      console.error('Error processing payment:', error.response ? error.response.data : error);
      alert('An error occurred during payment processing: ' + (error.response ? error.response.data.message : error.message));
    }
  };

  return (
    <div className="payment-container">
      <h1>Payment</h1>
      <p>Total Amount: ₹{total}</p> {/* Display total amount in rupees */}
      <p>Select Payment Method:</p>
      <div>
        <input
          type="radio"
          id="card"
          name="payment-method"
          value="card"
          checked
          disabled
        />
        <label htmlFor="card">Pay via Card</label>
      </div>

      <button onClick={handlePayment} style={{ backgroundColor: 'green', color: 'white' }}>
        Proceed with Payment
      </button>

      {paymentSuccess && (
        <div style={{ marginTop: '20px' }}>
          <h3>Payment Successful!</h3>
          <p>Thank you, {name}, for your payment of ₹{total}.</p>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;



















///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// import React from 'react';
// import axios from 'axios';
// import { useLocation } from 'react-router-dom';

// const PaymentPage = () => {
//   const location = useLocation();
//   const { total } = location.state || { total: 0 }; // Retrieve the total amount from the navigation state

//   const paymentMethodId = 'pm_card_visa'; // Use a valid test payment method ID (e.g., Visa test card)

//   const handlePayment = async () => {
//     // Ensure the amount is at least 50
//     if (total < 50) {
//       alert("The total amount must be at least ₹0.50.");
//       return; // Stop the payment process if amount is too low
//     }

//     try {
//       const response = await axios.post('http://localhost:5000/api/payment', {
//         amount: total, // Send the total amount in rupees
//         currency: 'inr',
//         paymentMethodId: paymentMethodId,
//         paymentMethodType: 'card', // Specify card as payment method
//       });

//       if (response.data.success) {
//         alert('Payment Successful!');
//       } else {
//         alert('Payment Failed: ' + response.data.message);
//       }
//     } catch (error) {
//       console.error('Error processing payment:', error.response ? error.response.data : error);
//       alert('An error occurred during payment processing: ' + (error.response ? error.response.data.message : error.message));
//     }
//   };

//   return (
//     <div className="payment-container">
//       <h1>Payment</h1>
//       <p>Total Amount: ₹{total}</p> {/* Display total amount in rupees */}
//       <p>Select Payment Method:</p>
//       <div>
//         <input
//           type="radio"
//           id="card"
//           name="payment-method"
//           value="card"
//           checked
//           disabled
//         />
//         <label htmlFor="card">Card</label>
//       </div>
//       <button onClick={handlePayment} style={{ backgroundColor: 'green', color: 'white' }}>
//         Proceed with Payment
//       </button>
//     </div>
//   );
// };

// export default PaymentPage;






// import React, { useState } from 'react';
// import axios from 'axios';
// import { useLocation } from 'react-router-dom';

// const PaymentPage = () => {
//   const location = useLocation();
//   const { total } = location.state || { total: 0 }; // Retrieve the total amount from the navigation state
//   const [showQR, setShowQR] = useState(false); // State to control QR code display

//   const paymentMethodId = 'pm_card_visa'; // Use a valid test payment method ID (e.g., Visa test card)

//   const handlePayment = async () => {
//     // Ensure the amount is at least 50
//     if (total < 50) {
//       alert("The total amount must be at least ₹50.");
//       return; // Stop the payment process if amount is too low
//     }

//     try {
//       // Simulate backend payment processing
//       const response = await axios.post('http://localhost:5000/api/payment', {
//         amount: total, // Send the total amount in rupees
//         currency: 'inr',
//         paymentMethodId: paymentMethodId,
//         paymentMethodType: 'qr', // Specify qr as payment method for this demo
//       });

//       if (response.data.success) {
//         // If successful, show the QR code
//         setShowQR(true);
//       } else {
//         alert('Payment Failed: ' + response.data.message);
//       }
//     } catch (error) {
//       console.error('Error processing payment:', error.response ? error.response.data : error);
//       alert('An error occurred during payment processing: ' + (error.response ? error.response.data.message : error.message));
//     }
//   };

//   return (
//     <div className="payment-container">
//       <h1>Payment</h1>
//       <p>Total Amount: ₹{total}</p> {/* Display total amount in rupees */}
//       <p>Select Payment Method:</p>
//       <div>
//         <input
//           type="radio"
//           id="qr"
//           name="payment-method"
//           value="qr"
//           checked
//           disabled
//         />
//         <label htmlFor="qr">Pay via QR Code</label>
//       </div>

//       <button onClick={handlePayment} style={{ backgroundColor: 'green', color: 'white' }}>
//         Proceed with Payment
//       </button>

//       {showQR && (
//         <div style={{ marginTop: '20px' }}>
//           <h3>Scan the QR Code to Pay</h3>
//           <img 
//             src='../assets/GooglePay_QR.png'//../\src\assets\GooglePay_QR.png" // Path to your QR image (replace with actual path)
//             alt="QR Code for Payment"
//             style={{ width: '200px', height: '200px' }}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default PaymentPage;






// import React, { useState } from 'react';
// import axios from 'axios';
// import { useLocation } from 'react-router-dom';
// import qrCodeImage from '../assets/GooglePay_QR.png';
// const PaymentPage = () => {
//   const location = useLocation();
//   const { total } = location.state || { total: 0 }; // Retrieve the total amount from the navigation state
//   const [showQR, setShowQR] = useState(false); // State to control QR code display

//   const paymentMethodId = 'pm_card_visa'; // Use a valid test payment method ID (e.g., Visa test card)

//   const handlePayment = async () => {
//     // Ensure the amount is at least 50
//     if (total < 50) {
//       alert("The total amount must be at least ₹50.");
//       return; // Stop the payment process if amount is too low
//     }

//     try {
//       // Simulate backend payment processing
//       const response = await axios.post('http://localhost:5000/api/payment', {
//         amount: total, // Send the total amount in rupees
//         currency: 'inr',
//         paymentMethodId: paymentMethodId, // Use a valid payment method ID
//         // Removed paymentMethodType as it was causing errors
//       });

//       if (response.data.success) {
//         // If successful, show the QR code
//         setShowQR(true);
//       } else {
//         alert('Payment Failed: ' + response.data.message);
//       }
//     } catch (error) {
//       console.error('Error processing payment:', error.response ? error.response.data : error);
//       alert('An error occurred during payment processing: ' + (error.response ? error.response.data.message : error.message));
//     }
//   };

//   return (
//     <div className="payment-container">
//       <h1>Payment</h1>
//       <p>Total Amount: ₹{total}</p> {/* Display total amount in rupees */}
//       <p>Select Payment Method:</p>
//       <div>
//         <input
//           type="radio"
//           id="qr"
//           name="payment-method"
//           value="qr"
//           checked
//           disabled
//         />
//         <label htmlFor="qr">Pay via QR Code</label>
//       </div>

//       <button onClick={handlePayment} style={{ backgroundColor: 'green', color: 'white' }}>
//         Proceed with Payment
//       </button>

//       {showQR && (
//         <div style={{ marginTop: '20px' }}>
//           <h3>Scan the QR Code to Pay</h3>
//           <img 
//             src={qrCodeImage}  // Path to your QR image (replace with actual path)
//             alt="QR Code for Payment"
//             style={{ width: '200px', height: '200px' }}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default PaymentPage;
