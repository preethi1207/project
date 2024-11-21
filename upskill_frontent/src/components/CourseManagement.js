


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../styles/CourseMange.css'; // Ensure this CSS file exists

// const CourseManagement = () => {
//     const [courses, setCourses] = useState([]);
//     const [error, setError] = useState(null);
//     const [newCourse, setNewCourse] = useState({ name: '', fees: '', image: null }); // State for new course input
//     const [editMode, setEditMode] = useState(false); // Toggle between Add and Edit
//     const [editCourse, setEditCourse] = useState({ _id: '', name: '', fees: '', image: null }); // State for course being edited

//     useEffect(() => {
//         const fetchCourses = async () => {
//             try {
//                 const response = await axios.get('http://localhost:5000/api/courses');
//                 setCourses(response.data);
//             } catch (error) {
//                 setError('Failed to fetch courses');
//             }
//         };
//         fetchCourses();
//     }, []);

//     // Handle deleting a course
//     const handleDeleteCourse = async (id) => {
//         if (window.confirm("Are you sure you want to delete this course?")) {
//             try {
//                 await axios.delete(`http://localhost:5000/api/courses/delete-course/${id}`);
//                 setCourses(courses.filter(course => course._id !== id)); // Remove deleted course from state
//             } catch (error) {
//                 setError('Failed to delete course: ' + error.message);
//             }
//         }
//     };

//     // Handle adding a new course
//     const handleAddCourse = async (e) => {
//         e.preventDefault(); // Prevent the form from refreshing the page
//         const formData = new FormData();
//         formData.append('name', newCourse.name);
//         formData.append('fees', newCourse.fees);
//         formData.append('image', newCourse.image); // Append the image file

//         try {
//             const response = await axios.post('http://localhost:5000/api/courses/add-course', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data', // Set the content type for file upload
//                 },
//             });
//             setCourses([...courses, response.data]); // Add the new course to the existing list
//             setNewCourse({ name: '', fees: '', image: null }); // Reset the form fields
//         } catch (error) {
//             setError('Failed to add course: ' + error.message);
//         }
//     };

//     // Handle editing a course (populate the form with the course details)
//     const handleEditCourse = (course) => {
//         setEditMode(true); // Set edit mode to true
//         setEditCourse({ _id: course._id, name: course.name, fees: course.fees, image: null }); // Pre-fill the form
//     };

//     // Handle updating a course
//     const handleUpdateCourse = async (e) => {
//         e.preventDefault();
//         const formData = new FormData();
//         formData.append('name', editCourse.name);
//         formData.append('fees', editCourse.fees);
//         if (editCourse.image) {
//             formData.append('image', editCourse.image); // Append the image file if updated
//         }

//         try {
//             const response = await axios.put(`http://localhost:5000/api/courses/update-course/${editCourse._id}`, formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data', // Set the content type for file upload
//                 },
//             });
//             // Update the course list
//             setCourses(courses.map(course => course._id === editCourse._id ? response.data : course));
//             setEditMode(false); // Exit edit mode
//             setEditCourse({ _id: '', name: '', fees: '', image: null }); // Reset the form fields
//         } catch (error) {
//             setError('Failed to update course: ' + error.message);
//         }
//     };

//     return (
//         <div>
//             <h2>Course Management</h2>
//             {error && <p style={{ color: 'red' }}>{error}</p>}

//             {/* Form to add or edit a course */}
//             <form className="course-form" onSubmit={editMode ? handleUpdateCourse : handleAddCourse}>
//                 <input
//                     type="text"
//                     placeholder="Course Name"
//                     value={editMode ? editCourse.name : newCourse.name}
//                     onChange={(e) => editMode ? setEditCourse({ ...editCourse, name: e.target.value }) : setNewCourse({ ...newCourse, name: e.target.value })}
//                     required
//                 />
//                 <input
//                     type="number"
//                     placeholder="Course Fees"
//                     value={editMode ? editCourse.fees : newCourse.fees}
//                     onChange={(e) => editMode ? setEditCourse({ ...editCourse, fees: e.target.value }) : setNewCourse({ ...newCourse, fees: e.target.value })}
//                     required
//                 />
//                 <input
//                     type="file"
//                     accept="image/*" // Allow only image files
//                     onChange={(e) => editMode ? setEditCourse({ ...editCourse, image: e.target.files[0] }) : setNewCourse({ ...newCourse, image: e.target.files[0] })}
//                 />
//                 <button type="submit">{editMode ? 'Update Course' : 'Add Course'}</button>
//                 {editMode && <button type="button" onClick={() => setEditMode(false)}>Cancel Edit</button>}
//             </form>

//             <table className="course-table">
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Fees</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {courses.map((course) => (
//                         <tr key={course._id}>
//                             <td>{course.name}</td>
//                             <td>{course.fees}</td>
//                             <td>
//                                 <button onClick={() => handleEditCourse(course)}>Edit</button>
//                                 <button onClick={() => handleDeleteCourse(course._id)}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default CourseManagement;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/CourseMange.css'; // Ensure this CSS file exists

const CourseManagement = () => {
    const [courses, setCourses] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false); // Loading state
    const [newCourse, setNewCourse] = useState({ name: '', fees: '', image: null });
    const [editMode, setEditMode] = useState(false);
    const [editCourse, setEditCourse] = useState({ _id: '', name: '', fees: '', image: null });

    useEffect(() => {
        const fetchCourses = async () => {
            setLoading(true); // Start loading
            try {
                const response = await axios.get('http://localhost:5000/api/courses');
                setCourses(response.data);
            } catch (error) {
                setError('Failed to fetch courses: ' + error.message);
            } finally {
                setLoading(false); // End loading
            }
        };
        fetchCourses();
    }, []);

    const handleDeleteCourse = async (id) => {
        if (window.confirm("Are you sure you want to delete this course?")) {
            setLoading(true);
            try {
                await axios.delete(`http://localhost:5000/api/courses/delete-course/${id}`);
                setCourses(courses.filter(course => course._id !== id));
            } catch (error) {
                setError('Failed to delete course: ' + error.message);
            } finally {
                setLoading(false);
            }
        }
    };

    const handleAddCourse = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', newCourse.name);
        formData.append('fees', newCourse.fees);
        formData.append('image', newCourse.image);

        setLoading(true);
        try {
            const response = await axios.post('http://localhost:5000/api/courses/add-course', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setCourses([...courses, response.data]);
            setNewCourse({ name: '', fees: '', image: null });
        } catch (error) {
            setError('Failed to add course: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleEditCourse = (course) => {
        setEditMode(true);
        setEditCourse({ _id: course._id, name: course.name, fees: course.fees, image: null });
    };

    const handleUpdateCourse = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', editCourse.name);
        formData.append('fees', editCourse.fees);
        if (editCourse.image) {
            formData.append('image', editCourse.image);
        }

        setLoading(true);
        try {
            const response = await axios.put(`http://localhost:5000/api/courses/update-course/${editCourse._id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setCourses(courses.map(course => (course._id === editCourse._id ? response.data : course)));
            setEditMode(false);
            setEditCourse({ _id: '', name: '', fees: '', image: null });
        } catch (error) {
            setError('Failed to update course: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Course Management</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {loading && <p>Loading...</p>} {/* Loading state */}

            <form className="course-form" onSubmit={editMode ? handleUpdateCourse : handleAddCourse}>
                <input
                    type="text"
                    placeholder="Course Name"
                    value={editMode ? editCourse.name : newCourse.name}
                    onChange={(e) => editMode ? setEditCourse({ ...editCourse, name: e.target.value }) : setNewCourse({ ...newCourse, name: e.target.value })}
                    required
                />
                <input
                    type="number"
                    placeholder="Course Fees"
                    value={editMode ? editCourse.fees : newCourse.fees}
                    onChange={(e) => editMode ? setEditCourse({ ...editCourse, fees: e.target.value }) : setNewCourse({ ...newCourse, fees: e.target.value })}
                    required
                />
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => editMode ? setEditCourse({ ...editCourse, image: e.target.files[0] }) : setNewCourse({ ...newCourse, image: e.target.files[0] })}
                />
                <button type="submit">{editMode ? 'Update Course' : 'Add Course'}</button>
                {editMode && <button type="button" onClick={() => setEditMode(false)}>Cancel Edit</button>}
            </form>

            <table className="course-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Fees</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course) => (
                        <tr key={course._id}>
                            <td>{course.name}</td>
                            <td>{course.fees}</td>
                            <td>
                                <button onClick={() => handleEditCourse(course)}>Edit</button>
                                <button onClick={() => handleDeleteCourse(course._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CourseManagement;
