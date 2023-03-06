var express=require('express');
var logger=require('morgan')
var cookieParser=require('cookie-parser')

var app=express();

app.use(logger('dev'))

app.use(cookieParser())


app.use(express.json())

app.use(express.urlencoded({extended:false}));

app.use(express.static(__dirname+ "/public"))

app.use((req,res,next)=>{
    var count=req.cookies.count
    if(count){
        res.cookie('count',(+count)+ 1)  
    }else{
        res.cookie('count',1) 
    }
   
    console.log("Totalcount:",count);

    next()
})

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');

})
app.listen(4000,()=>{
    console.log('server is running on port 3K');
})