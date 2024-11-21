import React from 'react';
import '../../styles/CourseDetail.css';
import tutorialImage from '../../assets/tutorial.jpg';

const Tutorial = () => (
  <div className="course-detail-container">
    <img src={tutorialImage} alt="Tutorial" className="course-image" />
    <h1>Tutorial</h1>
    <p>Tutorials provide personalized instruction and support for individual learning needs, focusing on specific topics or skills.</p>
  </div>
);

export default Tutorial;
