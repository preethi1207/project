import React from 'react';
import '../../styles/CourseDetail.css';
import memoryTechniquesImage from '../../assets/memoryTechniques.webp';

const MemoryTechniques = () => (
  <div className="course-detail-container">
    <img src={memoryTechniquesImage} alt="Memory Techniques" className="course-image" />
    <h1>Memory Techniques</h1>
    <p>Memory Techniques involve strategies to improve memory retention and recall, such as mnemonics, visualization, and other memory-boosting exercises.</p>
  </div>
);

export default MemoryTechniques;
