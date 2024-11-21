






// import React from 'react';
// import '../styles/Staffs.css'; // Import the corresponding CSS file
// import staff1 from '../assets/staff1.jpg'; // Import staff images
// import staff2 from '../assets/staff2.jpg';
// // Continue importing images as needed

// const Staffs = () => {
//   // Array of staff members with their details
//   const staffList = [
//     {
//       id: 1,
//       name: "Dharani",
//       degree: "MSc",
//       image: staff1,
//       courses: [
//         { name: "Brain Gym Exercise", session: "Forenoon" },
//         { name: "Memory Techniques", session: "Afternoon" },
//       ],
//     },
//     {
//       id: 2,
//       name: "Kalaivani",
//       degree: "MCA",
//       image: staff2,
//       courses: [
//         { name: "Creative Thinking", session: "Forenoon" },
//         { name: "Right Brain Activation", session: "Afternoon" },
//       ],
//     },
//     // Add more staff members as needed
//   ];

//   return (
//     <div className="staffs-container">
//       <h2>Our Staff</h2>
//       <div className="staff-list">
//         {staffList.map((staff) => (
//           <div key={staff.id} className="staff-card">
//             <img src={staff.image} alt={staff.name} className="staff-image" />
//             <h3>{staff.name}</h3>
//             <p>{staff.degree}</p>
//             <div className="staff-courses">
//               <h4>Courses Taught:</h4>
//               <ul>
//                 {staff.courses.map((course, index) => (
//                   <li key={index}>
//                     {course.name} - <span>{course.session}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Staffs;

















// import React from 'react';
// import '../styles/Staffs.css'; // Import the corresponding CSS file
// import staff1 from '../assets/staff1.jpg'; // Import staff images
// import staff2 from '../assets/staff2.jpg';
// // Continue importing images as needed

// const Staffs = () => {
//   // Array of staff members with their details
//   const staffList = [
//     {
//       id: 1,
//       name: "Dharani",
//       degree: "MSc",
//       title: "Mrs.", // Title for Dharani
//       image: staff1,
//       contact: "+91 80123 33353", // Contact information
//       courses: [
//         { name: "Brain Gym Exercise", session: "Forenoon" },
//         { name: "Memory Techniques", session: "Afternoon" },
//       ],
//     },
//     {
//       id: 2,
//       name: "Kalaivani",
//       degree: "MCA",
//       title: "Ms.", // Title for Kalaivani
//       image: staff2,
//       contact: "+91 72005 37875", // Contact information
//       courses: [
//         { name: "Creative Thinking", session: "Forenoon" },
//         { name: "Right Brain Activation", session: "Afternoon" },
//       ],
//     },
//     // Add more staff members as needed
//   ];

//   return (
//     <div className="staffs-container">
//       <h2>Our Staff</h2>
//       <div className="staff-list">
//         {staffList.map((staff) => (
//           <div key={staff.id} className="staff-card">
//             <img src={staff.image} alt={staff.name} className="staff-image" />
//             <h3>{staff.title} {staff.name}</h3> {/* Display title dynamically */}
//             <p>{staff.degree}</p>
//             <div className="staff-courses">
//               <h4>Courses Taught:</h4>
//               <ul>
//                 {staff.courses.map((course, index) => (
//                   <li key={index}>
//                     {course.name} - <span>{course.session}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <p><strong>Contact:</strong> {staff.contact}</p> {/* Contact section */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Staffs;







import React from 'react';
import '../styles/Staffs.css'; // Import the corresponding CSS file
import staff1 from '../assets/staff1.jpg'; // Import staff images
import staff2 from '../assets/staff2.jpg';

const Staffs = () => {
  const staffList = [
    {
      id: 1,
      name: "Dharani",
      degree: "MSc",
      title: "Mrs.",
      image: staff1,
      contact: "+91 80123 33353",
      courses: [
        { name: "Brain Gym Exercise" },
        { name: "Memory Techniques" },
        { name: "Speed Reading" },
        { name: "Drawing" },
      ],
    },
    {
      id: 2,
      name: "Kalaivani",
      degree: "MCA",
      title: "Ms.",
      image: staff2,
      contact: "+91 72005 37875",
      courses: [
        { name: "Creative Thinking" },
        { name: "Right Brain Activation" },
        { name: "Brain Mapping" },
        { name: "Advanced Memory Techniques" },
      ],
    },
  ];

  return (
    <div className="staffs-container">
      <h2>Our Staff</h2>
      <div className="staff-list">
        {staffList.map((staff) => (
          <div key={staff.id} className="staff-card">
            <img src={staff.image} alt={staff.name} className="staff-image" />
            <h3>{staff.title} {staff.name}</h3>
            <p>{staff.degree}</p>
            <div className="staff-courses">
              <h4>Courses Taught:</h4>
              <ul>
                {staff.courses.map((course, index) => (
                  <li key={index}>{course.name}</li>
                ))}
              </ul>
            </div>
            <p><strong>Contact:</strong> {staff.contact}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Staffs;
