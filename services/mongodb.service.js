const mongoose = require('mongoose');

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD; 
const host = process.env.DB_HOST; 
const dbname = process.env.DB_NAME;
const dbport = process.env.DB_PORT;

mongoose.connect(`mongodb://${host}:${dbport}/${dbname}`, {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}, err => {
    if(err) throw err;
    console.log('Connected to MongoDB!!!')
});