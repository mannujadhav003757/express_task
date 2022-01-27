const express=require('express');
const router=express.Router();
//custom route level middleware 
const requireJson=()=>{
    return (req,res,next)=>{
        if(req.headers['content-type']==='application/json'){
            next();
        }
        else {
            res.send('Server require application/json formet')
        }
    }
}
router.get("/",(req,res)=>{
    res.send("Admin Front");
})
router.get("/dashboard",(req,res)=>{
    res.send("Admin dashbord");
})
router.post("/register",requireJson(),(req,res)=>{
    res.send("Working");
})
module.exports=router;