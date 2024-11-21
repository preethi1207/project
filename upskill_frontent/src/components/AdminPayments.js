// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const AdminPayments = () => {
//   const [payments, setPayments] = useState([]);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     fetchPayments();
//   }, []);

//   const fetchPayments = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/payments');
//       setPayments(response.data);
//     } catch (error) {
//       console.error('Error fetching payments:', error);
//       setError('Failed to load payment details.');
//     }
//   };

//   return (
//     <div>
//       <h2>Payment Details</h2>
//       {error && <p>{error}</p>}
//       <table>
//         <thead>
//           <tr>
//             <th>User Email</th>
//             <th>Amount (₹)</th>
//             <th>Status</th>
//             <th>Courses</th>
//           </tr>
//         </thead>
//         <tbody>
//           {payments.map((payment) => (
//             <tr key={payment._id}>
//               <td>{payment.userEmail}</td>
//               <td>{payment.amount}</td>
//               <td>{payment.status}</td>
//               <td>{payment.courses.join(', ')}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AdminPayments;





import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPayments = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    // Fetch payments from the backend
    const fetchPayments = async () => {
      try {
        const response = await axios.get('/api/payments');
        setPayments(response.data);
      } catch (error) {
        console.error('Error fetching payments:', error);
      }
    };
    fetchPayments();
  }, []);

  return (
    <div className="payment-container">
      <h1>Payment Details</h1>
      <table className="payment-table">
        <thead>
          <tr>
            <th>User Name</th>
            <th>User Email</th>
            <th>Amount (₹)</th>
            <th>Status</th>
            <th>Courses</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment._id}>
              <td>{payment.user.name}</td> {/* Assuming user has a name */}
              <td>{payment.user.email}</td>
              <td>{payment.amount}</td>
              <td>{payment.status}</td>
              <td>{payment.courses.join(', ')}</td> {/* Displaying courses as a comma-separated list */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPayments;
