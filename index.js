const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dbconnect = require('./DBconnect');
const product = require('./Routes/productRoute');
require('dotenv').config()
const cors = require('cors')
app.use(cors({
    origin: 'http://localhost:3001', // Allow requests from this origin
    optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
  }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT || 3000; 

app.use('/api/v6', product);

dbconnect()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((error) => {
        console.error('Error starting the server:', error.message);
    });
