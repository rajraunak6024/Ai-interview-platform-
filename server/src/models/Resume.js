const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema(
    {
        user: {type:mongoose.Schema.Types.ObjectId,
               ref:"User",required:true},
        originalFileName:{type:String,required:true},
        filePath: {type:String, required: true},
        extractedText: { type: String },
        parsedData : {type: mongoose.Schema.Types.Mixed},
    },
    {timestamps: true}
);

module.exports = mongoose.model("Resume", resumeSchema);