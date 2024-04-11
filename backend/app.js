const express = require('express');
const app = express();
const cors = require('cors'); // Import cors package
const cookieParser = require('cookie-parser');
const bodyparser = require('body-parser');
const path = require('path');
const fileUpload = require('express-fileupload');
const errorMiddleware = require('./middlewares/error');
const { isAuthenticatedUser, authorizeRoles } = require('./middlewares/auth');

app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());

// Use cors middleware
app.use(cors()); // This will enable CORS for all routes

if (process.env.NODE_ENV !== 'PRODUCTION') require('dotenv').config({ path: '.env' });

// Import all routes

const auth = require('./routes/auth');




app.use('/api/v1', auth);

if (process.env.NODE_ENV === 'PRODUCTION') {
    app.use(express.static(path.join(__dirname, '../frontend/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'));
    });
}

// Middleware to handle errors
app.use(errorMiddleware);

module.exports = app;
