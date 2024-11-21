// import React, { useState, useEffect, useCallback } from 'react';
// import axios from 'axios';
// import '../styles/AdminManagement.css';

// const AdminManagement = () => {
//     const [admins, setAdmins] = useState([]);
//     const [adminEmail, setAdminEmail] = useState('');
//     const [adminPassword, setAdminPassword] = useState('');
//     const [editingAdmin, setEditingAdmin] = useState(null);
//     const [error, setError] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [isMounted, setIsMounted] = useState(false);

//     // Refresh token if expired
//     const handleTokenRefresh = useCallback(async () => {
//         try {
//             const refreshToken = localStorage.getItem('refreshToken');
//             const refreshResponse = await axios.post('http://localhost:5000/api/admin/refresh-token', {
//                 refreshToken,
//             });

//             localStorage.setItem('adminToken', refreshResponse.data.accessToken);
//             await fetchAdmins(); // Fetch admins after refreshing token
//         } catch (error) {
//             setError('Session expired. Please log in again.');
//             localStorage.removeItem('adminToken');
//             localStorage.removeItem('refreshToken');
//             console.error('Error refreshing token:', error.message);
//         }
//     }, []); // No dependencies needed here

//     // Fetch all admins with Authorization header
//     const fetchAdmins = useCallback(async () => {
//         setLoading(true);
//         setError('');
//         try {
//             const token = localStorage.getItem('adminToken');
//             if (!token) {
//                 setError('Authentication required. Please log in.');
//                 return;
//             }

//             const response = await axios.get('http://localhost:5000/api/admin/get-admins', {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             });

//             console.log('Admins:', response.data);
//             if (isMounted) {
//                 setAdmins(response.data);
//             }
//         } catch (error) {
//             if (error.response && error.response.data.message === 'Token expired') {
//                 await handleTokenRefresh(); // Call handleTokenRefresh if token is expired
//             } else {
//                 setError('Error fetching admins. Please try again.');
//                 console.error('Error fetching admins:', error.response ? error.response.data : error.message);
//             }
//         } finally {
//             if (isMounted) {
//                 setLoading(false);
//             }
//         }
//     }, [handleTokenRefresh, isMounted]); // Include handleTokenRefresh here

//     // Fetch admins on component load
//     useEffect(() => {
//         setIsMounted(true);
//         fetchAdmins();

//         // Cleanup function
//         return () => setIsMounted(false);
//     }, [fetchAdmins]);

//     // Add a new admin
//     const handleAddAdmin = async () => {
//         setLoading(true);
//         setError('');

//         if (!adminEmail || !adminPassword) {
//             setError('Email and password are required.');
//             setLoading(false);
//             return;
//         }

//         try {
//             const token = localStorage.getItem('adminToken');
//             const newAdmin = { email: adminEmail, password: adminPassword };

//             const response = await axios.post('http://localhost:5000/api/admin/add-admin', newAdmin, {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             });

//             if (isMounted) {
//                 setAdmins(prevAdmins => [...prevAdmins, response.data]);
//                 resetForm();
//             }
//         } catch (error) {
//             setError('Error adding admin. Please try again.');
//         } finally {
//             if (isMounted) {
//                 setLoading(false);
//             }
//         }
//     };

//     // Edit an existing admin
//     const handleEditAdmin = (admin) => {
//         setEditingAdmin(admin);
//         setAdminEmail(admin.email);
//         setAdminPassword(''); // Clear password field on edit
//     };

//     // Update the admin
//     const handleUpdateAdmin = async () => {
//         setLoading(true);
//         setError('');

//         try {
//             const token = localStorage.getItem('adminToken');
//             const updatedAdmin = { email: adminEmail, password: adminPassword };

//             await axios.put(`http://localhost:5000/api/admin/update-admin/${editingAdmin._id}`, updatedAdmin, {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             });

//             if (isMounted) {
//                 setAdmins(prevAdmins =>
//                     prevAdmins.map(admin => admin._id === editingAdmin._id ? { ...admin, email: adminEmail } : admin)
//                 );
//                 resetForm();
//             }
//         } catch (error) {
//             setError('Error updating admin. Please try again.');
//         } finally {
//             if (isMounted) {
//                 setLoading(false);
//             }
//         }
//     };

//     // Delete an admin
//     const handleDeleteAdmin = async (id) => {
//         setLoading(true);
//         setError('');

//         try {
//             const token = localStorage.getItem('adminToken');
//             await axios.delete(`http://localhost:5000/api/admin/delete-admin/${id}`, {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             });

//             if (isMounted) {
//                 setAdmins(prevAdmins => prevAdmins.filter(admin => admin._id !== id));
//             }
//         } catch (error) {
//             setError('Error deleting admin. Please try again.');
//         } finally {
//             if (isMounted) {
//                 setLoading(false);
//             }
//         }
//     };

//     // Reset form inputs
//     const resetForm = () => {
//         setAdminEmail('');
//         setAdminPassword('');
//         setEditingAdmin(null);
//     };

//     return (
//         <div>
//             <h2>Admin Management</h2>

//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             {loading && <p>Loading...</p>}

//             <form onSubmit={(e) => e.preventDefault()} className="admin-form">
//                 <input
//                     type="email"
//                     placeholder="Admin Email"
//                     value={adminEmail}
//                     onChange={(e) => setAdminEmail(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="password"
//                     placeholder="Admin Password"
//                     value={adminPassword}
//                     onChange={(e) => setAdminPassword(e.target.value)}
//                     required={!editingAdmin}
//                 />

//                 {editingAdmin ? (
//                     <button onClick={handleUpdateAdmin} disabled={loading}>Update Admin</button>
//                 ) : (
//                     <button onClick={handleAddAdmin} disabled={loading}>Add Admin</button>
//                 )}

//                 {editingAdmin && <button onClick={resetForm} disabled={loading}>Cancel Edit</button>}
//             </form>

//             {admins.length > 0 ? (
//                 <table className="admin-table">
//                     <thead>
//                         <tr>
//                             <th>Email</th>
//                             <th>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {admins.map((admin) => (
//                             <tr key={admin._id}>
//                                 <td>{admin.email}</td>
//                                 <td>
//                                     <button onClick={() => handleEditAdmin(admin)} disabled={loading}>Edit</button>
//                                     <button onClick={() => handleDeleteAdmin(admin._id)} disabled={loading}>Delete</button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             ) : (
//                 <p>No admins found.</p>
//             )}
//         </div>
//     );
// };

// export default AdminManagement;











// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const AdminManagement = () => {
//     const [admins, setAdmins] = useState([]);
//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [newAdmin, setNewAdmin] = useState({ email: '', password: '' });
//     const [editingAdmin, setEditingAdmin] = useState(null);

//     useEffect(() => {
//         const fetchAdmins = async () => {
//             try {
//                 const response = await axios.get('http://localhost:5000/api/get-admins');
//                 setAdmins(response.data);
//             } catch (error) {
//                 setError('Failed to fetch admins');
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchAdmins();
//     }, []);

//     const handleAddAdmin = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:5000/api/add-admin', newAdmin);
//             setAdmins([...admins, response.data]);
//             setNewAdmin({ email: '', password: '' }); // Reset form
//         } catch (error) {
//             setError('Failed to add admin');
//         }
//     };

//     const handleDelete = async (adminId) => {
//         try {
//             await axios.delete(`http://localhost:5000/api/delete-admin/${adminId}`);
//             setAdmins(admins.filter((admin) => admin._id !== adminId)); // Update UI
//         } catch (error) {
//             setError('Failed to delete admin');
//         }
//     };

//     const handleEdit = (admin) => {
//         setEditingAdmin(admin); // Set the admin to be edited
//     };

//     const handleUpdateAdmin = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.put(`http://localhost:5000/api/update-admin/${editingAdmin._id}`, editingAdmin);
//             setAdmins(admins.map((admin) => (admin._id === response.data._id ? response.data : admin)));
//             setEditingAdmin(null); // Reset edit mode
//         } catch (error) {
//             setError('Failed to update admin');
//         }
//     };

//     return (
//         <div>
//             <h2>Admin Management</h2>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             {loading ? <p>Loading...</p> : (
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Email</th>
//                             <th>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {admins.map((admin) => (
//                             <tr key={admin._id}>
//                                 <td>{admin.email}</td>
//                                 <td>
//                                     <button onClick={() => handleEdit(admin)}>Edit</button>
//                                     <button onClick={() => handleDelete(admin._id)}>Delete</button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             )}

//             {/* Form for adding a new admin */}
//             <h3>Add Admin</h3>
//             <form onSubmit={handleAddAdmin}>
//                 <input
//                     type="email"
//                     value={newAdmin.email}
//                     placeholder="Email"
//                     onChange={(e) => setNewAdmin({ ...newAdmin, email: e.target.value })}
//                     required
//                 />
//                 <input
//                     type="password"
//                     value={newAdmin.password}
//                     placeholder="Password"
//                     onChange={(e) => setNewAdmin({ ...newAdmin, password: e.target.value })}
//                     required
//                 />
//                 <button type="submit">Add Admin</button>
//             </form>

//             {/* Form for editing an admin */}
//             {editingAdmin && (
//                 <div>
//                     <h3>Edit Admin</h3>
//                     <form onSubmit={handleUpdateAdmin}>
//                         <input
//                             type="email"
//                             value={editingAdmin.email}
//                             onChange={(e) => setEditingAdmin({ ...editingAdmin, email: e.target.value })}
//                             required
//                         />
//                         <input
//                             type="password"
//                             value={editingAdmin.password}
//                             placeholder="New Password"
//                             onChange={(e) => setEditingAdmin({ ...editingAdmin, password: e.target.value })}
//                         />
//                         <button type="submit">Update Admin</button>
//                         <button onClick={() => setEditingAdmin(null)}>Cancel</button>
//                     </form>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default AdminManagement;











import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/AdminManagement.css'; // Your CSS file

const AdminManagement = () => {
    const [admins, setAdmins] = useState([]);
    const [adminEmail, setAdminEmail] = useState('');
    const [adminPassword, setAdminPassword] = useState('');
    const [editingAdmin, setEditingAdmin] = useState(null); // Handle editing state
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    // Fetch admins on component load
    useEffect(() => {
        fetchAdmins();
    }, []);

    // Fetch all admins with Authorization header
    const fetchAdmins = async () => {
        setLoading(true); // Set loading state
        try {
            const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
            const response = await axios.get('http://localhost:5000/api/admin/get-admins', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            console.log('Admins:', response.data);
            setAdmins(response.data); // Set the fetched admins into state
        } catch (error) {
            console.error('Error fetching admins:', error.response ? error.response.data : error.message);
            setError('Error fetching admins. Please try again.'); // Set an error message
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    // Add a new admin
    const handleAddAdmin = async () => {
        setLoading(true);
        setError('');

        if (!adminEmail || !adminPassword) {
            setError('Email and password are required.');
            setLoading(false);
            return;
        }

        try {
            const token = localStorage.getItem('token'); // Ensure token is attached
            const newAdmin = { email: adminEmail, password: adminPassword };

            const response = await axios.post('http://localhost:5000/api/admin/add-admin', newAdmin, {
                headers: {
                    Authorization: `Bearer ${token}`, // Attach token
                },
            });

            setAdmins([...admins, response.data]); // Add new admin to state
            resetForm();
        } catch (error) {
            setError('Error adding admin. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    // Edit an existing admin
    const handleEditAdmin = (admin) => {
        setEditingAdmin(admin);
        setAdminEmail(admin.email);
    };

    // Update the admin
    const handleUpdateAdmin = async () => {
        setLoading(true);
        setError('');

        try {
            const token = localStorage.getItem('token');
            const updatedAdmin = { email: adminEmail, password: adminPassword };

            await axios.put(`http://localhost:5000/api/admin/update-admin/${editingAdmin._id}`, updatedAdmin, {
                headers: {
                    Authorization: `Bearer ${token}`, // Attach token
                },
            });

            setAdmins(admins.map(admin => admin._id === editingAdmin._id ? { ...admin, email: adminEmail } : admin));
            resetForm();
        } catch (error) {
            setError('Error updating admin. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    // Delete an admin
    const handleDeleteAdmin = async (id) => {
        setLoading(true);
        setError('');

        try {
            const token = localStorage.getItem('token');
            await axios.delete(`http://localhost:5000/api/admin/delete-admin/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`, // Attach token
                },
            });

            setAdmins(admins.filter(admin => admin._id !== id)); // Remove admin from the state
        } catch (error) {
            setError('Error deleting admin. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    // Reset form inputs
    const resetForm = () => {
        setAdminEmail('');
        setAdminPassword('');
        setEditingAdmin(null);
    };

    return (
        <div>
            <h2>Admin Management</h2>

            {error && <p style={{ color: 'red' }}>{error}</p>}
            {loading && <p>Loading...</p>}

            {/* Admin Form */}
            <form onSubmit={(e) => e.preventDefault()} className="admin-form">
                <input
                    type="email"
                    placeholder="Admin Email"
                    value={adminEmail}
                    onChange={(e) => setAdminEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Admin Password"
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                    required={!editingAdmin} // Only required when adding new admin
                />

                {editingAdmin ? (
                    <button onClick={handleUpdateAdmin}>Update Admin</button>
                ) : (
                    <button onClick={handleAddAdmin}>Add Admin</button>
                )}

                {editingAdmin && <button onClick={resetForm}>Cancel Edit</button>}
            </form>

            {/* Admin List in Table */}
            <table className="admin-table">
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {admins.map((admin) => (
                        <tr key={admin._id}>
                            <td>{admin.email}</td>
                            <td>
                                <button onClick={() => handleEditAdmin(admin)}>Edit</button>
                                <button onClick={() => handleDeleteAdmin(admin._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminManagement;
