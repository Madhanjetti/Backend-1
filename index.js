require('dotenv').config()
const express=require('express');
const app=express()
const port=4000;
const details={
    "name":"jhon",
    "class":"CSE",
    "Age":"20",
    "Roll":"101",
    "Address":"Bangalore",
    "College":"Bits",
    "sex":"Male"
    
    
}
app.get('/',(req,res)=>{
    res.send('Hello World');
})
app.get('/details',(req,res)=>{
    res.send(details);
})
app.get('/home',(req,res)=>{
    res.send('Home page');
})
app.get('/contact',(req,res)=>{
    res.send('contact page');
})
app.get('/id',(req,res)=>{
    res.send('<h1>Welcome to id</h1>');
})
app.get('/youtube',(req,res)=>{
    res.send('<h1>Welcome Youtube</h1>')
})
app.listen(process.env.port,()=>{
    console.log(`port number is ${port}`)
})