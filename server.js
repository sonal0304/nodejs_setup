const express = require('express');
const bodyParser = require('body-parser');

const app = express(); // create app for excess paramanet running nodejs instance
const router = express.Router(); // create router for access routing of project

require('dotenv').config(); // use .env file for app constants 
require('./constants/global'); // use project level constants
const PORT = process.env.PORT;
const APP_NAME = process.env.APP_NAME;

app.use(router); // tell app to use router
app.use(require('./src/routes')); // tell app to use routers from another file. 


app.listen(PORT, () => {
    console.log(APP_NAME + ' working on port:- ', PORT);
})