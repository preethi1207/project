// import React, { useState } from 'react';
// import '../styles/Course.css';
// import brainGymImage from '../assets/brainGym.jpeg'; // Replace with actual paths for images
// import brainMappingImage from '../assets/brainMapping.png';
// import rightBrainImage from '../assets/rightBrain.jpeg';
// import memoryTechniquesImage from '../assets/memoryTechniques.webp';
// import speedReadingImage from '../assets/speedReading.jpeg';
// import creativeThinkingImage from '../assets/creativeThinking.jpeg';
// import drawingImage from '../assets/drawing.jpeg';
// import cubeTrainingImage from '../assets/cubeTraining.jpeg'; // Add more images as needed
// import advancedMemoryImage from '../assets/advanceMemory.jpeg';
// import artsAndCraftsImage from '../assets/artsAndCrafts.jpeg';
// import classesImage from '../assets/classes.jpeg';
// import tutorialImage from '../assets/tutorial.jpg';
// import abacusImage from '../assets/abacus.jpeg';
// import basicAbacusImage from '../assets/basicAbacus.jpeg';
// import paintingImage from '../assets/painting.jpeg';

// const Course = () => {
//   const [showAll, setShowAll] = useState(false);
//   const [clickedCourse, setClickedCourse] = useState(null);
//   const [activeSection, setActiveSection] = useState(null);

//   const coursesTaught = [
//     { name: "Brain Gym Exercise", description: "Brain Mapping for Kids Academy is like a super cool adventure for your brain! Just like how a treasure map shows where to find hidden treasures, brain mapping helps us understand how our brains work and learn new things.", image: brainGymImage },
//     { name: "Brain Mapping", description: "Brain Mapping for Kids Academy is like a super cool adventure for your brain! Just like how a treasure map shows where to find hidden treasures, brain mapping helps us understand how our brains work and learn new things.", image: brainMappingImage },
//     { name: "Right Brain Activation", description: "Right brain activation means using activities that help make the right side of your brain more active. The right side of your brain is great at things like imagining, creating art, solving problems in new ways, and understanding big pictures.", image: rightBrainImage },
//     { name: "Memory Techniques", description: "Description for Memory Techniques", image: memoryTechniquesImage },
//     { name: "Speed Reading", description: "Description for Speed Reading", image: speedReadingImage },
//     { name: "Creative Thinking", description: "Description for Creative Thinking", image: creativeThinkingImage },
//     { name: "Drawing", description: "Description for Drawing", image: drawingImage },
//   ];

//   const classesFor = [
//     { name: "Cube Training", description: "To enhance cognitive and physical abilities through the use of cube-shaped tools and exercises. Solving puzzles with cubes.", image: cubeTrainingImage },
//     { name: "Advanced Memory Techniques", description: "We’ll explore fun and creative ways to make information stick in your brain, like using mind maps, memory games, and cool visualization techniques.", image: advancedMemoryImage },
//     { name: "Arts and Crafts", description: "Art and Craft Class is a blast of creativity! Create amazing art projects and crafts, including painting, drawing, and building.", image: artsAndCraftsImage },
//   ];

//   const trainingTypes = [
//     { name: "Classes", description: "Description for Classes", image: classesImage },
//     { name: "Tutorial", description: "Description for Tutorial", image: tutorialImage },
//   ];

//   const kidsCourses = [
//     { name: "Abacus", description: "Description for Abacus", image: abacusImage },
//     { name: "Basic Abacus", description: "Description for Basic Abacus", image: basicAbacusImage },
//     { name: "Painting", description: "Description for Painting", image: paintingImage },
//   ];

//   const handleViewAll = () => {
//     setShowAll(!showAll);
//   };

//   const handleClick = (course) => {
//     setClickedCourse(clickedCourse === course ? null : course);
//   };

//   const handleSectionClick = (section) => {
//     setActiveSection(activeSection === section ? null : section);
//   };

//   const renderCourses = (courses, showAll) => (
//     <table>
//       <tbody>
//         {courses.slice(0, showAll ? courses.length : 3).map((course, index) => (
//           <tr
//             key={index}
//             onClick={() => handleClick(course)}
//           >
//             <td><span role="img" aria-label="check">✔️</span></td>
//             <td>{course.name}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );

//   return (
//     <div className="course-container">
//       <div className="course-content">
//         <div 
//           className={`course-section ${activeSection === 'Courses Taught' ? 'active' : ''}`}
//           onClick={() => handleSectionClick('Courses Taught')}
//         >
//           <h2>Courses Taught</h2>
//           {activeSection === 'Courses Taught' && renderCourses(coursesTaught, showAll)}
//         </div>
//         <div 
//           className={`course-section ${activeSection === 'Classes for' ? 'active' : ''}`}
//           onClick={() => handleSectionClick('Classes for')}
//         >
//           <h2>Classes for</h2>
//           {activeSection === 'Classes for' && renderCourses(classesFor, showAll)}
//         </div>
//         <div 
//           className={`course-section ${activeSection === 'Training Type' ? 'active' : ''}`}
//           onClick={() => handleSectionClick('Training Type')}
//         >
//           <h2>Training Type</h2>
//           {activeSection === 'Training Type' && renderCourses(trainingTypes, showAll)}
//         </div>
//         <div 
//           className={`course-section ${activeSection === 'Kids Courses' ? 'active' : ''}`}
//           onClick={() => handleSectionClick('Kids Courses')}
//         >
//           <h2>Kids Courses</h2>
//           {activeSection === 'Kids Courses' && renderCourses(kidsCourses, showAll)}
//         </div>
//       </div>
//       <div className="view-all-button">
//         <button onClick={handleViewAll}>{showAll ? "Show Less" : "View All"}</button>
//       </div>
//       {clickedCourse && (
//         <div className="course-description-container">
//           <img src={clickedCourse.image} alt={clickedCourse.name} className="course-image" />
//           <h3>{clickedCourse.name}</h3>
//           <p>{clickedCourse.description}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Course;


// import React, { useState } from 'react';
// import '../styles/Course.css';
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
// import classesImage from '../assets/classes.jpeg';
// import tutorialImage from '../assets/tutorial.jpg';
// import abacusImage from '../assets/abacus.jpeg';
// import basicAbacusImage from '../assets/basicAbacus.jpeg';
// import paintingImage from '../assets/painting.jpeg';

// const Course = () => {
//   const [showAll, setShowAll] = useState(false);
//   const [clickedCourse, setClickedCourse] = useState(null);
//   const [activeSection, setActiveSection] = useState(null);

//   const coursesTaught = [
//     { name: "Brain Gym Exercise", description: "Brain Mapping for Kids Academy is like a super cool adventure for your brain! Just like how a treasure map shows where to find hidden treasures, brain mapping helps us understand how our brains work and learn new things.", image: brainGymImage },
//     { name: "Brain Mapping", description: "Brain Mapping for Kids Academy is like a super cool adventure for your brain! Just like how a treasure map shows where to find hidden treasures, brain mapping helps us understand how our brains work and learn new things.", image: brainMappingImage },
//     { name: "Right Brain Activation", description: "Right brain activation means using activities that help make the right side of your brain more active. The right side of your brain is great at things like imagining, creating art, solving problems in new ways, and understanding big pictures.", image: rightBrainImage },
//     { name: "Memory Techniques", description: "Description for Memory Techniques", image: memoryTechniquesImage },
//     { name: "Speed Reading", description: "Description for Speed Reading", image: speedReadingImage },
//     { name: "Creative Thinking", description: "Description for Creative Thinking", image: creativeThinkingImage },
//     { name: "Drawing", description: "Description for Drawing", image: drawingImage },
//   ];

//   const classesFor = [
//     { name: "Cube Training", description: "To enhance cognitive and physical abilities through the use of cube-shaped tools and exercises. Solving puzzles with cubes.", image: cubeTrainingImage },
//     { name: "Advanced Memory Techniques", description: "We’ll explore fun and creative ways to make information stick in your brain, like using mind maps, memory games, and cool visualization techniques.", image: advancedMemoryImage },
//     { name: "Arts and Crafts", description: "Art and Craft Class is a blast of creativity! Create amazing art projects and crafts, including painting, drawing, and building.", image: artsAndCraftsImage },
//   ];

//   const trainingTypes = [
//     { name: "Classes", description: "Description for Classes", image: classesImage },
//     { name: "Tutorial", description: "Description for Tutorial", image: tutorialImage },
//   ];

//   const kidsCourses = [
//     { name: "Abacus", description: "Description for Abacus", image: abacusImage },
//     { name: "Basic Abacus", description: "Description for Basic Abacus", image: basicAbacusImage },
//     { name: "Painting", description: "Description for Painting", image: paintingImage },
//   ];

//   const handleViewAll = () => {
//     setShowAll(!showAll);
//   };

//   const handleClick = (course) => {
//     setClickedCourse(clickedCourse === course ? null : course);
//   };

//   const handleSectionClick = (section) => {
//     setActiveSection(activeSection === section ? null : section);
//   };

//   const renderCourses = (courses, showAll) => (
//     <table>
//       <tbody>
//         {courses.slice(0, showAll ? courses.length : 3).map((course, index) => (
//           <tr
//             key={index}
//             onClick={() => handleClick(course)}
//           >
//             <td><span role="img" aria-label="check">✔️</span></td>
//             <td>{course.name}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );

//   return (
//     <div className="course-container">
//       {clickedCourse && (
//         <div className="course-description-container">
//           <img src={clickedCourse.image} alt={clickedCourse.name} className="course-image" />
//           <h3>{clickedCourse.name}</h3>
//           <p>{clickedCourse.description}</p>
//         </div>
//       )}
//       <div className="course-content">
//         <div 
//           className={`course-section ${activeSection === 'Courses Taught' ? 'active' : ''}`}
//           onClick={() => handleSectionClick('Courses Taught')}
//         >
//           <h2>Courses Taught</h2>
//           {activeSection === 'Courses Taught' && renderCourses(coursesTaught, showAll)}
//         </div>
//         <div 
//           className={`course-section ${activeSection === 'Classes for' ? 'active' : ''}`}
//           onClick={() => handleSectionClick('Classes for')}
//         >
//           <h2>Classes for</h2>
//           {activeSection === 'Classes for' && renderCourses(classesFor, showAll)}
//         </div>
//         <div 
//           className={`course-section ${activeSection === 'Training Type' ? 'active' : ''}`}
//           onClick={() => handleSectionClick('Training Type')}
//         >
//           <h2>Training Type</h2>
//           {activeSection === 'Training Type' && renderCourses(trainingTypes, showAll)}
//         </div>
//         <div 
//           className={`course-section ${activeSection === 'Kids Courses' ? 'active' : ''}`}
//           onClick={() => handleSectionClick('Kids Courses')}
//         >
//           <h2>Kids Courses</h2>
//           {activeSection === 'Kids Courses' && renderCourses(kidsCourses, showAll)}
//         </div>
//       </div>
//       <div className="view-all-button">
//         <button onClick={handleViewAll}>{showAll ? "Show Less" : "View All"}</button>
//       </div>
//     </div>
//   );
// };

// export default Course;
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Course.css';

const Course = () => {
  const coursesTaught = [
    { name: "Brain Gym Exercise", path: "/courses/brain-gym" },
    { name: "Brain Mapping", path: "/courses/brain-mapping" },
    { name: "Right Brain Activation", path: "/courses/right-brain" },
    { name: "Memory Techniques", path: "/courses/memory-techniques" },
    { name: "Speed Reading", path: "/courses/speed-reading" },
    { name: "Creative Thinking", path: "/courses/creative-thinking" },
    { name: "Drawing", path: "/courses/drawing" },
  ];

  const classesFor = [
    { name: "Cube Training", path: "/courses/cube-training" },
    { name: "Advanced Memory Techniques", path: "/courses/advanced-memory" },
    { name: "Arts and Crafts", path: "/courses/arts-and-crafts" },
  ];

  const trainingTypes = [
    { name: "Classes", path: "/courses/classes" },
    { name: "Tutorial", path: "/courses/tutorial" },
  ];

  const kidsCourses = [
    { name: "Abacus", path: "/courses/abacus" },
    { name: "Basic Abacus", path: "/courses/basic-abacus" },
    { name: "Painting", path: "/courses/painting" },
  ];

  const renderCourses = (courses) => (
    <table>
      <tbody>
        {courses.map((course, index) => (
          <tr key={index}>
            <td><span role="img" aria-label="check">✔️</span></td>
            <td><Link to={course.path}>{course.name}</Link></td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div className="course-container">
      <div className="course-content">
        <div className="course-section">
          <h2>Courses Taught</h2>
          {renderCourses(coursesTaught)}
        </div>
        <div className="course-section">
          <h2>Classes for</h2>
          {renderCourses(classesFor)}
        </div>
        <div className="course-section">
          <h2>Training Type</h2>
          {renderCourses(trainingTypes)}
        </div>
        <div className="course-section">
          <h2>Kids Courses</h2>
          {renderCourses(kidsCourses)}
        </div>
      </div>
    </div>
  );
};

export default Course;
