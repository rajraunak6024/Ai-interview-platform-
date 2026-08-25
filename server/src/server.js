const express=require("express");
const cors=require("cors");
require("dotenv").config();

const connectDB = require("./config/db.js");
const testRoutes = require("./routes/testRoutes.js");
const authRoutes = require("./routes/authRoutes");
const resumeRoutes = require("./routes/resumeRoutes.js");
const app=express();
connectDB();

app.use(cors());
app.use(express.json());
app.get("/api/v1/",(req,res)=>{
    res.json({status:"ok",message:"server is running"});

});

app.use("/api/test",testRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/resume",resumeRoutes);

const port=process.env.PORT;

app.listen(port,()=>{
      console.log(`server is listining at http://localhost:${port}`);
}); 

