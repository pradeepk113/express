 //**********Require********* */
 const express=require('express');
 // ***Initiate********
 const app=express();
 //*********Middlewares*********** */

 app.use(express.json());
 app.use(express.urlencoded({extended:false}))
 app.use(express.static(__dirname+'/public'))

//********Route Middlewares */


 app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
 })
 app.get('/project',(req,res)=>{
   res.sendFile(__dirname+"/project.html")
 })

 app.get('/user',(req,res)=>{
   res.send('Welcome To User Page')
 })
 //******Error Handler Middleware******** */
 app.use((req,res,next)=>{
   res.sendFile(__dirname+"/noPage.html")
 })

 //******Listner*********** */
 
 app.listen(4000,()=>{
    console.log('server is running on port 4K');
 })