







// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import '../styles/AdmissionEnquiry.css';

// const AdmissionEnquiry = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     age: '',
//     course: [], // Initially empty array for selected courses
//     standard: '',
//     message: '',
//   });

//   const [coursesTaught, setCoursesTaught] = useState([]); // To hold course data from backend
//   const [isSubmitting, setIsSubmitting] = useState(false); // State to handle form submission
//   const [errorMessage, setErrorMessage] = useState(''); // State to handle error messages
//   const navigate = useNavigate();

//   // Fetch available courses from the backend on component mount
//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/courses');
//         setCoursesTaught(response.data); // Assuming the response contains an array of course objects
//       } catch (error) {
//         console.error('Error fetching courses:', error);
//         setErrorMessage('Failed to fetch courses.');
//       }
//     };
//     fetchCourses();
//   }, []);

//   // Handle input changes (for both checkboxes and regular input fields)
//   const handleChange = (e) => {
//     const { name, value, checked, type } = e.target;

//     if (type === 'checkbox') {
//       setFormData((prevFormData) => ({
//         ...prevFormData,
//         course: checked
//           ? [...prevFormData.course, value] // Add selected course to array
//           : prevFormData.course.filter((course) => course !== value), // Remove unselected course
//       }));
//     } else {
//       setFormData({
//         ...formData,
//         [name]: value, // Update input fields
//       });
//     }
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setErrorMessage(''); // Clear previous error messages

//     // Map selected course names to their ObjectIds
//     const selectedCourseIds = formData.course.map((courseName) => {
//       const course = coursesTaught.find((c) => c.name === courseName); // Match course name
//       return course ? course._id : null; // Return ObjectId or null
//     }).filter(id => id !== null); // Filter out any null values

//     try {
//       // Submit the form data with selected course ObjectIds
//       const response = await axios.post('http://localhost:5000/api/enquiry', {
//         ...formData,
//         course: selectedCourseIds // Send ObjectIds instead of course names
//       });
//       console.log('Enquiry submitted:', response.data);

//       // Save selected courses and the user's details to sessionStorage
//       sessionStorage.setItem('selectedCourses', JSON.stringify(formData.course));
//       sessionStorage.setItem('userDetails', JSON.stringify({
//         name: formData.name,
//         email: formData.email,
//         phone: formData.phone,
//         age: formData.age,
//         standard: formData.standard,
//         message: formData.message,
//       }));

//       // Navigate to the Cart page
//       navigate('/cart');
//     } catch (error) {
//       console.error('Enquiry submission error:', error.response ? error.response.data : error.message);
//       setErrorMessage('Failed to submit enquiry. Please try again later.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // Handle form reset (clears the form)
//   const handleClear = () => {
//     setFormData({
//       name: '',
//       email: '',
//       phone: '',
//       age: '',
//       course: [], // Clear selected courses
//       standard: '',
//       message: '',
//     });
//   };

//   return (
//     <div className="enquiry-page">
//       <div className="enquiry-form-container">
//         <h2>Admission Form</h2>
//         {errorMessage && <p className="error-message">{errorMessage}</p>}
//         <form onSubmit={handleSubmit} className="enquiry-form">
//           {/* Form Fields */}
//           <div className="form-group">
//             <label htmlFor="name">
//               Name: <span className="required">*</span>
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">
//               Email: <span className="required">*</span>
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="phone">
//               Phone: <span className="required">*</span>
//             </label>
//             <input
//               type="tel"
//               id="phone"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="age">
//               Student's Age: <span className="required">*</span>
//             </label>
//             <input
//               type="number"
//               id="age"
//               name="age"
//               value={formData.age}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           {/* Courses Checkboxes */}
//           <div className="form-group">
//             <label>
//               Course: <span className="required">*</span>
//             </label>
//             <table className="checkbox-table">
//               <tbody>
//                 {coursesTaught.map((course, index) => (
//                   <tr key={index}>
//                     <td>
//                       <input
//                         type="checkbox"
//                         id={`course-${index}`}
//                         name="course"
//                         value={course.name} // Use course name for checkbox value
//                         checked={formData.course.includes(course.name)} // Check if selected
//                         onChange={handleChange}
//                       />
//                     </td>
//                     <td>
//                       <label htmlFor={`course-${index}`}>{course.name}</label>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//           <div className="form-group">
//             <label htmlFor="standard">
//               Student's Class: <span className="required">*</span>
//             </label>
//             <input
//               type="text"
//               id="standard"
//               name="standard"
//               value={formData.standard}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="message">
//               Address: <span className="required">*</span>
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-buttons">
//             {/* Submit Button */}
//             <button type="submit" className="submit-button" disabled={isSubmitting}>
//               {isSubmitting ? 'Submitting...' : 'Submit'}
//             </button>
//             {/* Clear Button */}
//             <button type="button" className="clear-button" onClick={handleClear} disabled={isSubmitting}>
//               Clear
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AdmissionEnquiry;












import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/AdmissionEnquiry.css';

const AdmissionEnquiry = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    course: [], // Initially empty array for selected courses
    standard: '',
    message: '',
  });

  const [coursesTaught, setCoursesTaught] = useState([]); // To hold course data from backend
  const [isSubmitting, setIsSubmitting] = useState(false); // State to handle form submission
  const [errorMessage, setErrorMessage] = useState(''); // State to handle error messages
  const navigate = useNavigate();

  // Fetch available courses from the backend on component mount
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/courses');
        setCoursesTaught(response.data); // Assuming the response contains an array of course objects
      } catch (error) {
        console.error('Error fetching courses:', error);
        setErrorMessage('Failed to fetch courses.');
      }
    };
    fetchCourses();
  }, []);

  // Handle input changes (for both checkboxes and regular input fields)
  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    if (type === 'checkbox') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        course: checked
          ? [...prevFormData.course, value] // Add selected course to array
          : prevFormData.course.filter((course) => course !== value), // Remove unselected course
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value, // Update input fields
      });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(''); // Clear previous error messages

    // Map selected course names to their ObjectIds
    const selectedCourseIds = formData.course.map((courseName) => {
      const course = coursesTaught.find((c) => c.name === courseName); // Match course name
      return course ? course._id : null; // Return ObjectId or null
    }).filter(id => id !== null); // Filter out any null values

    try {
      // Submit the form data with selected course ObjectIds
      const response = await axios.post('http://localhost:5000/api/enquiry', {
        ...formData,
        course: selectedCourseIds // Send ObjectIds instead of course names
      });
      console.log('Enquiry submitted:', response.data);

      // Save selected courses and the user's details to sessionStorage
      sessionStorage.setItem('selectedCourses', JSON.stringify(formData.course));
      sessionStorage.setItem('userDetails', JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        age: formData.age,
        standard: formData.standard,
        message: formData.message,
      }));

      // Navigate to the Cart page
      navigate('/cart');
    } catch (error) {
      console.error('Enquiry submission error:', error.response ? error.response.data : error.message);
      setErrorMessage('Failed to submit enquiry. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle form reset (clears the form)
  const handleClear = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      age: '',
      course: [], // Clear selected courses
      standard: '',
      message: '',
    });
  };

  return (
    <div className="enquiry-page">
      <div className="enquiry-form-container">
        <h2>Admission Form</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form onSubmit={handleSubmit} className="enquiry-form">
          {/* Form Fields */}
          <div className="form-group">
            <label htmlFor="name">
              Name: <span className="required">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">
              Email: <span className="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">
              Phone: <span className="required">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">
              Student's Age: <span className="required">*</span>
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>
          {/* Courses Checkboxes */}
          <div className="form-group">
            <label>
              Course: <span className="required">*</span>
            </label>
            <table className="checkbox-table">
              <tbody>
                {coursesTaught.map((course, index) => (
                  <tr key={index}>
                    <td>
                      <input
                        type="checkbox"
                        id={`course-${index}`}
                        name="course"
                        value={course.name} // Use course name for checkbox value
                        checked={formData.course.includes(course.name)} // Check if selected
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <label htmlFor={`course-${index}`}>{course.name}</label>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="form-group">
            <label htmlFor="standard">
              Student's Class: <span className="required">*</span>
            </label>
            <input
              type="text"
              id="standard"
              name="standard"
              value={formData.standard}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">
              Address: <span className="required">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-buttons">
            {/* Submit Button */}
            <button type="submit" className="submit-button" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
            {/* Clear Button */}
            <button type="button" className="clear-button" onClick={handleClear} disabled={isSubmitting}>
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdmissionEnquiry;
