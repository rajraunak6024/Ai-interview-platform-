const express=require("express");
const cors=require("cors");
require("dotenv").config();

const app=express();

app.use(cors());
app.use(express.json());

app.get("/api/v1/",(req,res)=>{
    res.json({status:"ok",message:"server is running"});

});

const port=process.env.PORT;

app.listen(port,()=>{
      console.log(`server is listining at http://localhost:${port}`);
});
