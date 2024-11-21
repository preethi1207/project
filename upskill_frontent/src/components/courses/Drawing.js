import React from 'react';
import '../../styles/CourseDetail.css';
import drawingImage from '../../assets/drawing.jpeg';

const Drawing = () => (
  <div className="course-detail-container">
    <img src={drawingImage} alt="Drawing" className="course-image" />
    <h1>Drawing</h1>
    <p>Drawing classes help develop artistic skills and improve hand-eye coordination through various drawing techniques and practices.</p>
  </div>
);

export default Drawing;
