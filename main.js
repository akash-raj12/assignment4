var apirouter=require('./router');
var express=require('express');
var app=express();
var bodyparser=require('body-parser');
var swaggerdocument=require('./swag.json');
var swagger=require('swagger-ui-express');


app.use('/api-docs',swagger.serve,swagger.setup(swaggerdocument));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));


app.use('/app',apirouter);
app.listen(3000,()=>{
console.log("server is running on port no 3000");

})