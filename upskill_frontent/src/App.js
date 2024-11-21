


// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Course from './components/Course';
// import About from './components/About';
// import Footer from './components/Footer';
// import LoginForm from './components/LoginForm';
// import SignupForm from './components/SignupForm';
// import AdmissionEnquiry from './components/AdmissionEnquiry';
// // Import other components...
// import BrainGym from './components/courses/BrainGym';
// import BrainMapping from './components/courses/BrainMapping';
// import RightBrain from './components/courses/RightBrain';
// import MemoryTechniques from './components/courses/MemoryTechniques';
// import SpeedReading from './components/courses/SpeedReading';
// import CreativeThinking from './components/courses/CreativeThinking';
// import Drawing from './components/courses/Drawing';
// import CubeTraining from './components/courses/CubeTraining';
// import AdvancedMemory from './components/courses/AdvancedMemory';
// import ArtsAndCrafts from './components/courses/ArtsAndCrafts';

// import Payment from './components/PaymentPage'; 
// import Staffs from './components/Staffs'; 
// import Cart from './components/Cart';
// import AdminDashboard from './components/AdminDashboard';
// import CourseDetail from './components/CourseDetail';
// import CourseList from './components/CourseList';
// import PaymentSummaryPage from './components/PaymentSummaryPage'; 
// import './App.css';
// import './App.css';

// function App() {
//   // State for authentication and user data
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [user, setUser] = useState(null);

//   // State for showing login and signup forms
//   const [showLogin, setShowLogin] = useState(false);
//   const [showSignup, setShowSignup] = useState(false);

//   // Close login and signup forms
//   const handleLoginClose = () => setShowLogin(false);
//   const handleSignupClose = () => setShowSignup(false);

//   // Open signup form
//   const handleSignupClick = () => {
//     setShowLogin(false);
//     setShowSignup(true);
//   };

//   // Open login form
//   const handleLoginClick = () => {
//     setShowSignup(false);
//     setShowLogin(true);
//   };

//   // On successful login, update the user data and set authentication state
//   const handleLoginSuccess = (userData) => {
//     setUser(userData);
//     setIsAuthenticated(true);
//     setShowLogin(false);  // Close the login modal after successful login
//   };

//   // On successful signup, update the user data and set authentication state
//   const handleSignupSuccess = (userData) => {
//     setUser(userData);
//     setIsAuthenticated(true);
//     setShowSignup(false); // Close the signup modal after successful signup
//   };

//   return (
//     <Router>
//       <div className="App">
//         {/* Pass authentication state and user data to Navbar */}
//         <Navbar
//           onLoginClick={handleLoginClick}
//           onSignupClick={handleSignupClick}
//           isAuthenticated={isAuthenticated}
//           user={user} // Pass user data to Navbar
//         />

//         <Routes>
//           {/* Main Routes */}
//           <Route path="/" element={<Home />} />
//           <Route path="/admissionEnquiry" element={<AdmissionEnquiry />} />
//           <Route path="/payment" element={<Payment />} />
//           <Route path="/course" element={<Course />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/staffs" element={<Staffs />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/admin/dashboard" element={<AdminDashboard />} />
//           <Route path="/payment" element={<PaymentSummaryPage />} />
//           <Route path="/courseDetail" element={<CourseDetail />} />
//           <Route path="/courseList" element={<CourseList />} />

//           {/* Course Routes */}
//           <Route path="/courses/brain-gym" element={<BrainGym />} />
//           <Route path="/courses/brain-mapping" element={<BrainMapping />} />
//           <Route path="/courses/right-brain" element={<RightBrain />} />
//           <Route path="/courses/memory-techniques" element={<MemoryTechniques />} />
//           <Route path="/courses/speed-reading" element={<SpeedReading />} />
//           <Route path="/courses/creative-thinking" element={<CreativeThinking />} />
//           <Route path="/courses/drawing" element={<Drawing />} />
//           <Route path="/courses/cube-training" element={<CubeTraining />} />
//           <Route path="/courses/advanced-memory" element={<AdvancedMemory />} />
//           <Route path="/courses/arts-and-crafts" element={<ArtsAndCrafts />} />
         
//         </Routes>

//         {/* Footer will be rendered on all pages */}
//         <Footer />

//         {/* Show login form if login is clicked */}
//         {showLogin && (
//           <LoginForm
//             onClose={handleLoginClose}
//             onSignupClick={handleSignupClick}
//             onLoginSuccess={handleLoginSuccess} // Pass login success handler
//           />
//         )}

//         {/* Show signup form if signup is clicked */}
//         {showSignup && (
//           <SignupForm
//             onClose={handleSignupClose}
//             onLoginClick={handleLoginClick}
//             onSignupSuccess={handleSignupSuccess} // Pass signup success handler
//           />
//         )}
//       </div>
//     </Router>
//   );
// }

// export default App;




import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Course from './components/Course';
import About from './components/About';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import AdmissionEnquiry from './components/AdmissionEnquiry';
import Payment from './components/PaymentPage';
import Staffs from './components/Staffs';
import Cart from './components/Cart';
import AdminDashboard from './components/AdminDashboard';
import CourseDetail from './components/CourseDetail';
import CourseList from './components/CourseList';
import PaymentSummaryPage from './components/PaymentSummaryPage';
import './App.css';

function App() {
  // State for authentication and user data
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // State for showing login and signup forms
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  useEffect(() => {
    // Check if token and user are stored in localStorage on initial load
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');

    if (storedToken && storedUser) {
      setIsAuthenticated(true);
      setUser(JSON.parse(storedUser));  // Parse the user object
    }
  }, []);

  // Close login and signup forms
  const handleLoginClose = () => setShowLogin(false);
  const handleSignupClose = () => setShowSignup(false);

  // Open signup form
  const handleSignupClick = () => {
    setShowLogin(false);
    setShowSignup(true);
  };

  // Open login form
  const handleLoginClick = () => {
    setShowSignup(false);
    setShowLogin(true);
  };

  // On successful login, update the user data and set authentication state
  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
    setShowLogin(false);  // Close the login modal after successful login
  };

  return (
    <Router>
      <div className="App">
        {/* Pass authentication state and user data to Navbar */}
        <Navbar
          onLoginClick={handleLoginClick}
          onSignupClick={handleSignupClick}
          isAuthenticated={isAuthenticated}
          user={user}  // Pass user data to Navbar
        />

        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/admissionEnquiry" element={<AdmissionEnquiry />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/course" element={<Course />} />
          <Route path="/about" element={<About />} />
          <Route path="/staffs" element={<Staffs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/payment" element={<PaymentSummaryPage />} />
          <Route path="/courseDetail" element={<CourseDetail />} />
          <Route path="/courseList" element={<CourseList />} />

        </Routes>

        {/* Footer will be rendered on all pages */}
        <Footer />

        {/* Show login form if login is clicked */}
        {showLogin && (
          <LoginForm
            onClose={handleLoginClose}
            onLoginSuccess={handleLoginSuccess}  // Pass login success handler
          />
        )}

        {/* Show signup form if signup is clicked */}
        {showSignup && (
          <SignupForm
            onClose={handleSignupClose}
            onLoginClick={handleLoginClick}
          />
        )}
      </div>
    </Router>
  );
}

export default App;
