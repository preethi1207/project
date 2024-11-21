// import React, { useState } from 'react';
// import CourseManagement from './CourseManagement';
// import StaffManagement from './StaffManagement';

// const AdminDashboard = () => {
//   const [selectedOption, setSelectedOption] = useState(null);

//   const handleOptionClick = (option) => {
//     setSelectedOption(option);
//   };

//   return (
//     <div>
//       {!selectedOption ? (
//         <div>
//           <h2>Admin Dashboard</h2>
//           <button onClick={() => handleOptionClick('course')}>Manage Courses</button>
//           <button onClick={() => handleOptionClick('staff')}>Manage Staff</button>
//         </div>
//       ) : selectedOption === 'course' ? (
//         <CourseManagement />
//       ) : (
//         <StaffManagement />
//       )}
//     </div>
//   );
// };

// export default AdminDashboard;


import React, { useState } from 'react';
import CourseManagement from './CourseManagement';
import StaffManagement from './StaffManagement';
import AdminManagement from './AdminManagement';
import AdmissionEnquiries from './AdmissionEnquiries';

import PaymentsManagement from './PaymentsManagement';


const AdminDashboard = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      {!selectedOption ? (
        <div>
          <h2>Admin Dashboard</h2>
          <button onClick={() => handleOptionClick('admins')}>Manage Admins</button>
          <button onClick={() => handleOptionClick('admissions')}>Manage Admission Enquiries</button>
         
          <button onClick={() => handleOptionClick('courses')}>Manage Courses</button>
          <button onClick={() => handleOptionClick('payments')}>Manage Payments</button>
          <button onClick={() => handleOptionClick('staff')}>Manage Staff</button>
         
        </div>
      ) : (
        <div>
          {selectedOption === 'admins' && <AdminManagement />}
          {selectedOption === 'admissions' && <AdmissionEnquiries />}
         
          {selectedOption === 'courses' && <CourseManagement />}
          {selectedOption === 'payments' && <PaymentsManagement />}
          {selectedOption === 'staff' && <StaffManagement />}
      
          <button onClick={() => setSelectedOption(null)}>Back to Dashboard</button>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
