const mongoose = require('mongoose');

const Cat = mongoose.model('Cat', { name: String });



const dbConnection=async()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
    console.log('Connected to MongoDB');
}

module.exports=dbConnection;
