

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../styles/AdmissionEnquiriesManagement.css'; // Import your CSS file

// const EnquiryManagement = () => {
//     const [enquiries, setEnquiries] = useState([]);
//     const [error, setError] = useState(null);

//     // Method to get the JWT token
//     const getToken = () => {
//         return localStorage.getItem('token'); // Example: Get token from localStorage
//     };

//     useEffect(() => {
//         const fetchEnquiries = async () => {
//             try {
//                 const token = getToken(); // Get the JWT token
//                 const response = await axios.get('http://localhost:5000/api/enquiries/get-enquiries', { // Corrected endpoint
//                     headers: {
//                         Authorization: `Bearer ${token}` // Add the token to the headers
//                     }
//                 });
//                 setEnquiries(response.data); // Adjust based on response structure
//             } catch (error) {
//                 // Check for response and set specific error messages
//                 if (error.response) {
//                     if (error.response.status === 403) {
//                         setError('Access denied. You do not have permission to view this resource.');
//                     } else if (error.response.status === 401) {
//                         setError('Unauthorized. Please log in again.');
//                     } else {
//                         setError('Failed to fetch enquiries: ' + (error.response.data.message || error.message));
//                     }
//                 } else {
//                     setError('Failed to fetch enquiries: ' + error.message);
//                 }
//             }
//         };

//         fetchEnquiries();
//     }, []); // Empty dependency array means this effect runs once on mount

//     // Handle deleting an enquiry
//     const handleDeleteEnquiry = async (id) => {
//         try {
//             const token = getToken(); // Get the JWT token
//             await axios.delete(`http://localhost:5000/api/enquiries/delete-enquiry/${id}`, { // Updated endpoint
//                 headers: {
//                     Authorization: `Bearer ${token}` // Add the token to the headers
//                 }
//             });
//             // Remove deleted enquiry from state
//             setEnquiries(enquiries.filter(enquiry => enquiry._id !== id));
//         } catch (error) {
//             setError('Failed to delete enquiry: ' + error.message);
//         }
//     };

//     return (
//         <div className="enquiry-management">
//             <h2>Admission Enquiries</h2>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             <table className="enquiry-table">
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Email</th>
//                         <th>Course</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {enquiries.map((enquiry) => (
//                         <tr key={enquiry._id}>
//                             <td>{enquiry.name}</td>
//                             <td>{enquiry.email}</td>
//                             <td>{enquiry.course ? enquiry.course.map(course => course.name).join(', ') : 'N/A'}</td>
//                             <td>
//                                 <button onClick={() => handleDeleteEnquiry(enquiry._id)}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default EnquiryManagement;







import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/AdmissionEnquiriesManagement.css'; // Import your CSS file

const EnquiryManagement = () => {
    const [enquiries, setEnquiries] = useState([]);
    const [error, setError] = useState(null);

    // Method to get the JWT token
    const getToken = () => {
        return localStorage.getItem('token'); // Example: Get token from localStorage
    };

    useEffect(() => {
        const fetchEnquiries = async () => {
            try {
                const token = getToken(); // Get the JWT token
                const response = await axios.get('http://localhost:5000/api/enquiries/get-enquiries', {
                    headers: {
                        Authorization: `Bearer ${token}` // Add the token to the headers
                    }
                });
                setEnquiries(response.data); // Adjust based on response structure
            } catch (error) {
                // Handle error response
                if (error.response) {
                    if (error.response.status === 403) {
                        setError('Access denied. You do not have permission to view this resource.');
                    } else if (error.response.status === 401) {
                        setError('Unauthorized. Please log in again.');
                    } else {
                        setError('Failed to fetch enquiries: ' + (error.response.data.message || error.message));
                    }
                } else {
                    setError('Failed to fetch enquiries: ' + error.message);
                }
            }
        };

        fetchEnquiries();
    }, []);

    // Handle deleting an enquiry
    // const handleDeleteEnquiry = async (id) => {
    //     try {
    //         const token = getToken(); // Get the JWT token
    //         await axios.delete(`http://localhost:5000/api/enquiries/delete-enquiry/${id}`, {
    //             headers: {
    //                 Authorization: `Bearer ${token}` // Add the token to the headers
    //             }
    //         });
    //         // Remove deleted enquiry from state
    //         setEnquiries(enquiries.filter(enquiry => enquiry._id !== id));
    //     } catch (error) {
    //         setError('Failed to delete enquiry: ' + error.message);
    //     }
    // };


// Handle deleting an enquiry
const handleDeleteEnquiry = async (id) => {
    try {
        const token = getToken(); // Get the JWT token
        await axios.delete(`http://localhost:5000/api/enquiries/delete-enquiry/${id}`, {
            headers: {
                Authorization: `Bearer ${token}` // Add the token to the headers
            }
        });
        // Remove deleted enquiry from state
        setEnquiries(enquiries.filter(enquiry => enquiry._id !== id));
    } catch (error) {
        setError('Failed to delete enquiry: ' + error.message);
    }
};


    return (
        <div className="enquiry-management">
            <h2>Admission Enquiries</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <table className="enquiry-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Course</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {enquiries.map((enquiry) => (
                        <tr key={enquiry._id}>
                            <td>{enquiry.name}</td>
                            <td>{enquiry.email}</td>
                            <td>
                                {enquiry.course && enquiry.course.length > 0
                                    ? enquiry.course.join(', ') // Directly join the course names
                                    : 'N/A'}
                            </td>
                            <td>
                                <button onClick={() => handleDeleteEnquiry(enquiry._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EnquiryManagement;
