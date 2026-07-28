const bcrypt= require("bcryptjs");
const User = require("../models/User");


const signup= async (req,res)=>{
    try{
        const{name,email,password} = req.body;

        if(!name || !email || !password){
            return res.status(400).json({error:"All fields are required"});
        }

        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(409).json({error:"Email already registerd"});
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password ,salt);
        const user = await User.create({name,email,password:hashedPassword});

        res.status(201).json({
            id: user._id,
            name:user.name,
            email: user.email,
        });

    } catch (err){
        res.status(500).json({error:err.message});
    }
};

const login =async (req,res)=>{
    try{
        const {email,password}= req.body;

        const user = await User.findOne({email});
        if(!user || !user.password){
            return res.status(401).json({error:"Invalid credentials"});
        }

        const isMatch = await bcrypt.compare(password , user.password);
        if(!isMatch){
            return res.status(401).json({error:"Invalid credentials"});
        }

        res.json({
            id: user._id,
            name : user.name,
            email: user.email
        });
    } catch(err){
        res.status(500).json({error: err.message});
    }
};
module.exports={
    signup,
    login
};