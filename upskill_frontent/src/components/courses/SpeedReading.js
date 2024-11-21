import React from 'react';
import '../../styles/CourseDetail.css';
import speedReadingImage from '../../assets/speedReading.jpeg';

const SpeedReading = () => (
  <div className="course-detail-container">
    <img src={speedReadingImage} alt="Speed Reading" className="course-image" />
    <h1>Speed Reading</h1>
    <p>Speed Reading techniques help you read faster and comprehend more by improving your reading skills and reducing the time spent on each page.</p>
  </div>
);

export default SpeedReading;
