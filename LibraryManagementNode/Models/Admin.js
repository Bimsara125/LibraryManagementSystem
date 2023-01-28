const mongoose = require('mongoose');

const AdminSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: String,
    },
    email: {
        type: String,
    },
    NIC: {
        type: String
    }
})

exports.Admin = mongoose.model('Admin', AdminSchema);