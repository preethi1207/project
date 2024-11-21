import React from 'react';
import '../../styles/CourseDetail.css';
import creativeThinkingImage from '../../assets/creativeThinking.jpeg';

const CreativeThinking = () => (
  <div className="course-detail-container">
    <img src={creativeThinkingImage} alt="Creative Thinking" className="course-image" />
    <h1>Creative Thinking</h1>
    <p>Creative Thinking encourages out-of-the-box ideas and innovative problem-solving by engaging your imagination and fostering originality.</p>
  </div>
);

export default CreativeThinking;
