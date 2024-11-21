import React from 'react';
import '../../styles/CourseDetail.css';
import abacusImage from '../../assets/abacus.jpeg';

const Abacus = () => (
  <div className="course-detail-container">
    <img src={abacusImage} alt="Abacus" className="course-image" />
    <h1>Abacus</h1>
    <p>The Abacus course teaches foundational arithmetic skills using the traditional counting tool, enhancing mathematical understanding and mental calculation.</p>
  </div>
);

export default Abacus;

