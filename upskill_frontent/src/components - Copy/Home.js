// import React, { useState } from 'react';
// import '../styles/Home.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhone } from '@fortawesome/free-solid-svg-icons';

// const Home = () => {
//   const [showNumber, setShowNumber] = useState(false);

//   const handleShowNumberClick = () => setShowNumber(!showNumber);

//   return (
//     <div className="home">
//       <div className="video-container">
//         <video autoPlay loop muted>
//           <source src={require('../assets/bg_video1.mp4')} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>
//       <div className="content">
//         <h1 className="academy-info">UPSKILL ACADEMY</h1>
//         <div className="rating"></div>
//         <div className="address">
//           <p>Perundurai HO, Perundurai</p>
//           <p>Open until 7:00 pm · 2 Years in Business</p>
//         </div>
//         <div className="auth-buttons">
//           <button className="show-number" onClick={handleShowNumberClick}>
//             <FontAwesomeIcon icon={faPhone} />
//             {showNumber ? '' : 'Show Number'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;


import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faUserGraduate, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const [showNumber, setShowNumber] = useState(false);
  const [studentCount, setStudentCount] = useState(0);
  const [teacherCount, setTeacherCount] = useState(0);

  const handleShowNumberClick = () => setShowNumber(!showNumber);

  // Function to increment counts dynamically
  useEffect(() => {
    let studentTarget = 60;
    let teacherTarget = 5;
    let studentInterval, teacherInterval;

    // Increment students count
    studentInterval = setInterval(() => {
      setStudentCount((prev) => {
        if (prev < studentTarget) {
          return prev + 1;
        } else {
          clearInterval(studentInterval);
          return prev;
        }
      });
    }, 50); // Adjust speed of the count animation

    // Increment teachers count
    teacherInterval = setInterval(() => {
      setTeacherCount((prev) => {
        if (prev < teacherTarget) {
          return prev + 1;
        } else {
          clearInterval(teacherInterval);
          return prev;
        }
      });
    }, 200); // Adjust speed of the count animation

    // Cleanup intervals when component unmounts
    return () => {
      clearInterval(studentInterval);
      clearInterval(teacherInterval);
    };
  }, []);

  return (
    <div className="home">
      <div className="video-container">
        <video autoPlay loop muted>
          <source src={require('../assets/bg_video1.mp4')} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="content">
        <h1 className="academy-info">UPSKILL ACADEMY</h1>
        <div className="rating"></div>
        <div className="address">
          <p>Perundurai HO, Perundurai</p>
          <p>Open until 7:00 pm · 2 Years in Business</p>
        </div>
        <div className="auth-buttons">
          <button className="show-number" onClick={handleShowNumberClick}>
            <FontAwesomeIcon icon={faPhone} />
            {showNumber ? ' 07947142823' : 'Show Number'}
          </button>
        </div>
        <div className="counts">
          <div className="count-item">
            <FontAwesomeIcon icon={faUserGraduate} className="count-icon" />
            <span className="count-number">{studentCount}</span>
            <span className="count-label">Students</span>
          </div>
          <div className="count-item">
            <FontAwesomeIcon icon={faChalkboardTeacher} className="count-icon" />
            <span className="count-number">{teacherCount}</span>
            <span className="count-label">Teachers</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
