const app = require('./app');
const cloudinary = require('cloudinary').v2; // Updated to v2
const connectDatabase = require('./config/database');

// Handling uncaught exceptions
process.on('uncaughtException', err => {
    console.log(`ERROR: ${err.message}`);
    console.log('Shutting down the server due to uncaught exception');
    process.exit(1);
});

// Setting up config file
if (process.env.NODE_ENV !== 'PRODUCTION') {
    require('dotenv').config({ path: './config/.env' });
}

// Setting up cloudinary configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// Connecting to database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
    console.log(`Server is listening on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`);
});

// Handle unhandled Promise rejections
process.on('unhandledRejection', err => {
    console.log(`ERROR: ${err.message}`);
    console.log('Shutting down the server due to unhandled Promise Rejection');
    server.close(() => {
        process.exit(1);
    });
});
