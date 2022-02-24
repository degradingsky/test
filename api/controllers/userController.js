require('dotenv').config();
const jwt = require('jsonwebtoken');
const user = require('../models/usermodel');

const user_details = async (req, res) => {
    try{
        await user.find({}).then(result => {
            res.send(result);
        })
        // res.send(emp);
    }
    catch(err){
        next(err);
    }
}

const user_create = async (req, res) => {
    try{
        var insertUser = new user({
            userID: req.body.userID,
            title: req.body.title,
        });
        // console.log(req.body);
        await insertUser.save();
        res.send('user added succesfully');
    }
    catch(err){
        next(err);
    }
}

const authenticate_token = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader.split(' ')[1];

    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        req.user=user;
        next();
    })
}

module.exports = {
    user_details,
    user_create,
    authenticate_token
}