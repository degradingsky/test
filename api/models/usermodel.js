const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    userID:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    }
});

let user = module.exports = mongoose.model('user', userSchema);