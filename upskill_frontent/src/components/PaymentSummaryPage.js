import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const PaymentSummaryPage = () => {
  const location = useLocation();
  const [totalFees, setTotalFees] = useState(0);

  useEffect(() => {
    const { total } = location.state || { total: 0 }; // Get total from location state
    setTotalFees(total);
  }, [location.state]);

  return (
    <div className="payment-summary-container">
      <h1>Payment Summary</h1>
      <h2>Total Fees: ₹{totalFees}</h2>
      <p>Please proceed to complete your payment.</p>
      <button onClick={() => alert('Payment successful!')}>Confirm Payment</button>
    </div>
  );
};

export default PaymentSummaryPage;
