const express=require('express');//import express 
const PORT=8899;//define port
const app=express();//create object of express
//custom globel middleware
let myData=(req,res,next)=>{
    req.mytitle="NeoSoft Technology";
    next();
} 
app.use('/myimages',express.static('images'));
app.use(myData);//use custom globel middleware 
app.use(express.json());
app.use(express.urlencoded({extended:false}))
const frontRoutes=require('./routes/frontRoutes');
const adminRoutes=require('./routes/adminRoutes');
app.use("/",frontRoutes)
app.use("/admin",adminRoutes);
// define the routes 
app.get('*',(req,res)=>{
    res.send('Invalid Url');
})
//define app in the port
app.listen(PORT,(err)=>{
    if(err) throw err;
    console.log(`Work on ${PORT}`);
})