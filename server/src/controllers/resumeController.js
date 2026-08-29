const Resume = require("../models/Resume");
const extractTextFromPDF = require("../services/resumeParser");

 const uploadResume = async (req,res)=>{
    try{
        if(!req.file){
            return res.status(400).json({error:"No file uploaded"});
        }
        const extractedText = await extractTextFromPDF(req.file.path);
        const resume = await Resume.create({
            user : req.user._id,
            originalFileName :req.file.originalname,
            filePath : req.file.path,
            extractedText,
        });
        res.status(201).json(resume);
    }catch(err){
        res.status(500).json({error : err.message });
    }
};

module.exports = uploadResume;