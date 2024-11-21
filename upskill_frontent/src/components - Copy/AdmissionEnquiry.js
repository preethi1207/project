// import React, { useState } from 'react';
// import axios from 'axios';
// import '../styles/AdmissionEnquiry.css';

// const AdmissionEnquiry = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     age: '',
//     course: '',
//     standard: '',
//     message: ''
//   });

//   const [isSubmitted, setIsSubmitted] = useState(false); // State to manage form visibility

//   const coursesTaught = [
//     "Brain Gym Exercise",
//     "Brain Mapping",
//     "Right Brain Activation",
//     "Memory Techniques",
//     "Speed Reading",
//     "Creative Thinking",
//     "Drawing",
//   ];

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/enquiry', formData);
//       console.log('Enquiry submitted:', response.data);
//       setIsSubmitted(true); // Hide the form after successful submission
//     } catch (error) {
//       console.error('Enquiry submission error:', error.response ? error.response.data : error.message);
//       // Handle enquiry submission error
//     }
//   };

//   const handleClear = () => {
//     setFormData({
//       name: '',
//       email: '',
//       phone: '',
//       age: '',
//       course: '',
//       standard: '',
//       message: ''
//     });
//   };

//   return (
//     <div className="enquiry-page">
//       {isSubmitted ? (
//         <div className="success-message">
//           <h2>Thank you for your enquiry!</h2>
//           <p>We will get back to you soon.</p>
//         </div>
//       ) : (
//         <div className="enquiry-form-container">
//           <h2>Admission Enquiry</h2>
//           <form onSubmit={handleSubmit} className="enquiry-form">
//             <div className="form-group">
//               <label htmlFor="name">Name : <span className="required">*</span></label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="email">Email : <span className="required">*</span></label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="phone">Phone : <span className="required">*</span></label>
//               <input
//                 type="tel"
//                 id="phone"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="age">Student's Age : <span className="required">*</span></label>
//               <input
//                 type="number"
//                 id="age"
//                 name="age"
//                 value={formData.age}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="course">Course : <span className="required">*</span></label>
//               <select
//                 id="course"
//                 name="course"
//                 value={formData.course}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="">Select Course</option>
//                 {coursesTaught.map((course, index) => (
//                   <option key={index} value={course}>{course}</option>
//                 ))}
//               </select>
//             </div>
//             <div className="form-group">
//               <label htmlFor="standard">Student's Standard : <span className="required">*</span></label>
//               <input
//                 type="text"
//                 id="standard"
//                 name="standard"
//                 value={formData.standard}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="message">Address : <span className="required">*</span></label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-buttons">
//               <button type="submit" className="submit-button">Submit</button>
//               <button type="button" className="clear-button" onClick={handleClear}>Clear</button>
//             </div>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdmissionEnquiry;



// import React, { useState } from 'react';
// import axios from 'axios';
// import '../styles/AdmissionEnquiry.css';

// const AdmissionEnquiry = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     age: '',
//     course: [], // To store selected courses
//     standard: '',
//     message: '',
//   });

//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const coursesTaught = [
//     'Brain Gym Exercise',
//     'Brain Mapping',
//     'Right Brain Activation',
//     'Memory Techniques',
//     'Speed Reading',
//     'Creative Thinking',
//     'Drawing',
//   ];

//   // Handles input changes for both text fields and checkboxes
//   const handleChange = (e) => {
//     const { name, value, checked, type } = e.target;

//     if (type === 'checkbox') {
//       setFormData((prevFormData) => ({
//         ...prevFormData,
//         course: checked
//           ? [...prevFormData.course, value] // Add the selected course
//           : prevFormData.course.filter((course) => course !== value), // Remove the unselected course
//       }));
//     } else {
//       setFormData({
//         ...formData,
//         [name]: value,
//       });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/enquiry', formData);
//       console.log('Enquiry submitted:', response.data);
//       setIsSubmitted(true);
//     } catch (error) {
//       console.error('Enquiry submission error:', error.response ? error.response.data : error.message);
//     }
//   };

//   const handleClear = () => {
//     setFormData({
//       name: '',
//       email: '',
//       phone: '',
//       age: '',
//       course: [],
//       standard: '',
//       message: '',
//     });
//   };

//   return (
//     <div className="enquiry-page">
//       {isSubmitted ? (
//         <div className="success-message">
//           <h2>Thank you for your enquiry!</h2>
//           <p>We will get back to you soon.</p>
//         </div>
//       ) : (
//         <div className="enquiry-form-container">
//           <h2>Admission Enquiry</h2>
//           <form onSubmit={handleSubmit} className="enquiry-form">
//             <div className="form-group">
//               <label htmlFor="name">
//                 Name: <span className="required">*</span>
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="email">
//                 Email: <span className="required">*</span>
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="phone">
//                 Phone: <span className="required">*</span>
//               </label>
//               <input
//                 type="tel"
//                 id="phone"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="age">
//                 Student's Age: <span className="required">*</span>
//               </label>
//               <input
//                 type="number"
//                 id="age"
//                 name="age"
//                 value={formData.age}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label>
//                 Course: <span className="required">*</span>
//               </label>
//               <div className="checkbox-group">
//                 {coursesTaught.map((course, index) => (
//                   <div key={index} className="checkbox-item">
//                     <input
//                       type="checkbox"
//                       id={`course-${index}`}
//                       name="course"
//                       value={course}
//                       checked={formData.course.includes(course)}
//                       onChange={handleChange}
//                     />
//                     <label htmlFor={`course-${index}`}>{course}</label>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="form-group">
//               <label htmlFor="standard">
//                 Student's Standard: <span className="required">*</span>
//               </label>
//               <input
//                 type="text"
//                 id="standard"
//                 name="standard"
//                 value={formData.standard}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="message">
//                 Address: <span className="required">*</span>
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-buttons">
//               <button type="submit" className="submit-button">
//                 Submit
//               </button>
//               <button type="button" className="clear-button" onClick={handleClear}>
//                 Clear
//               </button>
//             </div>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdmissionEnquiry;


import React, { useState } from 'react';
import axios from 'axios';
import '../styles/AdmissionEnquiry.css';

const AdmissionEnquiry = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    course: [],
    standard: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const coursesTaught = [
    'Brain Gym Exercise',
    'Brain Mapping',
    'Right Brain Activation',
    'Memory Techniques',
    'Speed Reading',
    'Creative Thinking',
    'Drawing',
  ];

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    if (type === 'checkbox') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        course: checked
          ? [...prevFormData.course, value]
          : prevFormData.course.filter((course) => course !== value),
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/enquiry', formData);
      console.log('Enquiry submitted:', response.data);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Enquiry submission error:', error.response ? error.response.data : error.message);
    }
  };

  const handleClear = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      age: '',
      course: [],
      standard: '',
      message: '',
    });
  };

  return (
    <div className="enquiry-page">
      {isSubmitted ? (
        <div className="success-message">
          <h2>Thank you for your enquiry!</h2>
          <p>We will get back to you soon.</p>
        </div>
      ) : (
        <div className="enquiry-form-container">
          <h2>Admission Form</h2>
          <form onSubmit={handleSubmit} className="enquiry-form">
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
                          value={course}
                          checked={formData.course.includes(course)}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <label htmlFor={`course-${index}`}>{course}</label>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="form-group">
              <label htmlFor="standard">
                Student's Standard: <span className="required">*</span>
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
              <button type="submit" className="submit-button">
                Submit
              </button>
              <button type="button" className="clear-button" onClick={handleClear}>
                Clear
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AdmissionEnquiry;
