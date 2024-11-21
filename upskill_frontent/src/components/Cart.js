// // // src/components/Cart.js

// // import React, { useEffect, useState } from 'react';
// // import '../styles/Cart.css'; // Make sure to create and style Cart.css appropriately

// // const Cart = () => {
// //   const [userName, setUserName] = useState('');
// //   const [selectedCourses, setSelectedCourses] = useState([]);

// //   useEffect(() => {
// //     // Retrieve data from localStorage
// //     const storedName = localStorage.getItem('userName');
// //     const storedCourses = localStorage.getItem('selectedCourses');

// //     if (storedName) {
// //       setUserName(storedName);
// //     }

// //     if (storedCourses) {
// //       setSelectedCourses(JSON.parse(storedCourses));
// //     }
// //   }, []);

// //   return (
// //     <div className="cart-container">
// //       <h2>Cart</h2>
// //       {userName && <p>User Name: {userName}</p>}

// //       {selectedCourses.length > 0 ? (
// //         <div className="course-list">
// //           <h3>Selected Courses:</h3>
// //           <ul>
// //             {selectedCourses.map((course, index) => (
// //               <li key={index}>{course}</li>
// //             ))}
// //           </ul>
// //         </div>
// //       ) : (
// //         <p>No courses selected.</p>
// //       )}
// //     </div>
// //   );
// // };

// // export default Cart;


// // import React, { useEffect, useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import axios from 'axios'; // Assuming you're using Axios for HTTP requests
// // import '../styles/Cart.css'; // Ensure to create and style Cart.css

// // const Cart = () => {
// //   const [userName, setUserName] = useState('');
// //   const [selectedCourses, setSelectedCourses] = useState([]);
// //   const [totalFees, setTotalFees] = useState(0);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     // Retrieve data from localStorage
// //     const storedName = localStorage.getItem('userName');
// //     const storedCourses = JSON.parse(localStorage.getItem('selectedCourses')) || [];

// //     if (storedName) {
// //       setUserName(storedName);
// //     }

// //     // Fetch the course data from the backend
// //     const fetchCourses = async () => {
// //       try {
// //         const response = await axios.get('/api/courses');
// //         const allCourses = response.data;

// //         // Match the selected course names with the ones fetched from the backend
// //         const selectedWithFees = storedCourses.map(selectedCourse => {
// //           const course = allCourses.find(c => c.name === selectedCourse);
// //           return { name: course.name, fees: course.fees };
// //         });

// //         setSelectedCourses(selectedWithFees);

// //         // Calculate total fees
// //         const total = selectedWithFees.reduce((acc, course) => acc + course.fees, 0);
// //         setTotalFees(total);
// //       } catch (error) {
// //         console.error('Error fetching courses:', error);
// //       }
// //     };

// //     fetchCourses();
// //   }, []);

// //   const handleProceedToPayment = () => {
// //     navigate('/payment');
// //   };

// //   return (
// //     <div className="cart-container">
// //       <h2>Cart</h2>
// //       {userName && <p>User Name: {userName}</p>}

// //       {selectedCourses.length > 0 ? (
// //         <div className="course-list">
// //           <h3>Selected Courses:</h3>
// //           <ul>
// //             {selectedCourses.map((course, index) => (
// //               <li key={index}>
// //                 {course.name} - Fees: ${course.fees}
// //               </li>
// //             ))}
// //           </ul>
// //           <h4>Total Fees: ${totalFees}</h4>
// //           <button onClick={handleProceedToPayment} className="proceed-button">
// //             Proceed to Payment
// //           </button>
// //         </div>
// //       ) : (
// //         <p>No courses selected.</p>
// //       )}
// //     </div>
// //   );
// // };

// // export default Cart;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate

// const Cart = () => {
//   const [courses, setCourses] = useState([]);
//   const [error, setError] = useState('');
//   const [userName, setUserName] = useState('');
//   const [totalFees, setTotalFees] = useState(0);

//   const navigate = useNavigate(); // Initialize navigate

//   useEffect(() => {
//     // Get selected courses and user name from localStorage
//     const selectedCourses = JSON.parse(localStorage.getItem('selectedCourses')) || [];
//     const storedUserName = localStorage.getItem('userName') || 'Guest';
//     setUserName(storedUserName);

//     if (selectedCourses.length === 0) {
//       setCourses([]);
//       return;
//     }

//     const fetchCourses = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/courses');
//         const allCourses = response.data;

//         // Filter to get only selected courses by name
//         const selectedCourseDetails = allCourses.filter(course => selectedCourses.includes(course.name));
//         setCourses(selectedCourseDetails);

//         // Calculate total fees for selected courses
//         const total = selectedCourseDetails.reduce((acc, course) => acc + course.fees, 0);
//         setTotalFees(total);
//       } catch (error) {
//         console.error('Error fetching courses:', error);
//         setError('Failed to fetch courses. Please try again.');
//       }
//     };

//     fetchCourses();
//   }, []);

//   return (
//     <div>
//       <h2>Your Cart</h2>
//       {error && <p>{error}</p>}
      
//       {/* Display user's name */}
//       <h3>Welcome, {userName}!</h3>
      
//       {courses.length > 0 ? (
//         <>
//           {courses.map(course => (
//             <div key={course._id}>
//               <h3>{course.name}</h3>
//               <p>Fees: {course.fees}</p>
//             </div>
//           ))}
          
//           {/* Display total fees */}
//           <div>
//             <h3>Total Fees: {totalFees}</h3>
//           </div>

//           {/* Proceed to Payment button */}
//           <button onClick={() => navigate('/payment')} className="payment-button">
//             Proceed to Payment
//           </button>

//         </>
//       ) : (
//         <p>No courses selected.</p>
//       )}
//     </div>
//   );
// };

// export default Cart;










// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Cart = () => {
//   const [courses, setCourses] = useState([]);
//   const [error, setError] = useState('');
//   const [userName, setUserName] = useState('');
//   const [totalFees, setTotalFees] = useState(0);

//   const navigate = useNavigate();

//   useEffect(() => {
//     const selectedCourses = JSON.parse(localStorage.getItem('selectedCourses')) || [];
//     const storedUserName = localStorage.getItem('userName') || 'Guest';
//     setUserName(storedUserName);

//     if (selectedCourses.length === 0) {
//       setCourses([]);
//       return;
//     }

//     const fetchCourses = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/courses');
//         const allCourses = response.data;

//         const selectedCourseDetails = allCourses.filter(course => selectedCourses.includes(course.name));
//         setCourses(selectedCourseDetails);

//         const total = selectedCourseDetails.reduce((acc, course) => acc + course.fees, 0);
//         setTotalFees(total);
//       } catch (error) {
//         console.error('Error fetching courses:', error);
//         setError('Failed to fetch courses. Please try again.');
//       }
//     };

//     fetchCourses();
//   }, []);

//   return (
//     <div>
//       <h2>Your Cart</h2>
//       {error && <p>{error}</p>}
      
//       <h3>Welcome, {userName}!</h3>
      
//       {courses.length > 0 ? (
//         <>
//           {courses.map(course => (
//             <div key={course._id}>
//               <h3>{course.name}</h3>
//               <p>Fees: {course.fees}</p>
//             </div>
//           ))}
          
//           <div>
//             <h3>Total Fees: ₹{totalFees}</h3>
//           </div>

//           {/* <button onClick={() => navigate('/payment', { state: { total: totalFees } })} className="payment-button">
//             Proceed to Payment
//           </button> */}
//           <button onClick={() => navigate('/payment', { state: { total: totalFees } })} className="payment-button">
//   Proceed to Payment
// </button>


//         </>
//       ) : (
//         <p>No courses selected.</p>
//       )}
//     </div>
//   );
// };

// export default Cart;





// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Cart = () => {
//   const [courses, setCourses] = useState([]);
//   const [error, setError] = useState('');
//   const [userName, setUserName] = useState('');
//   const [totalFees, setTotalFees] = useState(0);

//   const navigate = useNavigate();

//   useEffect(() => {
//     const selectedCourses = JSON.parse(localStorage.getItem('selectedCourses')) || [];
//     const storedUserName = localStorage.getItem('userName') || 'Guest';
//     setUserName(storedUserName);

//     if (selectedCourses.length === 0) {
//       setCourses([]);
//       return;
//     }

//     const fetchCourses = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/courses');
//         const allCourses = response.data;

//         const selectedCourseDetails = allCourses.filter(course => selectedCourses.includes(course.name));
//         setCourses(selectedCourseDetails);

//         // Calculate total fees in rupees
//         const total = selectedCourseDetails.reduce((acc, course) => acc + course.fees, 0);
//         setTotalFees(total);
//       } catch (error) {
//         console.error('Error fetching courses:', error);
//         setError('Failed to fetch courses. Please try again.');
//       }
//     };

//     fetchCourses();
//   }, []);

//   return (
//     <div>
//       <h2>Your Cart</h2>
//       {error && <p>{error}</p>}
      
//       <h3>Welcome, {userName}!</h3>
      
//       {courses.length > 0 ? (
//         <>
//           {courses.map(course => (
//             <div key={course._id}>
//               <h3>{course.name}</h3>
//               <p>Fees: ₹{course.fees}</p> {/* Display fees in rupees */}
//             </div>
//           ))}
          
//           <div>
//             <h3>Total Fees: ₹{totalFees}</h3> {/* Display total fees in rupees */}
//           </div>

//           <button onClick={() => navigate('/payment', { state: { total: totalFees } })} className="payment-button">
//             Proceed to Payment
//           </button>
//         </>
//       ) : (
//         <p>No courses selected.</p>
//       )}
//     </div>
//   );
// };

// export default Cart;






// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Cart = () => {
//   const [courses, setCourses] = useState([]);
//   const [error, setError] = useState('');
//   const [userName, setUserName] = useState('');
//   const [totalFees, setTotalFees] = useState(0);

//   const navigate = useNavigate();

//   useEffect(() => {
//     const selectedCourses = JSON.parse(localStorage.getItem('selectedCourses')) || [];
//     const storedUserName = localStorage.getItem('userName') || 'Guest';
//     setUserName(storedUserName);

//     if (selectedCourses.length === 0) {
//       setCourses([]);
//       return;
//     }

//     const fetchCourses = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/courses');
//         const allCourses = response.data;

//         const selectedCourseDetails = allCourses.filter(course => selectedCourses.includes(course.name));
//         setCourses(selectedCourseDetails);

//         // Calculate total fees in rupees
//         const total = selectedCourseDetails.reduce((acc, course) => acc + course.fees, 0);
//         setTotalFees(total);
//       } catch (error) {
//         console.error('Error fetching courses:', error);
//         setError('Failed to fetch courses. Please try again.');
//       }
//     };

//     fetchCourses();
//   }, []);

//   return (
//     <div>
//       <h2>Your Cart</h2>
//       {error && <p>{error}</p>}
      
//       <h3>Welcome, {userName}!</h3>
      
//       {courses.length > 0 ? (
//         <>
//           {courses.map(course => (
//             <div key={course._id}>
//               <h3>{course.name}</h3>
//               <p>Fees: ₹{course.fees}</p> {/* Display fees in rupees */}
//             </div>
//           ))}
          
//           <div>
//             <h3>Total Fees: ₹{totalFees}</h3> {/* Display total fees in rupees */}
//           </div>

//           <button 
//             onClick={() => {
//               if (totalFees < 50) {
//                 alert("Total fees must be at least ₹50 to proceed to payment.");
//               } else {
//                 navigate('/payment', { state: { total: totalFees } });
//               }
//             }} 
//             className="payment-button"
//           >
//             Proceed to Payment
//           </button>
//         </>
//       ) : (
//         <p>No courses selected.</p>
//       )}
//     </div>
//   );
// };

// export default Cart;







// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Cart = () => {
//   const [courses, setCourses] = useState([]);
//   const [error, setError] = useState('');
//   const [userName, setUserName] = useState('');
//   const [totalFees, setTotalFees] = useState(0);

//   const navigate = useNavigate();

//   useEffect(() => {
//     const selectedCourses = JSON.parse(localStorage.getItem('selectedCourses')) || [];
//     const storedUserName = localStorage.getItem('userName') || 'Guest';
//     setUserName(storedUserName);

//     if (selectedCourses.length === 0) {
//       setCourses([]);
//       return;
//     }

//     const fetchCourses = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/courses');
//         const allCourses = response.data;

//         const selectedCourseDetails = allCourses.filter(course => selectedCourses.includes(course.name));
//         setCourses(selectedCourseDetails);

//         // Calculate total fees in rupees
//         const total = selectedCourseDetails.reduce((acc, course) => acc + course.fees, 0);
//         setTotalFees(total);
//       } catch (error) {
//         console.error('Error fetching courses:', error);
//         setError('Failed to fetch courses. Please try again.');
//       }
//     };

//     fetchCourses();
//   }, []);

//   return (
//     <div>
//       <h2>Your Cart</h2>
//       {error && <p>{error}</p>}
      
//       <h3>Welcome, {userName}!</h3>
      
//       {courses.length > 0 ? (
//         <>
//           {courses.map(course => (
//             <div key={course._id}>
//               <h3>{course.name}</h3>
//               <p>Fees: ₹{course.fees}</p> {/* Display fees in rupees */}
//             </div>
//           ))}
          
//           <div>
//             <h3>Total Fees: ₹{totalFees}</h3> {/* Display total fees in rupees */}
//           </div>

//           <button 
//             onClick={() => {
//               if (totalFees < 50) {
//                 alert("Total fees must be at least ₹50 to proceed to payment.");
//               } else {
//                 navigate('/payment', { state: { total: totalFees } });
//               }
//             }} 
//             className="payment-button"
//           >
//             Proceed to Payment
//           </button>
//         </>
//       ) : (
//         <p>No courses selected.</p>
//       )}
//     </div>
//   );
// };

// export default Cart;




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Cart = () => {
//   const [courses, setCourses] = useState([]);
//   const [error, setError] = useState('');
//   const [userDetails, setUserDetails] = useState({});
//   const [totalFees, setTotalFees] = useState(0);

//   const navigate = useNavigate();

//   useEffect(() => {
//     // Clear old data when the page is refreshed (if needed)
//     window.onbeforeunload = () => {
//       sessionStorage.removeItem('selectedCourses');
//       sessionStorage.removeItem('userDetails');
//     };

//     // Retrieve session data
//     const selectedCourses = JSON.parse(sessionStorage.getItem('selectedCourses')) || [];
//     const storedUserDetails = JSON.parse(sessionStorage.getItem('userDetails'));

//     // If no userDetails, prompt user to fill out the admission form
//     if (!storedUserDetails) {
//       setError('Please fill out the admission form to proceed.');
//       return;
//     }

//     setUserDetails(storedUserDetails);

//     // If no courses are selected, clear the courses array
//     if (selectedCourses.length === 0) {
//       setCourses([]);
//       return;
//     }

//     // Fetch selected courses from the backend
//     const fetchCourses = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/courses');
//         const allCourses = response.data;

//         // Filter and get details for the selected courses only
//         const selectedCourseDetails = allCourses.filter(course => selectedCourses.includes(course.name));
//         setCourses(selectedCourseDetails);

//         // Calculate total fees
//         const total = selectedCourseDetails.reduce((acc, course) => acc + course.fees, 0);
//         setTotalFees(total);
//       } catch (error) {
//         console.error('Error fetching courses:', error);
//         setError('Failed to fetch courses. Please try again.');
//       }
//     };

//     fetchCourses();
//   }, []);

//   return (
//     <div>
//       <h2>Your Cart</h2>
//       {error && <p>{error}</p>}

//       {userDetails.name ? (
//         <>
//           <h3>Welcome, {userDetails.name}!</h3>
//           <p>Email: {userDetails.email}</p>
//           <p>Phone: {userDetails.phone}</p>
//           <p>Age: {userDetails.age}</p>
//           <p>Class: {userDetails.standard}</p>
//           <p>Address: {userDetails.message}</p>

//           {courses.length > 0 ? (
//             <>
//               {courses.map(course => (
//                 <div key={course._id}>
//                   <h3>{course.name}</h3>
//                   <p>Fees: ₹{course.fees}</p>
//                 </div>
//               ))}

//               <div>
//                 <h3>Total Fees: ₹{totalFees}</h3>
//               </div>

//               <button
//                 onClick={() => {
//                   if (totalFees < 50) {
//                     alert("Total fees must be at least ₹50 to proceed to payment.");
//                   } else {
//                     navigate('/payment', { state: { total: totalFees } });
//                   }
//                 }}
//                 className="payment-button"
//               >
//                 Proceed to Payment
//               </button>
//             </>
//           ) : (
//             <p>No courses selected.</p>
//           )}
//         </>
//       ) : (
//         <div>
//           <p>Please fill out the <button onClick={() => navigate('/admissionEnquiry')}>admission form</button> to proceed.</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;





import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState('');
  const [userDetails, setUserDetails] = useState({});
  const [totalFees, setTotalFees] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    // Clear old data when the page is refreshed (if needed)
    window.onbeforeunload = () => {
      sessionStorage.removeItem('selectedCourses');
      sessionStorage.removeItem('userDetails');
    };

    // Retrieve session data
    const selectedCourses = JSON.parse(sessionStorage.getItem('selectedCourses')) || [];
    const storedUserDetails = JSON.parse(sessionStorage.getItem('userDetails'));

    // If no userDetails, prompt user to fill out the admission form
    if (!storedUserDetails) {
      setError('Please fill out the admission form to proceed.');
      return;
    }

    setUserDetails(storedUserDetails);

    // If no courses are selected, clear the courses array
    if (selectedCourses.length === 0) {
      setCourses([]);
      return;
    }

    // Fetch selected courses from the backend
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/courses');
        const allCourses = response.data;

        // Filter and get details for the selected courses only
        const selectedCourseDetails = allCourses.filter(course => selectedCourses.includes(course.name));
        setCourses(selectedCourseDetails);

        // Calculate total fees
        const total = selectedCourseDetails.reduce((acc, course) => acc + course.fees, 0);
        setTotalFees(total);
      } catch (error) {
        console.error('Error fetching courses:', error);
        setError('Failed to fetch courses. Please try again.');
      }
    };

    fetchCourses();
  }, []);

  return (
    <div>
      <h2>Your Cart</h2>
      {error && <p>{error}</p>}

      {userDetails.name ? (
        <>
          <h3>Welcome, {userDetails.name}!</h3>
          <p>Email: {userDetails.email}</p>
          <p>Phone: {userDetails.phone}</p>
          <p>Age: {userDetails.age}</p>
          <p>Class: {userDetails.standard}</p>
          <p>Address: {userDetails.message}</p>

          {courses.length > 0 ? (
            <>
              {courses.map(course => (
                <div key={course._id}>
                  <h3>{course.name}</h3>
                  <p>Fees: ₹{course.fees}</p>
                </div>
              ))}

              <div>
                <h3>Total Fees: ₹{totalFees}</h3>
              </div>

              <button
                onClick={() => {
                  if (totalFees < 50) {
                    alert("Total fees must be at least ₹50 to proceed to payment.");
                  } else {
                    navigate('/payment', { 
                      state: { 
                        total: totalFees, 
                        name: userDetails.name // Pass the user's name to the PaymentPage
                      } 
                    });
                  }
                }}
                className="payment-button"
              >
                Proceed to Payment
              </button>
            </>
          ) : (
            <p>No courses selected.</p>
          )}
        </>
      ) : (
        <div>
          <p>Please fill out the <button onClick={() => navigate('/admissionEnquiry')}>admission form</button> to proceed.</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
