const express = require("express");
const app = express();
const mongoose = require("mongoose");
const exphbs = require("express-handlebars");
const dotenv = require('dotenv');
// const Teams = require('./models/Team');
var path = require('path');

//Import routes
const homeRoute = require('./routes/home');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');
const teamRoute = require('./routes/teams');
const matchRoute = require('./routes/matches');
const playerRoute = require('./routes/players');
dotenv.config();

// console.log(path.join(__dirname, '/assets'));

app.use(express.static(path.join(__dirname, '/assets')));
// app.use(express.urlencoded());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true}, () =>console.log('db connected'));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


//Routes middlewares
app.use(express.json());
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);
app.use('/api/teams', teamRoute);
app.use('/api/matches', matchRoute);
app.use('/api/players', playerRoute);
app.use('/', homeRoute);


app.listen(process.env.PORT || 4000, function(){
    console.log('Your node js server is running');
});
// app.listen(3000, () => console.log('server started and up'));