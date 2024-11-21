// import React, { useState } from 'react';
// import '../styles/About.css';

// import img1 from '../assets/img1.jpg';
// import img2 from '../assets/img2.jpg';
// import img3 from '../assets/img3.jpg';
// import img4 from '../assets/img4.jpg';
// import img5 from '../assets/img5.jpg';
// import img6 from '../assets/img6.jpg';
// import img7 from '../assets/img7.jpg';
// import img8 from '../assets/img8.jpg';
// import img9 from '../assets/img9.jpg';
// import img10 from '../assets/img10.jpg';
// import img11 from '../assets/img11.jpg';
// import img12 from '../assets/img12.jpg';
// import img13 from '../assets/img13.jpg';
// import img14 from '../assets/img14.jpg';
// import img15 from '../assets/img15.jpg';

// function About() {
//   const [showAll, setShowAll] = useState(false);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedImage, setSelectedImage] = useState('');

//   const images = [
//     img1, img2, img3, img4, img5, 
//     img6, img7, img8, img9, img10, 
//     img11, img12, img13, img14, img15
//   ];

//   const handleToggle = () => {
//     setShowAll(!showAll);
//   };

//   const handleImageClick = (img) => {
//     setSelectedImage(img);
//     setModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setModalOpen(false);
//     setSelectedImage('');
//   };

//   const visibleImages = showAll ? images : images.slice(0, 4);

//   return (
//     <div className="about-container">
//       <h1>About Us</h1>
//       <p>
//         Welcome to Upskill Academy, where we focus on empowering kids through comprehensive and innovative learning experiences. 
//         Our mission is to bridge the gap between knowledge and practical skills, ensuring our young students are well-prepared for their future endeavors.
//       </p>
//       <p>
//         At Upskill Academy, we offer a wide range of courses designed to cater to the diverse learning needs of children. 
//         From brain exercises to advanced memory techniques, our programs are tailored to help kids enhance their cognitive abilities and achieve personal growth.
//       </p>
//       <p>
//         Our experienced instructors are dedicated to providing high-quality education, using the latest teaching methods and tools. 
//         We strive to create a supportive and engaging learning environment where children can thrive and reach their full potential.
//       </p>
//       <p>
//         Our courses and activities include Brain Gym Exercise, Brain Mapping, Right Brain Activation, Memory Techniques, Speed Reading, Creative Thinking, Cube Training, and Advanced Memory Techniques. 
//         These activities offer numerous benefits, such as improved concentration, enhanced creativity, better memory retention, and faster learning skills, which are essential for a child's academic and personal development.
//       </p>
//       <div className="image-gallery">
//         {visibleImages.map((img, index) => (
//           <img 
//             key={index} 
//             src={img} 
//             alt={`Upskill Academy ${index + 1}`} 
//             onClick={() => handleImageClick(img)}
//           />
//         ))}
//       </div>
//       {images.length > 4 && (
//         <div className="toggle-button">
//           <button onClick={handleToggle}>
//             {showAll ? "Show Less" : `+ more photos (${images.length - 4})`}
//           </button>
//         </div>
//       )}
//       {modalOpen && (
//         <div className="modal" onClick={handleCloseModal}>
//           <span className="close">&times;</span>
//           <img className="modal-content" src={selectedImage} alt="Full Screen" />
//         </div>
//       )}
//     </div>
//   );
// }

// export default About;


import React, { useState, useEffect } from 'react';
import '../styles/About.css';

import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';
import img7 from '../assets/img7.jpg';
import img8 from '../assets/img8.jpg';
import img9 from '../assets/img9.jpg';
import img10 from '../assets/img10.jpg';
import img11 from '../assets/img11.jpg';
import img12 from '../assets/img12.jpg';
import img13 from '../assets/img13.jpg';
import img14 from '../assets/img14.jpg';
import img15 from '../assets/img15.jpg';

function About() {
  const [showAll, setShowAll] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    img1, img2, img3, img4, img5, 
    img6, img7, img8, img9, img10, 
    img11, img12, img13, img14, img15
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  const handleImageClick = (img) => {
    setSelectedImage(img);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedImage('');
  };

  const visibleImages = images;//showAll ? images : images.slice(0, 4);

  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to Upskill Academy, where we focus on empowering kids through comprehensive and innovative learning experiences. 
        Our mission is to bridge the gap between knowledge and practical skills, ensuring our young students are well-prepared for their future endeavors.
      </p>
      <p>
        At Upskill Academy, we offer a wide range of courses designed to cater to the diverse learning needs of children. 
        From brain exercises to advanced memory techniques, our programs are tailored to help kids enhance their cognitive abilities and achieve personal growth.
      </p>
      <p>
        Our experienced instructors are dedicated to providing high-quality education, using the latest teaching methods and tools. 
        We strive to create a supportive and engaging learning environment where children can thrive and reach their full potential.
      </p>
      <p>
        Our courses and activities include Brain Gym Exercise, Brain Mapping, Right Brain Activation, Memory Techniques, Speed Reading, Creative Thinking, Cube Training, and Advanced Memory Techniques. 
        These activities offer numerous benefits, such as improved concentration, enhanced creativity, better memory retention, and faster learning skills, which are essential for a child's academic and personal development.
      </p>
      <div className="image-gallery">
        {visibleImages.map((img, index) => (
          <img 
            key={index} 
            src={img} 
            alt={`Upskill Academy ${index + 1}`} 
            className={img === selectedImage ? 'active' : ''}
            onClick={() => handleImageClick(img)}
            style={{ filter: img === selectedImage ? 'none' : 'grayscale(100%)' }}
          />
        ))}
      </div>
      {images.length > 11 && (
        <div className="toggle-button">
          {/* <button onClick={handleToggle}>
            {showAll ? "Show Less" : `+ more photos (${images.length - 4})`}
          </button> */}
        </div>
      )}
      {modalOpen && (
        <div className="modal" onClick={handleCloseModal}>
          <span className="close">&times;</span>
          <img className="modal-content" src={selectedImage} alt="Full Screen" />
        </div>
      )}
    </div>
  );
}

export default About;
