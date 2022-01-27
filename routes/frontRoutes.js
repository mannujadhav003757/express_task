const express=require('express');
const router=express.Router();
router.get("/",(req,res)=>{
    res.sendFile('form.html', { root: '.' });
})
router.post("/submit-data",(req,res)=>{
   
    res.send(`Name : ${req.body.fname} and age : ${req.body.age}`);
})
router.get("/category/:cname([a-z]+)",(req,res)=>{
    //read param value
    let cn=req.params.cname;
    res.send(`The category is ${cn} ${req.mytitle}`)
})
router.get("/categorydata/:cname/:scat?",(req,res)=>{
    //read param value
    let cn=req.params.cname;
     let scn=req.params.scat;
     if(scn!=undefined){
    res.send(`The category is ${cn} and subcat is ${scn}`)
     }
     else{
        res.send(`The category is ${cn} ${req.mytitle}`)
     }
})
module.exports=router;