const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    description: {
        type: String,
    },
    price: {
        type: Number,
    },
    title: {
        type: String,
    },
    author: {
        type: String,
    },
    image: {
        type: String,
    },
})

exports.Books = mongoose.model('Books', bookSchema);