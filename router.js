var db=require('./database');
var express=require('express');

var router=express.Router();





router.get('/select',async (req,res,next)=>{
try{
var result=await db.all();
res.send(result);


}
catch(e){
console.log(e.message);

}
})


router.post('/insert',async (req,res,next)=>{
 var data=res.body;
 try{
 var result=await db.insert(data);
 res.send(result);
 
 
 }
 catch(e){
 console.log(e.message);
 
 }
 })
module.exports=router;