const express= require("express");
const router = express.Router();
const {signup ,login,googleLogin}= require("../controllers/authController");
const protect = require("../middleware/authMiddleware");

router.post("/signup", signup);
router.post("/login", login);

// protected test route
router.get("/me",protect,(req,res)=>{
    res.json({user : req.user});
});

router.post("/google",googleLogin);
module.exports = router;
