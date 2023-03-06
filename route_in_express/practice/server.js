var express=require('express')
var app=express();

app.get('/users',(req,res)=>{
    console.log(req.query);
    res.json(req.query)
    

})
app.get('/users/:username',(req,res,)=>{
 var name=req.params.username
 res.send(name)
})
app.post('/users',(req,res)=>{

})
        
app.listen(3000,()=>{
    console.log('server is running at port 3K');
})