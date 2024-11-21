import React from 'react';
import '../../styles/CourseDetail.css';
import artsAndCraftsImage from '../../assets/artsAndCrafts.jpeg';

const ArtsAndCrafts = () => (
  <div className="course-detail-container">
    <img src={artsAndCraftsImage} alt="Arts and Crafts" className="course-image" />
    <h1>Arts and Crafts</h1>
    <p>Arts and Crafts classes are designed to foster creativity and provide hands-on experience with various art projects and craft-making activities.</p>
  </div>
);

export default ArtsAndCrafts;
