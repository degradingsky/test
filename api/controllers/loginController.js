require('dotenv').config();
const jwt = require('jsonwebtoken');

const user_token = async(req, res) => {
    const username = req.body.username;
    const user = {name: username}

    const accessToken = jwt.sign(user, process.env.TOKEN_SECRET);
    res.json({accessToken: accessToken});
}

module.exports = {
    user_token
}