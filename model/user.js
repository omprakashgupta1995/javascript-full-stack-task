const mongoose = require('mongoose');

const user = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gender :{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('User', user);