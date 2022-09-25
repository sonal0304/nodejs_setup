const express = require('express');
const bodyParser = require('body-parser');

const app = express(); // create app for excess paramanet running nodejs instance
const router = express.Router(); // create router for access routing of project

require('dotenv').config(); // use .env file for app constants 
require('./constants/global'); // use project level constants
require('./services/mongodb.service'); // use mongodb connection
const PORT = process.env.PORT;
const multer = require('multer');
const forms = multer();

app.use(bodyParser.json()); // tell app to use body parser request as json
app.use(forms.array()); // to get form-data
app.use(bodyParser.urlencoded({ extended: false, limit: '20mb' })) // tell app to use body parser request as url encoded data


app.use(router); // tell app to use router
app.use(require('./src/routes')); // tell app to use routers from another file. 


app.listen(PORT, () => {
    console.log('working on port:- ', PORT);
})