var express=require("express")
var app=express()

 app.use(express.json())
 app.use(express.urlencoded({extended:false}))
 app.use(express.static(__dirname + "/public"))
 app.post('/about',(req,res)=>{
     console.log(req.body);
  })
  app.post('/contact',(req,res)=>{
    console.log(req.body);
  })

  app.get('/',(req,res)=>{
    res.sendFile(__dirname+ "/index.html")
  })
   
 
 app.listen(3000,()=>{
    console.log('server is running at port 3K');
 })