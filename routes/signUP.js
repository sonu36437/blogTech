const express =require('express')
const handleSignup=require("../controllers/handleSignup")
const router=express.Router();
router.get('/signup',(req,res)=>{
   res.render('signup')
})

router.post('/signup',handleSignup)
module.exports=router;