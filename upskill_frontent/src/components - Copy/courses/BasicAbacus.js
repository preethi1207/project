import React from 'react';
import '../../styles/CourseDetail.css';
import basicAbacusImage from '../../assets/basicAbacus.jpeg';

const BasicAbacus = () => (
  <div className="course-detail-container">
    <img src={basicAbacusImage} alt="Basic Abacus" className="course-image" />
    <h1>Basic Abacus</h1>
    <p>The Basic Abacus course introduces beginners to the abacus, teaching essential counting and arithmetic skills in an interactive manner.</p>
  </div>
);

export default BasicAbacus;
