const app = require('./app');
const connectDatabase = require('./config/database');

// Load environment variables
if (process.env.NODE_ENV !== 'PRODUCTION') require('dotenv').config({ path: 'backend/config/config.env' });

// Connect to the database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
    console.log(`server is listening on PORT :${process.env.PORT} in ${process.env.NODE_ENV} mode.`);
});

// Handle unhandled Promise rejections 
process.on('unhandledRejection', err => {
    console.log(`ERROR: ${err.message}`);
    console.log('shutting down the server due to unhandled Promise Rejection');
    server.close(() => {
        process.exit(1);
    });
});
