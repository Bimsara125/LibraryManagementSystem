const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    },
    password: {
        type: String
    },
    mobile: {
        type: String
    },
})

exports.Users = mongoose.model('Users', UserSchema);