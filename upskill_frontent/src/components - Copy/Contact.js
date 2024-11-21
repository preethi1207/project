// import React, { useEffect, useState } from 'react';
// import '../styles/Contact.css'; // Ensure this path is correct based on your project structure

// const Contact = () => {
//   const [isOpen, setIsOpen] = useState(true);

//   // Function to get the current time in IST (UTC+5:30)
//   const getCurrentISTTime = () => {
//     const currentTime = new Date();
//     // Convert to IST by adding 5 hours and 30 minutes
//     const istOffset = 5.5 * 60 * 60 * 1000; // IST offset in milliseconds
//     const utcTime = currentTime.getTime() + currentTime.getTimezoneOffset() * 60 * 1000; // Convert current time to UTC
//     const istTime = new Date(utcTime + istOffset);
//     return istTime;
//   };

//   // Function to check the current time and update the isOpen state based on IST
//   const checkOpeningHours = () => {
//     const istTime = getCurrentISTTime();
//     const currentHour = istTime.getHours();
//     setIsOpen(currentHour < 19); // Sets to true if before 7 pm IST (19:00)
//   };

//   useEffect(() => {
//     checkOpeningHours();
//     const interval = setInterval(checkOpeningHours, 60000); // Check every minute
//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, []);

//   return (
//     <div className="contact-container">
//       {/* Column 1: Address and Phone */}
//       <div className="contact-column address-column">
//         <div className="icon-container">
//           <i className="fas fa-school"></i> {/* School icon */}
//         </div>
//         <p className="address-text">
//           <strong>Upskill Academy</strong> <br />
//           No 231/5, KanjiKoil Road, Perundurai HO, <br />
//           Perundurai - 638052<br />
//           (Thiruvenkidam Palayam)
//         </p>
//         <p className="phone">
//           <i className="fas fa-phone-alt"></i> 07947142823
//         </p>
//       </div>

//       {/* Column 2: Social Media Links */}
//       <div className="contact-column social-links-column">
//         <h3>Useful Links</h3>
//         <div className="social-icons">
//           <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
//             <i className="fab fa-instagram"></i>
//           </a>
//           <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
//             <i className="fab fa-facebook"></i>
//           </a>
//           <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
//             <i className="fab fa-whatsapp"></i>
//           </a>
//           <a href="mailto:info@upskillacademy.com" target="_blank" rel="noopener noreferrer">
//             <i className="fas fa-envelope"></i> {/* Email icon */}
//           </a>
//         </div>
//       </div>

//       {/* Column 3: Opening Hours */}
//       <div className="contact-column hours-column">
//         <h3>Opening Hours</h3>
//         <p className="open-status" style={{ color: isOpen ? 'green' : 'red' }}>
//           {isOpen ? 'Open until 7:00 pm IST' : 'Closed after 7:00 pm IST'}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Contact;


// import React, { useEffect, useState } from 'react';
// import '../styles/Contact.css'; // Ensure this path is correct based on your project structure

// const Contact = () => {
//   const [isOpen, setIsOpen] = useState(true);
//   const [mapVisible, setMapVisible] = useState(false);

//   // Function to get the current time in IST (UTC+5:30)
//   const getCurrentISTTime = () => {
//     const currentTime = new Date();
//     // Convert to IST by adding 5 hours and 30 minutes
//     const istOffset = 5.5 * 60 * 60 * 1000; // IST offset in milliseconds
//     const utcTime = currentTime.getTime() + currentTime.getTimezoneOffset() * 60 * 1000; // Convert current time to UTC
//     const istTime = new Date(utcTime + istOffset);
//     return istTime;
//   };

//   // Function to check the current time and update the isOpen state based on IST
//   const checkOpeningHours = () => {
//     const istTime = getCurrentISTTime();
//     const currentHour = istTime.getHours();
//     setIsOpen(currentHour < 19); // Sets to true if before 7 pm IST (19:00)
//   };

//   useEffect(() => {
//     checkOpeningHours();
//     const interval = setInterval(checkOpeningHours, 60000); // Check every minute
//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, []);

//   return (
//     <div className="contact-container">
//       {/* Column 1: Address and Phone */}
//       <div className="contact-column address-column">
//         <div className="icon-container">
//           <i className="fas fa-school"></i> {/* School icon */}
//         </div>
//         <p className="address-text">
//           <strong>Upskill Academy</strong> <br />
//           No 231/5, KanjiKoil Road, Perundurai HO, <br />
//           Perundurai - 638052<br />
//           (Thiruvenkidam Palayam)
//         </p>
//         <p className="phone">
//           <i className="fas fa-phone-alt"></i> 07947142823
//         </p>
//       </div>

//       {/* Column 2: Social Media Links */}
//       <div className="contact-column social-links-column">
//         <h3>Useful Links</h3>
//         <div className="social-icons">
//           <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
//             <i className="fab fa-instagram"></i>
//           </a>
//           <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
//             <i className="fab fa-facebook"></i>
//           </a>
//           <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
//             <i className="fab fa-whatsapp"></i>
//           </a>
//           <a href="mailto:info@upskillacademy.com" target="_blank" rel="noopener noreferrer">
//             <i className="fas fa-envelope"></i> {/* Email icon */}
//           </a>
//           <button
//             className="location-button"
//             onClick={() => setMapVisible(!mapVisible)}
//           >
//             <i className="fas fa-map-marker-alt"></i> {/* Location icon */}
//           </button>
//         </div>
//         {mapVisible && (
//           <div className="map-container">
//             <iframe
//               title="Location Map"
//               src="https://www.google.com/maps/place/Upskill+Academy/@11.2845941,77.5838956,432m/data=!3m1!1e3!4m9!1m2!2m1!1sNo+231%2F5,+KanjiKoil+Road,+Perundurai+HO,+Perundurai+-+638052+(Thiruvenkidam+Palayam)!3m5!1s0x3ba96d2ab72dbc65:0x382190599859fe68!8m2!3d11.2846164!4d77.5843807!16s%2Fg%2F11tnm7fz3z?entry=ttu&g_ep=EgoyMDI0MDgyNi4wIKXMDSoASAFQAw%3D%3D"
//               width="600"
//               height="450"
//               style={{ border: 0 }}
//               allowFullScreen=""
//               loading="lazy"
//             ></iframe>
//           </div>
//         )}
//       </div>

//       {/* Column 3: Opening Hours */}
//       <div className="contact-column hours-column">
//         <h3>Opening Hours</h3>
//         <p className="open-status" style={{ color: isOpen ? 'green' : 'red' }}>
//           {isOpen ? 'Open until 7:00 pm IST' : 'Closed after 7:00 pm IST'}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Contact;


// import React, { useEffect, useState } from 'react';
// import '../styles/Contact.css'; // Ensure this path is correct based on your project structure

// const Contact = () => {
//   const [isOpen, setIsOpen] = useState(true);
//   const [mapVisible, setMapVisible] = useState(false);

//   // Function to get the current time in IST (UTC+5:30)
//   const getCurrentISTTime = () => {
//     const currentTime = new Date();
//     // Convert to IST by adding 5 hours and 30 minutes
//     const istOffset = 5.5 * 60 * 60 * 1000; // IST offset in milliseconds
//     const utcTime = currentTime.getTime() + currentTime.getTimezoneOffset() * 60 * 1000; // Convert current time to UTC
//     const istTime = new Date(utcTime + istOffset);
//     return istTime;
//   };

//   // Function to check the current time and update the isOpen state based on IST
//   const checkOpeningHours = () => {
//     const istTime = getCurrentISTTime();
//     const currentHour = istTime.getHours();
//     setIsOpen(currentHour < 19); // Sets to true if before 7 pm IST (19:00)
//   };

//   useEffect(() => {
//     checkOpeningHours();
//     const interval = setInterval(checkOpeningHours, 60000); // Check every minute
//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, []);

//   return (
//     <div className="contact-container">
//       {/* Column 1: Address and Phone */}
//       <div className="contact-column address-column">
//         <div className="icon-container">
//           <i className="fas fa-school"></i> {/* School icon */}
//         </div>
//         <p className="address-text">
//           <strong>Upskill Academy</strong> <br />
//           No 231/5, KanjiKoil Road, Perundurai HO, <br />
//           Perundurai - 638052<br />
//           (Thiruvenkidam Palayam)
//         </p>
//         <p className="phone">
//           <i className="fas fa-phone-alt"></i> 07947142823
//         </p>
//       </div>

//       {/* Column 2: Social Media Links */}
//       <div className="contact-column social-links-column">
//         <h3>Useful Links</h3>
//         <div className="social-icons">
//           <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
//             <i className="fab fa-instagram"></i>
//           </a>
//           <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
//             <i className="fab fa-facebook"></i>
//           </a>
//           <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
//             <i className="fab fa-whatsapp"></i>
//           </a>
//           <a href="mailto:info@upskillacademy.com" target="_blank" rel="noopener noreferrer">
//             <i className="fas fa-envelope"></i> {/* Email icon */}
//           </a>
//           <button
//             className="location-button"
//             onClick={() => setMapVisible(!mapVisible)}
//           >
//             <i className="fas fa-map-marker-alt"></i> {/* Location icon */}
//           </button>
//         </div>
//         {mapVisible && (
//           <div className="map-container">
//             <iframe
//               title="Location Map"
//               src="https://www.google.com/maps/place/Upskill+Academy/@11.2845941,77.5838956,427m/data=!3m1!1e3!4m9!1m2!2m1!1sNo+231%2F5,+KanjiKoil+Road,+Perundurai+HO,+Perundurai+-+638052+(Thiruvenkidam+Palayam)!3m5!1s0x3ba96d2ab72dbc65:0x382190599859fe68!8m2!3d11.2846164!4d77.5843807!16s%2Fg%2F11tnm7fz3z?entry=ttu&g_ep=EgoyMDI0MDgyNi4wIKXMDSoASAFQAw%3D%3D"
//               width="600"
//               height="450"
//               style={{ border: 0 }}
//               allowFullScreen=""
//               loading="lazy"
//             ></iframe>
//           </div>
//         )}
//       </div>

//       {/* Column 3: Opening Hours */}
//       <div className="contact-column hours-column">
//         <h3>Opening Hours</h3>
//         <p className="open-status" style={{ color: isOpen ? 'green' : 'red' }}>
//           {isOpen ? 'Open until 7:00 pm IST' : 'Closed after 7:00 pm IST'}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Contact;

//AIzaSyBOOI1NJKVzMPB7mg1IKck_QHyDmdms_jo

// import React, { useEffect, useState, useCallback } from 'react';
// import '../styles/Contact.css'; // Ensure this path is correct based on your project structure

// const Contact = () => {
//   const [isOpen, setIsOpen] = useState(true);
//   const [mapVisible, setMapVisible] = useState(false);

//   // Function to get the current time in IST (UTC+5:30)
//   const getCurrentISTTime = () => {
//     const currentTime = new Date();
//     // Convert to IST by adding 5 hours and 30 minutes
//     const istOffset = 5.5 * 60 * 60 * 1000; // IST offset in milliseconds
//     const utcTime = currentTime.getTime() + currentTime.getTimezoneOffset() * 60 * 1000; // Convert current time to UTC
//     const istTime = new Date(utcTime + istOffset);
//     return istTime;
//   };

//   // Function to check the current time and update the isOpen state based on IST
//   const checkOpeningHours = useCallback(() => {
//     const istTime = getCurrentISTTime();
//     const currentHour = istTime.getHours();
//     setIsOpen(currentHour < 19); // Sets to true if before 7 pm IST (19:00)
//   }, []);

//   useEffect(() => {
//     checkOpeningHours();
//     const interval = setInterval(checkOpeningHours, 60000); // Check every minute
//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, [checkOpeningHours]); // Add checkOpeningHours to the dependency array

//   return (
//     <div className="contact-container">
//       {/* Column 1: Address and Phone */}
//       <div className="contact-column address-column">
//         <div className="icon-container">
//           <i className="fas fa-school"></i> {/* School icon */}
//         </div>
//         <p className="address-text">
//           <strong>Upskill Academy</strong> <br />
//           No 231/5, KanjiKoil Road, Perundurai HO, <br />
//           Perundurai - 638052<br />
//           (Thiruvenkidam Palayam)
//         </p>
//         <p className="phone">
//           <i className="fas fa-phone-alt"></i> 07947142823
//         </p>
//       </div>

//       {/* Column 2: Social Media Links */}
//       <div className="contact-column social-links-column">
//         <h3>Useful Links</h3>
//         <div className="social-icons">
//           <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
//             <i className="fab fa-instagram"></i>
//           </a>
//           <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
//             <i className="fab fa-facebook"></i>
//           </a>
//           <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
//             <i className="fab fa-whatsapp"></i>
//           </a>
//           <a href="mailto:info@upskillacademy.com" target="_blank" rel="noopener noreferrer">
//             <i className="fas fa-envelope"></i> {/* Email icon */}
//           </a>
//           <button
//             className="location-button"
//             onClick={() => setMapVisible(!mapVisible)}
//           >
//             <i className="fas fa-map-marker-alt"></i> {/* Location icon */}
//           </button>
//         </div>
//         {mapVisible && (
//           <div className="map-container">
//             <iframe
//               title="Location Map"
//               src="https://www.google.com/maps/place/Upskill+Academy/@11.2845941,77.5838956,427m/data=!3m1!1e3!4m9!1m2!2m1!1sNo+231%2F5,+KanjiKoil+Road,+Perundurai+HO,+Perundurai+-+638052+(Thiruvenkidam+Palayam)!3m5!1s0x3ba96d2ab72dbc65:0x382190599859fe68!8m2!3d11.2846164!4d77.5843807!16s%2Fg%2F11tnm7fz3z?entry=ttu&g_ep=EgoyMDI0MDgyNi4wIKXMDSoASAFQAw%3D%3D"
//               width="600"
//               height="450"
//               style={{ border: '0' }} // Corrected style prop here
//               allowFullScreen=""
//               loading="lazy"
//             ></iframe>
//           </div>
//         )}
//       </div>

//       {/* Column 3: Opening Hours */}
//       <div className="contact-column hours-column">
//         <h3>Opening Hours</h3>
//         <p className="open-status" style={{ color: isOpen ? 'green' : 'red' }}>
//           {isOpen ? 'Open until 7:00 pm IST' : 'Closed after 7:00 pm IST'}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Contact;


import React, { useEffect, useState, useCallback } from 'react';
import '../styles/Contact.css'; // Ensure this path is correct based on your project structure

const Contact = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [mapVisible, setMapVisible] = useState(false);

  // Function to get the current time in IST (UTC+5:30)
  const getCurrentISTTime = () => {
    const currentTime = new Date();
    // Convert to IST by adding 5 hours and 30 minutes
    const istOffset = 5.5 * 60 * 60 * 1000; // IST offset in milliseconds
    const utcTime = currentTime.getTime() + currentTime.getTimezoneOffset() * 60 * 1000; // Convert current time to UTC
    const istTime = new Date(utcTime + istOffset);
    return istTime;
  };

  // Function to check the current time and update the isOpen state based on IST
  const checkOpeningHours = useCallback(() => {
    const istTime = getCurrentISTTime();
    const currentHour = istTime.getHours();
    setIsOpen(currentHour < 19); // Sets to true if before 7 pm IST (19:00)
  }, []);

  useEffect(() => {
    checkOpeningHours();
    const interval = setInterval(checkOpeningHours, 60000); // Check every minute
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [checkOpeningHours]);

  return (
    <div className="contact-container">
      {/* Column 1: Address and Phone */}
      <div className="contact-column address-column">
        <div className="icon-container">
          <i className="fas fa-school"></i> {/* School icon */}
        </div>
        <p className="address-text">
          <strong>Upskill Academy</strong> <br />
          No 231/5, KanjiKoil Road, Perundurai HO, <br />
          Perundurai - 638052<br />
          (Thiruvenkidam Palayam)
        </p>
        <p className="phone">
          <i className="fas fa-phone-alt"></i> 07947142823
        </p>
      </div>

      {/* Column 2: Social Media Links */}
      <div className="contact-column social-links-column">
        <h3>Useful Links</h3>
        <div className="social-icons">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="mailto:info@upskillacademy.com" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-envelope"></i> {/* Email icon */}
          </a>
          <button
            className="location-button"
            onClick={() => setMapVisible(!mapVisible)}
          >
            <i className="fas fa-map-marker-alt"></i> {/* Location icon */}
          </button>
        </div>
        {mapVisible && (
          <div className="map-container">
           
            <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14876.350986207332!2d77.5843807!3d11.2846164!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96d2ab72dbc65%3A0x382190599859fe68!2sUpskill%20Academy!5e1!3m2!1sen!2sin!4v1725356209278!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Location Map"
        ></iframe>
          </div>
        )}
      </div>

      {/* Column 3: Opening Hours */}
      <div className="contact-column hours-column">
        <h3>Opening Hours</h3>
        <p className="open-status" style={{ color: isOpen ? 'green' : 'red' }}>
          {isOpen ? 'Open until 7:00 pm IST' : 'Closed after 7:00 pm IST'}
        </p>
      </div>
    </div>
  );
};

export default Contact;
