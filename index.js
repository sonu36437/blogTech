const express = require("express");
const ejs = require('ejs');
const bcrypt = require("bcrypt")
const path = require('path');
const app = express();
const signupRoute=require("./routes/signUP")
const loginRoute=require("./routes/login")
const mongoose = require("mongoose");


const PORT = 8000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
mongoose.connect("mongodb://127.0.0.1:27017/Blog").then(() => {
    console.log("connected");
})

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));


app.get('/', (req, res) => {
    res.render('home')
});


app.use('/', signupRoute);
app.use('/',loginRoute)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


