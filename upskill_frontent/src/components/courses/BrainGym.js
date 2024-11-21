import React from 'react';
import '../../styles/CourseDetail.css';
import brainGymImage from '../../assets/brainGym.jpeg';

const BrainGym = () => (
  <div className="course-detail-container">
    <img src={brainGymImage} alt="Brain Gym Exercise" className="course-image" />
    <h1>Brain Gym Exercise</h1>
    <p>Brain Gym Exercise helps improve your brain's coordination and enhances learning abilities through physical exercises that engage both the left and right sides of the brain.</p>
  </div>
);

export default BrainGym;
