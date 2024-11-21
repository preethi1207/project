// import React from 'react';

// const AddStaff = ({ onAddStaff, newStaff, setNewStaff }) => {
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewStaff((prevStaff) => ({ ...prevStaff, [name]: value }));
//   };

//   const handleAdd = () => {
//     onAddStaff();
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         name="name"
//         value={newStaff.name}
//         onChange={handleInputChange}
//         placeholder="Enter staff name"
//       />
//       <input
//         type="text"
//         name="degree"
//         value={newStaff.degree}
//         onChange={handleInputChange}
//         placeholder="Enter staff degree"
//       />
//       <button onClick={handleAdd}>Add Staff</button>
//     </div>
//   );
// };

// export default AddStaff;


import React, { useState } from 'react';
import axios from 'axios';

const AddStaff = ({ onAddStaff }) => {
  const [newStaff, setNewStaff] = useState({ name: '', degree: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStaff((prevStaff) => ({ ...prevStaff, [name]: value }));
  };

  const handleAdd = async () => {
    if (!newStaff.name.trim() || !newStaff.degree.trim()) {
      setError('All fields are required');
      return;
    }

    try {
      setLoading(true);
      setError('');
      const token = localStorage.getItem('adminToken');
      const response = await axios.post(
        'http://localhost:5000/api/admin/add-staff',
        newStaff,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      onAddStaff(response.data); // Notify the parent component
      setNewStaff({ name: '', degree: '' });
    } catch (error) {
      setError('Error adding staff. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h3>Add New Staff</h3>
      {error && <p className="error">{error}</p>}
      <input
        type="text"
        name="name"
        value={newStaff.name}
        onChange={handleInputChange}
        placeholder="Enter staff name"
      />
      <input
        type="text"
        name="degree"
        value={newStaff.degree}
        onChange={handleInputChange}
        placeholder="Enter staff degree"
      />
      <button onClick={handleAdd} disabled={loading}>
        {loading ? 'Adding...' : 'Add Staff'}
      </button>
    </div>
  );
};

export default AddStaff;
