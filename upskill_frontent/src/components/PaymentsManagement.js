





// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../styles/PaymentsManagement.css'; // Ensure to import your CSS file

// const PaymentManagement = () => {
//     const [payments, setPayments] = useState([]);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchPayments = async () => {
//             try {
//                 const response = await axios.get('http://localhost:5000/api/payments');
//                 setPayments(response.data);
//             } catch (error) {
//                 setError('Failed to fetch payments');
//             }
//         };
//         fetchPayments();
//     }, []);

//     return (
//         <div className="dashboard">
//             <h2>Payment Management</h2>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             <table className="payments-table">
//                 <thead>
//                     <tr>
//                         <th>Amount</th>
//                         <th>Currency</th>
//                         <th>Status</th>
//                         <th>Date</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {payments.length > 0 ? (
//                         payments.map((payment) => (
//                             <tr key={payment._id}>
//                                 <td>{payment.amount}</td>
//                                 <td>{payment.currency}</td>
//                                 <td>{payment.status}</td>
//                                 <td>{new Date(payment.date).toLocaleDateString()}</td> {/* Assuming there's a date field */}
//                             </tr>
//                         ))
//                     ) : (
//                         <tr>
//                             <td colSpan="4" style={{ textAlign: 'center' }}>No payments found</td>
//                         </tr>
//                     )}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default PaymentManagement;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/PaymentsManagement.css'; // Ensure to import your CSS file

const PaymentManagement = () => {
    const [payments, setPayments] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPayments = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/payments');
                setPayments(response.data);
            } catch (error) {
                setError('Failed to fetch payments');
            }
        };
        fetchPayments();
    }, []);

    return (
        <div className="dashboard">
            <h2>Payment Management</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <table className="payments-table">
                <thead>
                    <tr>
                         {/* Changed from Currency to Name */}
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {payments.length > 0 ? (
                        payments.map((payment) => (
                            <tr key={payment._id}>
                                 {/* Displaying user name */}
                                <td>{payment.amount}</td>
                                <td>{payment.status}</td>
                                <td>{new Date(payment.date).toLocaleDateString()}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" style={{ textAlign: 'center' }}>No payments found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default PaymentManagement;
