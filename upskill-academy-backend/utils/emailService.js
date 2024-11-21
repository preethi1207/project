// const nodemailer = require('nodemailer');
// const { google } = require('googleapis');

// const OAuth2 = google.auth.OAuth2;

// const oauth2Client = new OAuth2(
//   'CLIENT_ID', // Replace with your client ID
//   'CLIENT_SECRET', // Replace with your client secret
//   'https://developers.google.com/oauthplayground' // Redirect URL
// );

// oauth2Client.setCredentials({
//   refresh_token: 'REFRESH_TOKEN', // Replace with your refresh token
// });

// const accessToken = oauth2Client.getAccessToken();

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'preethi12072005@gmail.com', // Your Gmail address
//     pass: 'yarq gupk tsde dlws'     // Your generated App Password
//   }
// });

// const sendEmail = async (to, subject, text) => {
//   const mailOptions = {
//     from: 'preethi12072005@gmail.com',
//     to: to,
//     subject: subject,
//     text: text,
//   };

//   try {
//     const info = await transporter.sendMail(mailOptions);
//     console.log('Email sent: ' + info.response);
//   } catch (error) {
//     console.log('Error: ' + error.message);
//   }
// };

// module.exports = sendEmail;



// utils/emailService.js
const nodemailer = require('nodemailer');
const { google } = require('googleapis');

// Initialize OAuth2 client
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
  process.env.CLIENT_ID, // Replace with your client ID from the .env file
  process.env.CLIENT_SECRET, // Replace with your client secret from the .env file
  'https://developers.google.com/oauthplayground' // Redirect URL for OAuth2
);

// Set OAuth2 client credentials
oauth2Client.setCredentials({
  refresh_token: process.env.REFRESH_TOKEN, // Replace with your refresh token from the .env file
});

// Generate access token
const accessToken = oauth2Client.getAccessToken();

// Create transporter with OAuth2 authentication
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.ADMIN_EMAIL, // Your Gmail address from the .env file
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
    accessToken: accessToken,
  },
});

// Function to send email
const sendEmail = async (to, subject, text) => {
  const mailOptions = {
    from: process.env.ADMIN_EMAIL, // Sender address
    to: to,                        // List of receivers
    subject: subject,              // Subject line
    text: text,                    // Plain text body
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
  } catch (error) {
    console.log('Error: ' + error.message);
  }
};

module.exports = sendEmail;
