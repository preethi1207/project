import React from 'react';
import '../../styles/CourseDetail.css';
import advancedMemoryImage from '../../assets/advanceMemory.jpeg';

const AdvancedMemory = () => (
  <div className="course-detail-container">
    <img src={advancedMemoryImage} alt="Advanced Memory Techniques" className="course-image" />
    <h1>Advanced Memory Techniques</h1>
    <p>Advanced Memory Techniques delve into more complex strategies for enhancing memory, including advanced visualization and recall methods.</p>
  </div>
);

export default AdvancedMemory;
