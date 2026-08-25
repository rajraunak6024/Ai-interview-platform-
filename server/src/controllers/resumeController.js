const Resume = require("../models/Resume");
 const uploadResume = async (req,res)=>{
    try{
        if(!req.file){
            return res.status(400).json({error:"No file uploaded"});
        }
        const resume = await Resume.create({
            user : req.user._id,
            originalFileName :req.file.originalname,
            filePath : req.file.path,
        });
        res.status(201).json(resume);
    }catch(err){
        res.status(500).json({error : err.message });
    }
};

module.exports = uploadResume;