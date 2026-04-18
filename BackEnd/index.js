const express = require('express');
const app= express();
const cors=require('cors');
const dbConnection=require('./connect');
const User=require('./schema');
require('dotenv').config();
app.use(cors({origin:'http://localhost:3000'}));


app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.use(express.json());
app.post('/register',async (req,res)=>{
    const {FirstName,LastName,Email,Password}=req.body;

    const isexiting=await User.findOne({Email});

        if(isexiting){
            return res.status(400).json({
                ok:false,
                message:'Email already exists'
            });
        }
    const user=new User({
        FirstName,
        LastName,
        Email,
        Password
    });

        user.save().then(()=>{
            res.json({
                ok:true,
                message:'User registered successfully'
                
            });
        }).catch((err)=>{
            res.status(500).send('Error registering user');
        });
}); 

app.post('/login',async(req,res)=>{
    const {Email,Password}=req.body;
    const user=await User.findOne({Email});
    if(!user){
        return res.status(400).json({
            ok:false,
            message:'Invalid email or password'
        });
    }
    if(user.Password!==Password){
        return res.status(400).json({
            ok:false,
            message:'Invalid email or password'
        });
    }
    res.json({
        ok:true,
        message:'Login successful'

    });

    
});
    
dbConnection();
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
});

