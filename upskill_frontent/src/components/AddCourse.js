// // src/components/AddCourse.js

// import React, { useState } from 'react';
// import axios from 'axios';
// import '../styles/AddCouse.css'; // Create a CSS file for styling this component

// const AddCourse = ({ onCourseAdded }) => {
//   const [courseName, setCourseName] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleAddCourse = async () => {
//     if (!courseName.trim()) {
//       setError('Course name cannot be empty');
//       return;
//     }

//     try {
//       setLoading(true);
//       setError('');
//       const token = localStorage.getItem('adminToken');
//       const response = await axios.post(
//         'http://localhost:5000/api/admin/add-course',
//         { name: courseName },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       onCourseAdded(response.data); // Callback function to notify the parent component
//       setCourseName('');
//     } catch (error) {
//       setError('Error adding course. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="add-course">
//       <h3>Add New Course</h3>
//       {error && <p className="error">{error}</p>}
//       <input
//         type="text"
//         value={courseName}
//         onChange={(e) => setCourseName(e.target.value)}
//         placeholder="Enter new course name"
//       />
//       <button onClick={handleAddCourse} disabled={loading}>
//         {loading ? 'Adding...' : 'Add Course'}
//       </button>
//     </div>
//   );
// };

// export default AddCourse;


import React, { useState } from 'react';
import axios from 'axios';
import '../styles/AddCourse.css'; // Corrected the typo from 'AddCouse.css' to 'AddCourse.css'

const AddCourse = ({ onCourseAdded }) => {
  const [courseName, setCourseName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAddCourse = async () => {
    if (!courseName.trim()) {
      setError('Course name cannot be empty');
      return;
    }

    try {
      setLoading(true);
      setError('');
      const token = localStorage.getItem('adminToken');
      const response = await axios.post(
        'http://localhost:5000/api/admin/add-course',
        { name: courseName },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      onCourseAdded(response.data); // Notify the parent component
      setCourseName('');
    } catch (error) {
      setError('Error adding course. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-course">
      <h3>Add New Course</h3>
      {error && <p className="error">{error}</p>}
      <input
        type="text"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
        placeholder="Enter new course name"
      />
      <button onClick={handleAddCourse} disabled={loading}>
        {loading ? 'Adding...' : 'Add Course'}
      </button>
    </div>
  );
};

export default AddCourse;
