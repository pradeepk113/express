var express = require('express')
var cookieParser=require('cookie-parser')
var logger=require('morgan')

var app=express();
//********Middleware**************** */
app.use(cookieParser())

app.use(logger('tiny'))

app.use(express.static(__dirname + "/public"))
 
//********custom middleware******* */
app.use((req,res,next)=>{
    console.log(req.cookies);
    next()
})
app.use('/about',(req,res,next)=>{
    res.cookie('username','Pradeep')
    res.end('about page')
    
})


app.get('/',(req,res)=>{
    res.sendFile(__dirname+ "/index.html")
})
app.listen(5000,()=>{
    console.log("server is running at port 5K");
})