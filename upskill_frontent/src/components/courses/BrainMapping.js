import React from 'react';
import '../../styles/CourseDetail.css';
import brainMappingImage from '../../assets/brainMapping.png';

const BrainMapping = () => (
  <div className="course-detail-container">
    <img src={brainMappingImage} alt="Brain Mapping" className="course-image" />
    <h1>Brain Mapping</h1>
    <p>Brain Mapping helps us understand the different areas of the brain and how they work together. It’s like a detailed map that shows how different parts of the brain contribute to various functions.</p>
  </div>
);

export default BrainMapping;
