import React from 'react';
import '../../styles/CourseDetail.css';
import cubeTrainingImage from '../../assets/cubeTraining.jpeg';

const CubeTraining = () => (
  <div className="course-detail-container">
    <img src={cubeTrainingImage} alt="Cube Training" className="course-image" />
    <h1>Cube Training</h1>
    <p>Cube Training involves solving cube puzzles to enhance cognitive and physical skills, improving problem-solving and spatial reasoning abilities.</p>
  </div>
);

export default CubeTraining;
