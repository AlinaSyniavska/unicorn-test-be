require('dotenv').config();
const {config} = require('./configs');

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const {signupRouter} = require("./routes");

mongoose.connect(config.MONGO_URL);

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors());

app.use('/signup', signupRouter);

app.use('*', (req, res) => {
    res.status(404).json('Route not found');
});

app.use((err, req, res, next) => {
    res.status(err.status || 400).json({
        error: err.message || 'Unknown Error',
        code: err.status || 400,
    });
});

app.listen(config.PORT, () => {
    console.log(`Started on port ${config.PORT}`);
});





