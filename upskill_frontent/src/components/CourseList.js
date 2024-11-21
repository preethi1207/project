// src/components/CourseList.js

import React from 'react';
import { Link } from 'react-router-dom';

const CourseList = ({ courses }) => {
  return (
    <div>
      {courses.map(course => (
        <div key={course._id}>
          <h2>{course.name}</h2>
          <Link to={`/courses/${course._id}`}>
            <button>View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
