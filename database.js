var mysql=require('mysql');
var con=mysql.createConnection({
host:'localhost',
user:'root',
password:'',
database:'akash'
})

var abc={};
abc.all=()=>{

 return new Promise((resolve,reject)=>{

con.query(`select * from user1`,(err,rows,fields)=>{
if(!err){
 resolve(rows);
}
else{
 reject(err);
}

})

 })
}

abc.insert=(data)=>{

 return new Promise((resolve,reject)=>{


con.query(`insert into task (id,user)values(50,"akash")`,(err,rows,fields)=>{
if(!err){
 resolve(rows);
}
else{
 reject(err);
}

})

 })
}

module.exports=abc;