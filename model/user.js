const mongoose = require('mongoose');

const user = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    isDisabled: {
        type: Boolean,
    }, healthIssue: {
        type: [] ,
    }, maritalStatus: {
        type: String
    }
})

module.exports = mongoose.model('User', user);