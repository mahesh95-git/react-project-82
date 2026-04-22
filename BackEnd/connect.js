const mongoose = require('mongoose');

const dbConnection=async()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/authentication');
    console.log('Connected to MongoDB');
}

module.exports=dbConnection;
