import React, { useState } from 'react';

const AddAdminForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const addAdmin = async (adminData) => {
    try {
      const response = await fetch('http://localhost:5000/api/admins/add-admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(adminData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }

      const newAdmin = await response.json();
      setSuccess('Admin added successfully');
      console.log('Admin added successfully:', newAdmin);
    } catch (error) {
      setError(error.message);
      console.error('Error adding admin:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const adminData = { email, password };
    addAdmin(adminData);
  };

  return (
    <div>
      <h2>Add Admin</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Admin</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  );
};

export default AddAdminForm;
