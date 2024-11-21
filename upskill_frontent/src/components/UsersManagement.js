





// import React, { useState, useEffect, useCallback } from 'react';
// import axiosInstance from '../uitls/axiosInstance'; // Ensure the correct path for your axios instance
// import '../styles/UsersManagement.css';
// import axios from 'axios';
// const UsersManagement = () => {
//     const [users, setUsers] = useState([]);
//     const [userName, setUserName] = useState('');
//     const [userEmail, setUserEmail] = useState('');
//     const [editingUser, setEditingUser] = useState(null);
//     const [error, setError] = useState('');
//     const [loading, setLoading] = useState(false);

//     // Use useCallback to memoize fetchUsers
//     const fetchUsers = useCallback(async () => {
//         setLoading(true);
//         setError('');
//         try {
//             const response = await axios.get('http://localhost:5000/api/auth')
//             ; // Ensure axiosInstance includes the token
//             setUsers(response.data);
//         } catch (error) {
//             handleError(error); // Handle error
//         } finally {
//             setLoading(false);
//         }
//     }, []); // Empty dependency array to run once

//     useEffect(() => {
//         fetchUsers();
//     }, [fetchUsers]); // Include fetchUsers in dependency array

//     const handleAddUser = async () => {
//         setLoading(true);
//         setError('');
//         try {
//             const newUser = { name: userName, email: userEmail };
//             const response = await axiosInstance.post('/users', newUser);
//             setUsers([...users, response.data]);
//             resetForm();
//         } catch (error) {
//             handleError(error); // Handle error
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleEditUser = (user) => {
//         setEditingUser(user);
//         setUserName(user.name);
//         setUserEmail(user.email);
//     };

//     const handleUpdateUser = async () => {
//         setLoading(true);
//         setError('');
//         try {
//             const updatedUser = { name: userName, email: userEmail };
//             await axiosInstance.put(`/users/${editingUser._id}`, updatedUser);
//             setUsers(users.map(user => user._id === editingUser._id ? { ...user, ...updatedUser } : user));
//             resetForm();
//         } catch (error) {
//             handleError(error); // Handle error
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleDeleteUser = async (id) => {
//         setLoading(true);
//         setError('');
//         try {
//             await axiosInstance.delete(`/users/${id}`);
//             setUsers(users.filter(user => user._id !== id));
//         } catch (error) {
//             handleError(error); // Handle error
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleError = (error) => {
//         if (error.response) {
//             setError(`Error: ${error.response.data.error || error.response.statusText}`);
//             if (error.response.status === 403) {
//                 // Optionally, redirect to login or refresh token logic here
//             }
//         } else if (error.request) {
//             setError('Network error: Please check your connection.');
//         } else {
//             setError('Error: ' + error.message);
//         }
//     };

//     const resetForm = () => {
//         setUserName('');
//         setUserEmail('');
//         setEditingUser(null);
//     };

//     return (
//         <div>
//             <h2>Users Management</h2>

//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             {loading && <p>Loading...</p>}

//             <form onSubmit={(e) => e.preventDefault()} className="user-form">
//                 <input
//                     type="text"
//                     placeholder="User Name"
//                     value={userName}
//                     onChange={(e) => setUserName(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="email"
//                     placeholder="User Email"
//                     value={userEmail}
//                     onChange={(e) => setUserEmail(e.target.value)}
//                     required
//                 />
//                 {editingUser ? (
//                     <button onClick={handleUpdateUser}>Update User</button>
//                 ) : (
//                     <button onClick={handleAddUser}>Add User</button>
//                 )}
//                 {editingUser && <button onClick={resetForm}>Cancel Edit</button>}
//             </form>

//             <table className="user-table">
//                 <thead>
//                     <tr>
//                         <th>User Name</th>
//                         <th>User Email</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map((user) => (
//                         <tr key={user._id}>
//                             <td>{user.name}</td>
//                             <td>{user.email}</td>
//                             <td>
//                                 <button onClick={() => handleEditUser(user)}>Edit</button>
//                                 <button onClick={() => handleDeleteUser(user._id)}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default UsersManagement;









import React, { useState, useEffect, useCallback } from 'react';
import axiosInstance from '../uitls/axiosInstance'; // Ensure the correct path for your axios instance
import '../styles/UsersManagement.css';

const UsersManagement = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    // Use useCallback to memoize fetchUsers
    const fetchUsers = useCallback(async () => {
        setLoading(true);
        setError('');
        try {
            // Updated the URL to /api/users instead of /api/auth
            const response = await axiosInstance.get('/users'); // Make sure this endpoint fetches the user list
            setUsers(response.data);
        } catch (error) {
            handleError(error); // Handle error
        } finally {
            setLoading(false);
        }
    }, []); // Empty dependency array to run once

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]); // Include fetchUsers in dependency array

    const handleDeleteUser = async (id) => {
        setLoading(true);
        setError('');
        try {
            await axiosInstance.delete(`/users/delete/${id}`); // Updated endpoint
            setUsers(users.filter(user => user._id !== id));
        } catch (error) {
            handleError(error); // Handle error
        } finally {
            setLoading(false);
        }
    };

    const handleError = (error) => {
        if (error.response) {
            setError(`Error: ${error.response.data.error || error.response.statusText}`);
            if (error.response.status === 403) {
                // Optionally, redirect to login or refresh token logic here
            }
        } else if (error.request) {
            setError('Network error: Please check your connection.');
        } else {
            setError('Error: ' + error.message);
        }
    };

    return (
        <div>
            <h2>Users Management</h2>

            {error && <p style={{ color: 'red' }}>{error}</p>}
            {loading && <p>Loading...</p>}

            <table className="user-table">
                <thead>
                    <tr>
                        <th>User Name</th>
                        <th>User Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button onClick={() => handleDeleteUser(user._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UsersManagement;
