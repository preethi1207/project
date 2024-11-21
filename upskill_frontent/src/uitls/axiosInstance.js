// // // axiosInstance.js
// // import axios from 'axios';

// // const axiosInstance = axios.create({
// //     baseURL: 'http://localhost:5000/api', // Your base URL
// // });

// // // Adding a request interceptor
// // axiosInstance.interceptors.request.use(
// //     (config) => {
// //         const token = localStorage.getItem('token'); // Get the token from local storage
// //         if (token) {
// //             config.headers.Authorization = `Bearer ${token}`; // Set the token in the headers
// //         }
// //         return config;
// //     },
// //     (error) => {
// //         return Promise.reject(error);
// //     }
// // );

// // export default axiosInstance;




// // utils/axiosInstance.js
// import axios from 'axios';

// const axiosInstance = axios.create({
//     baseURL: 'http://localhost:5000/api', // Adjust the base URL as needed
// });

// // Set up a request interceptor to include the token in headers
// axiosInstance.interceptors.request.use(config => {
//     const token = localStorage.getItem('token'); // Retrieve your token from local storage or another source
//     if (token) {
//         config.headers['Authorization'] = `Bearer ${token}`; // Include the token in the Authorization header
//     }
//     return config;
// }, error => {
//     return Promise.reject(error);
// });

// export default axiosInstance;



import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api',
});

axiosInstance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token'); // Assuming token is stored here
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    error => Promise.reject(error)
);

export default axiosInstance;
