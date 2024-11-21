import React from 'react';
import '../../styles/CourseDetail.css';
import rightBrainImage from '../../assets/rightBrain.jpeg';

const RightBrain = () => (
  <div className="course-detail-container">
    <img src={rightBrainImage} alt="Right Brain Activation" className="course-image" />
    <h1>Right Brain Activation</h1>
    <p>Right Brain Activation enhances creativity and problem-solving skills by stimulating the right side of the brain, which is associated with imagination and artistic abilities.</p>
  </div>
);

export default RightBrain;
