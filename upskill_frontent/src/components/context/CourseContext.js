// src/context/CourseContext.js

import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/courses');
            setCourses(response.data);
        } catch (error) {
            console.error('Error fetching courses:', error);
        }
    };

    const addCourse = (newCourse) => {
        setCourses([...courses, newCourse]);
    };

    const updateCourse = (updatedCourse) => {
        setCourses(courses.map(course => (course._id === updatedCourse._id ? updatedCourse : course)));
    };

    const deleteCourse = (id) => {
        setCourses(courses.filter(course => course._id !== id));
    };

    return (
        <CourseContext.Provider value={{ courses, addCourse, updateCourse, deleteCourse }}>
            {children}
        </CourseContext.Provider>
    );
};
