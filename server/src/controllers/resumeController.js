const Resume = require("../models/Resume");
const extractTextFromPDF = require("../services/resumeParser");
const {generateContent} = require("../services/ai/geminiService");
const {resumeParsePrompt} = require("../services/ai/prompts");

 const uploadResume = async (req,res)=>{
    try{
        if(!req.file){
            return res.status(400).json({error:"No file uploaded"});
        }
        const extractedText = await extractTextFromPDF(req.file.path);
        const aiResponse = await generateContent(resumeParsePrompt(extractedText));
       
        let parsedData;
        try {
         // strip accidental code fences just in case, then parse
          const cleaned = aiResponse.replace(/```json|```/g, "").trim();
          parsedData = JSON.parse(cleaned);
        } catch (parseErr) {
         console.error("Failed to parse AI response as JSON:", aiResponse);
         parsedData = { skills: [], education: [], projects: [] };
    }
        
        const existingResume = await Resume.findOne({ user: req.user._id });

    if (existingResume) {
      // delete the old file from disk before overwriting the reference to it
      if (existingResume.filePath && fs.existsSync(existingResume.filePath)) {
        fs.unlink(existingResume.filePath, (err) => {
          if (err) console.error("Failed to delete old resume file:", err.message);
        });
      }

      existingResume.originalFileName = req.file.originalname;
      existingResume.filePath = req.file.path;
      existingResume.extractedText = extractedText;
      existingResume.parsedData = parsedData;
      await existingResume.save();

      return res.status(200).json(existingResume);
    }

        const resume = await Resume.create({
            user : req.user._id,
            originalFileName :req.file.originalname,
            filePath : req.file.path,
            extractedText,
            parsedData,
        });
        res.status(201).json(resume);
    }catch(err){
        res.status(500).json({error : err.message });
    }
};

module.exports = uploadResume;