// NOTES: './' search in the same directory

const mysql = require('mysql');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

// to protect our info
const dotenv = require('dotenv');
dotenv.config({path: './.env'});

const app = express();

// the information here were remove to protect it in a safe file
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT, //MySQL PORT *NOT* the website port
    database: process.env.DATABASE
});

// where are the public files are located e.g: our CSS files etc.
const publicDirectory = path.join(__dirname, './public');
// making sure our server are using our *directory*
app.use(express.static(publicDirectory));

// to grap the data from the forms
app.use(express.urlencoded({extended: false}))
app.use(express.json());

//initilizing the cookies
app.use(cookieParser());

// setting up our view engine AKA (HBS)
app.set('view engine', 'hbs');

//connecting the Database
db.connect((error,results) => {
    if(error) {
        console.log(error)
    }else {
        console.log("Database connected...")
    }
});

// OUR ROUTES (MOVED TO ./routes/pages)
app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'))



// choosing the port to host the files in
app.listen(6006, () => {
    console.log("Server started on Port 6006");
});