const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bodyparser = require('body-parser');
const path = require('path');
const errorMiddleware = require('./middlewares/error');

app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cookieParser());

if (process.env.NODE_ENV !== 'PRODUCTION') require('dotenv').config({ path: '.env' });

const auth = require('./routes/auth');

app.use('/api/v1', auth);

if (process.env.NODE_ENV === 'PRODUCTION') {
    app.use(express.static(path.join(__dirname, '../frontend/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'));
    });
}

app.use(errorMiddleware);

module.exports = app;
