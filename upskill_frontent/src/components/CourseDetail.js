// src/components/CourseDetail.js

import React, { useEffect, useState } from 'react';

const CourseDetail = ({ courseId }) => {
  const [course, setCourse] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch(`/api/courses/${courseId}`);
        if (!response.ok) {
          throw new Error('Error fetching course: ' + response.statusText);
        }
        const courseData = await response.json();
        setCourse(courseData);
      } catch (error) {
        setError(error.message);
        console.error('Fetch error:', error);
      }
    };

    if (courseId) {
      fetchCourse();
    }
  }, [courseId]);

  if (error) return <div>Error: {error}</div>;
  if (!course) return <div>Loading...</div>;

  return (
    <div>
      <h1>{course.name}</h1>
      <p>{course.description}</p>
      {/* Add more course details as needed */}
    </div>
  );
};

export default CourseDetail;
