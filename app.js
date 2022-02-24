const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./api/routes/userRoutes');
const loginRoutes = require('./api/routes/loginRoutes');

mongoose.connect('mongodb://localhost:27017/jwtex', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log('connection established');
});

const app = express();
app.use(express.json());
app.listen(5000);


app.use('/users', userRoutes);
app.use('/login', loginRoutes);