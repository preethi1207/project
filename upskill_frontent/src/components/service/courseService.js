// src/services/courseService.js

import axios from 'axios';

// Define the base URL for the API
const API_URL = 'http://localhost:5000/api/admin';

// Function to add a new course
export const addCourse = async (courseData) => {
  const token = localStorage.getItem('adminToken');
  try {
    const response = await axios.post(`${API_URL}/add-course`, courseData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data; // Return the added course data
  } catch (error) {
    throw error.response ? error.response.data : new Error('Failed to add course');
  }
};

// Function to update a course
export const updateCourse = async (courseId, updatedData) => {
  const token = localStorage.getItem('adminToken');
  try {
    const response = await axios.put(`${API_URL}/update-course/${courseId}`, updatedData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data; // Return the updated course data
  } catch (error) {
    throw error.response ? error.response.data : new Error('Failed to update course');
  }
};

// Function to delete a course
export const deleteCourse = async (courseId) => {
  const token = localStorage.getItem('adminToken');
  try {
    await axios.delete(`${API_URL}/delete-course/${courseId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return courseId; // Return the deleted course ID
  } catch (error) {
    throw error.response ? error.response.data : new Error('Failed to delete course');
  }
};

// Function to fetch all courses
export const fetchCourses = async () => {
  const token = localStorage.getItem('adminToken');
  try {
    const response = await axios.get(`${API_URL}/get-data`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.courses || [];
  } catch (error) {
    throw error.response ? error.response.data : new Error('Failed to fetch courses');
  }
};
