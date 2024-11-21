import React from 'react';
import '../../styles/CourseDetail.css';
import paintingImage from '../../assets/painting.jpeg';

const Painting = () => (
  <div className="course-detail-container">
    <img src={paintingImage} alt="Painting" className="course-image" />
    <h1>Painting</h1>
    <p>The Painting course allows students to explore various painting techniques and styles, encouraging artistic expression and creativity.</p>
  </div>
);

export default Painting;
