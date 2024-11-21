// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const StaffManagement = () => {
//   const [staff, setStaff] = useState([]);
//   const [staffName, setStaffName] = useState('');
//   const [staffRole, setStaffRole] = useState('');
//   const [editingStaff, setEditingStaff] = useState(null);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     fetchStaff();
//   }, []);

//   // Fetch staff list from server
//   const fetchStaff = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/staff'); // Adjust URL based on your setup
//       setStaff(response.data);
//     } catch (error) {
//       console.error('Error fetching staff:', error);
//       setError('Error fetching staff');
//     }
//   };

//   // Add new staff
//   const handleAddStaff = async () => {
//     setLoading(true);
//     setError('');
//     try {
//       const newStaff = { name: staffName, role: staffRole };
//       const response = await axios.post('http://localhost:5000/api/staff/add-staff', newStaff);
//       console.log('Staff added:', response.data);
//       setStaff([...staff, response.data]); // Update staff list
//       setStaffName(''); // Clear input fields
//       setStaffRole('');
//     } catch (error) {
//       setError('Error adding staff');
//       console.error('Error adding staff:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Delete a staff member
//   const handleDeleteStaff = async (id) => {
//     setLoading(true);
//     setError('');
//     try {
//       await axios.delete(`http://localhost:5000/api/staff/${id}`);
//       setStaff(staff.filter((member) => member._id !== id)); // Remove deleted staff
//     } catch (error) {
//       setError('Error deleting staff');
//       console.error('Error deleting staff:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Update a staff member
//   const handleUpdateStaff = async () => {
//     setLoading(true);
//     setError('');
//     try {
//       await axios.put(`http://localhost:5000/api/staff/${editingStaff._id}`, {
//         name: staffName,
//         role: staffRole,
//       });
//       const updatedStaff = staff.map((member) =>
//         member._id === editingStaff._id
//           ? { ...member, name: staffName, role: staffRole }
//           : member
//       );
//       setStaff(updatedStaff); // Update staff list
//       setEditingStaff(null); // Reset form
//       setStaffName('');
//       setStaffRole('');
//     } catch (error) {
//       setError('Error updating staff');
//       console.error('Error updating staff:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Set the staff member for editing
//   const startEditing = (member) => {
//     setEditingStaff(member);
//     setStaffName(member.name);
//     setStaffRole(member.role);
//   };

//   return (
//     <div>
//       <h2>Manage Staff</h2>
//       {loading && <p>Loading...</p>}
//       {error && <p style={{ color: 'red' }}>{error}</p>}
      
//       <input
//         type="text"
//         placeholder="Staff Name"
//         value={staffName}
//         onChange={(e) => setStaffName(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Staff Role"
//         value={staffRole}
//         onChange={(e) => setStaffRole(e.target.value)}
//       />
      
//       {editingStaff ? (
//         <button onClick={handleUpdateStaff}>Update Staff</button>
//       ) : (
//         <button onClick={handleAddStaff}>Add Staff</button>
//       )}

//       <ul>
//         {staff.map((member) => (
//           <li key={member._id}>
//             {member.name} - {member.role}
//             <button onClick={() => startEditing(member)}>Edit</button>
//             <button onClick={() => handleDeleteStaff(member._id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default StaffManagement;















//////////////////////////////////////////////////////////////////////////////////////////////////////////////











// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const StaffManagement = () => {
//     const [staff, setStaff] = useState([]);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchStaff = async () => {
//             try {
//                 const response = await axios.get('http://localhost:5000/api/staff')

//                 setStaff(response.data);
//             } catch (error) {
//                 setError('Failed to fetch staff');
//             }
//         };
//         fetchStaff();
//     }, []);

//     return (
//         <div>
//             <h2>Staff Management</h2>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Email</th>
//                         <th>Role</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {staff.map((member) => (
//                         <tr key={member._id}>
//                             <td>{member.name}</td>
//                             <td>{member.email}</td>
//                             <td>{member.role}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default StaffManagement;











/////////////////////////////////////////////////////////////////////////////////////////////////






// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const StaffManagement = () => {
//     const [staff, setStaff] = useState([]);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchStaff = async () => {
//             try {
//                 const response = await axios.get('http://localhost:5000/api/staff');
//                 setStaff(response.data);
//             } catch (error) {
//                 setError('Failed to fetch staff');
//             }
//         };
//         fetchStaff();
//     }, []);

//     return (
//         <div style={{ padding: '20px' }}>
//             <h2>Staff Management</h2>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
//                 <thead>
//                     <tr>
//                         <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>Name</th>
                        
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {staff.map((member) => (
//                         <tr key={member._id}>
//                             <td style={{ border: '1px solid black', padding: '8px' }}>{member.name}</td>
//                             <td style={{ border: '1px solid black', padding: '8px' }}>{member.qualification}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default StaffManagement;





import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/CourseMange.css'; // Ensure to import your CSS file

const StaffManagement = () => {
    const [staff, setStaff] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStaff = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/staff');
                setStaff(response.data);
            } catch (error) {
                setError('Failed to fetch staff');
            }
        };
        fetchStaff();
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h2>Staff Management</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <table className="course-table"> {/* Use the course-table class */}
                <thead>
                    <tr>
                        <th>Name</th> {/* No need for additional styling here */}
                    </tr>
                </thead>
                <tbody>
                    {staff.map((member) => (
                        <tr key={member._id}>
                            <td>{member.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StaffManagement;
