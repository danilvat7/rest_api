const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const Routes = require('./routes');
//logger
app.use(morgan('dev'));

// body parser
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// set headers
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

//routes
app.use('/api', Routes);

// not found
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

// error message
app.use((error, req, res, next) => {
    console.log('Error handler work!');
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;