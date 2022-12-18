const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:8080',
};
const userScoresRouter = require('./routes/userScores');
const authsRouter = require('./routes/auths');


const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(cors(corsOptions));

app.use('/userScores', userScoresRouter);
app.use('/auths', authsRouter);


module.exports = app;
