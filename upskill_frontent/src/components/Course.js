

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../styles/Course.css';

// // Static images
// import brainGymImage from '../assets/brainGym.jpeg'; 
// import brainMappingImage from '../assets/brainMapping.png';
// import rightBrainImage from '../assets/rightBrain.jpeg';
// import memoryTechniquesImage from '../assets/memoryTechniques.webp';
// import speedReadingImage from '../assets/speedReading.jpeg';
// import creativeThinkingImage from '../assets/creativeThinking.jpeg';
// import drawingImage from '../assets/drawing.jpeg';
// import cubeTrainingImage from '../assets/cubeTraining.jpeg'; 
// import advancedMemoryImage from '../assets/advanceMemory.jpeg';
// import artsAndCraftsImage from '../assets/artsAndCrafts.jpeg';
// import summerCampImage from '../assets/summercamp.jpg';

// const Course = () => {
//   const [courses, setCourses] = useState([]);
//   const [clickedCourse, setClickedCourse] = useState(null);
//   const [activeSection, setActiveSection] = useState('Courses Taught'); // Default to the first section

//   useEffect(() => {
//     fetchCourses();
//   }, []);

//   const fetchCourses = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/courses');
//       setCourses(response.data);
//     } catch (error) {
//       console.error('Error fetching courses:', error);
//     }
//   };

//   const staticCourses = {
//     'Courses Taught': [
//       { name: "Brain Gym Exercise", description: "Brain Mapping for Kids Academy is like a super cool adventure for your brain!", image: brainGymImage, fees: '₹800' }, 
//       { name: "Brain Mapping", description: "Brain Mapping helps us understand how our brains work and learn new things.", image: brainMappingImage, fees: '₹850' },
//       { name: "Right Brain Activation", description: "The right side of your brain is great at things like imagining and creating art.", image: rightBrainImage, fees: '₹900' },
//       { name: "Memory Techniques", description: "Description for Memory Techniques", image: memoryTechniquesImage, fees: '₹750' },
//       { name: "Speed Reading", description: "Description for Speed Reading", image: speedReadingImage, fees: '₹780' },
//       { name: "Creative Thinking", description: "Description for Creative Thinking", image: creativeThinkingImage, fees: '₹820' },
//       { name: "Drawing", description: "Description for Drawing", image: drawingImage, fees: '₹720' },
//     ],
//     'Classes for': [
//       { name: "Cube Training", description: "Enhance cognitive and physical abilities through cube-shaped tools.", image: cubeTrainingImage, fees: '₹800' },
//       { name: "Advanced Memory Techniques", description: "Explore fun ways to make information stick using mind maps and games.", image: advancedMemoryImage, fees: '₹850' },
//       { name: "Arts and Crafts", description: "Create amazing art projects including painting and drawing.", image: artsAndCraftsImage, fees: '₹750' },
//     ],
//     'Summer Camp': [
//       { name: "Summer Camp Program", description: "Join us for a fun-filled summer camp experience!", image: summerCampImage }
//     ]
//   };

//   // Merging static and dynamic courses based on categories
//   const mergedCourses = { ...staticCourses };

//   courses.forEach((course) => {
//     const category = course.category;
//     if (mergedCourses[category]) {
//       mergedCourses[category].push(course); // Add dynamic courses to the respective category
//     }
//   });

//   const handleCourseClick = (course) => {
//     setClickedCourse(clickedCourse === course ? null : course); // Toggle course details on click
//   };

//   const handleSectionClick = (section) => {
//     setActiveSection(activeSection === section ? null : section); // Toggle section details
//   };

//   const renderCourses = (courses) => (
//     <div className="course-grid">
//       {courses.map((course, index) => (
//         <div key={index} className="course-item" onClick={() => handleCourseClick(course)}>
//           {course.name}
//         </div>
//       ))}
//     </div>
//   );

//   const renderCourseDetails = () => {
//     if (clickedCourse) {
//       return (
//         <div className="course-description-container">
//           <img src={clickedCourse.image} alt={clickedCourse.name} className="course-image" />
//           <h3>{clickedCourse.name}</h3>
//           <p>{clickedCourse.description}</p>
//           {clickedCourse.fees && <p><strong>Fees:</strong> {clickedCourse.fees}</p>}
//         </div>
//       );
//     }
//     return null;
//   };

//   const categories = ['Courses Taught', 'Classes for', 'Summer Camp'];

//   return (
//     <div className="course-container">
//       {renderCourseDetails()}
//       <div className="course-content">
//         {categories.map((category) => (
//           <div 
//             key={category}
//             className={`course-section ${activeSection === category ? 'active' : ''}`}
//             onClick={() => handleSectionClick(category)}
//           >
//             <h2>{category}</h2>
//             {activeSection === category && (
//               renderCourses(mergedCourses[category])
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Course;








import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Course.css';

// Static images
import brainGymImage from '../assets/brainGym.jpeg'; 
import brainMappingImage from '../assets/brainMapping.png';
import rightBrainImage from '../assets/rightBrain.jpeg';
import memoryTechniquesImage from '../assets/memoryTechniques.webp';
import speedReadingImage from '../assets/speedReading.jpeg';
import creativeThinkingImage from '../assets/creativeThinking.jpeg';
import drawingImage from '../assets/drawing.jpeg';
import cubeTrainingImage from '../assets/cubeTraining.jpeg'; 
import advancedMemoryImage from '../assets/advanceMemory.jpeg';
import artsAndCraftsImage from '../assets/artsAndCrafts.jpeg';
import summerCampImage from '../assets/summercamp.jpg';

const Course = () => {
  const [courses, setCourses] = useState([]);
  const [clickedCourse, setClickedCourse] = useState(null);
  const [activeSection, setActiveSection] = useState('Courses Taught'); // Default to the first section

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/courses');
      setCourses(response.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const staticCourses = {
    'Courses Taught': [
      { name: "Brain Gym Exercise", description: "Brain Mapping for Kids Academy is like a super cool adventure for your brain!", image: brainGymImage, fees: 800 }, 
      { name: "Brain Mapping", description: "Brain Mapping helps us understand how our brains work and learn new things.", image: brainMappingImage, fees: 850 },
      { name: "Right Brain Activation", description: "The right side of your brain is great at things like imagining and creating art.", image: rightBrainImage, fees: 900 },
      { name: "Memory Techniques", description: "Description for Memory Techniques", image: memoryTechniquesImage, fees: 750 },
      { name: "Speed Reading", description: "Description for Speed Reading", image: speedReadingImage, fees: 780 },
      { name: "Creative Thinking", description: "Description for Creative Thinking", image: creativeThinkingImage, fees: 820 },
      { name: "Drawing", description: "Description for Drawing", image: drawingImage, fees: 720 },
    ],
    'Classes for': [
      { name: "Cube Training", description: "Enhance cognitive and physical abilities through cube-shaped tools.", image: cubeTrainingImage, fees: 800 },
      { name: "Advanced Memory Techniques", description: "Explore fun ways to make information stick using mind maps and games.", image: advancedMemoryImage, fees: 850 },
      { name: "Arts and Crafts", description: "Create amazing art projects including painting and drawing.", image: artsAndCraftsImage, fees: 750 },
    ],
    'Summer Camp': [
      { name: "Summer Camp Program", description: "Join us for a fun-filled summer camp experience!", image: summerCampImage }
    ]
  };

  // Merging static and dynamic courses based on categories
  const mergedCourses = { ...staticCourses };

  courses.forEach((course) => {
    const category = course.category;
    if (mergedCourses[category]) {
      mergedCourses[category].push(course); // Add dynamic courses to the respective category
    }
  });

  const handleCourseClick = (course) => {
    setClickedCourse(clickedCourse === course ? null : course); // Toggle course details on click
  };

  const handleSectionClick = (section) => {
    setActiveSection(activeSection === section ? null : section); // Toggle section details
  };

  const renderCourses = (courses) => (
    <div className="course-grid">
      {courses.map((course, index) => (
        <div key={index} className="course-item" onClick={() => handleCourseClick(course)}>
          {course.name}
        </div>
      ))}
    </div>
  );

  // const renderCourseDetails = () => {
  //   if (clickedCourse) {
  //     return (
  //       <div className="course-description-container">
  //         <img src={clickedCourse.image} alt={clickedCourse.name} className="course-image" />
  //         <h3>{clickedCourse.name}</h3>
  //         <p>{clickedCourse.description}</p>
  //         {clickedCourse.fees && <p><strong>Fees:</strong> ₹{clickedCourse.fees}</p>} {/* Fees displayed here */}
  //       </div>
  //     );
  //   }
  //   return null;
  // };
  const renderCourseDetails = () => {
    if (clickedCourse) {
      return (
        <div className="course-description-container">
          <img src={clickedCourse.image} alt={clickedCourse.name} className="course-image" />
          <h3>{clickedCourse.name}</h3>
          <p>{clickedCourse.description}</p>
          {clickedCourse.fees && (
            <p>
              <strong>Fees:</strong> ₹{clickedCourse.fees} <em>(per month)</em> {/* Add "per month" */}
            </p>
          )}
        </div>
      );
    }
    return null;
  };
  
  const categories = ['Courses Taught', 'Classes for', 'Summer Camp'];

  return (
    <div className="course-container">
      {renderCourseDetails()}
      <div className="course-content">
        {categories.map((category) => (
          <div 
            key={category}
            className={`course-section ${activeSection === category ? 'active' : ''}`}
            onClick={() => handleSectionClick(category)}
          >
            <h2>{category}</h2>
            {activeSection === category && (
              renderCourses(mergedCourses[category])
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;
