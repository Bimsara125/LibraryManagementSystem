const express = require('express');
const mongoose = require('mongoose');

try {
    //mongoose.connect('mongodb+srv://bimsara:bimsara@libraryms.cbehzdv.mongodb.net/ManagementSystem?retryWrites=true&w=majority', (err) => {
    mongoose.connect('mongodb://localhost:27017/LibraryManagementSystem', (err) => {
        if (!err) {
            console.log('MongoDB Connection Succeeded..');
        }
        else {
            console.log('Error in DB connection: ' + JSON.stringify(err, undefined, 2))
        }
    });
}
catch (e) {
    throw e;
}


module.exports = mongoose;