import React from 'react';
import '../../styles/CourseDetail.css';
import classesImage from '../../assets/classes.jpeg';

const Classes = () => (
  <div className="course-detail-container">
    <img src={classesImage} alt="Classes" className="course-image" />
    <h1>Classes</h1>
    <p>Classes offer structured learning environments for various subjects, providing educational instruction and interactive activities.</p>
  </div>
);

export default Classes;
