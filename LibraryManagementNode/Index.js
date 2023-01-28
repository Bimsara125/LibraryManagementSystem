const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./DataBase');
var adminController = require('./Controllers/AdminController');
var userController = require('./Controllers/UserController');
var bookController = require('./Controllers/BookController');
var app = express();
app.use(bodyparser.json());
app.use(cors());

app.listen(3000, () => console.log('Server started at port : 3000'));


app.use('/admins', adminController);
app.use('/users', userController);
app.use('/books', bookController);