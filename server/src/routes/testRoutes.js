const express=require("express");
const router =express.Router();
const User=require("../models/User");

// create a test user
router.post("/users", async (req,res) =>{
    try{
        const user= await User.create(req.body);
        res.status(201).json(user);
    } catch(err){
        res.status(400).json({error:err.message});
    }
});

// fetch all users
router.get("/users", async (req,res)=>{
    const users= await User.find();
    res.json(users);
});

module.exports= router;