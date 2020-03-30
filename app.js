/* @{Internal Imports} */
const        path  = require('path');

/* @{External Imports} */
const      express = require('express');
const       logger = require('morgan');
const cookieParser = require('cookie-parser');

/* @{ExpressJS} */
const app = express();

/* @{Express Routes Import} */
app.use('/'     , require('./routes/index'));
app.use('/users', require('./routes/users'));

/* @{Middlewares} */
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/* @{Static Expose} */
app.use(express.static(path.join(__dirname, 'public')));

/* @{Module Export} */
module.exports = app;
