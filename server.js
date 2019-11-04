//Import the express in to your file
const express = require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const User=require('./models/User')//or User.js
const Feed=require('./models/Feed')//or feed.js

//Create an express app
const app = express()

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
const db='mongodb+srv://dbadmin:admin@cluster0-s1rtf.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true})//Promise
.then(()=>{
    console.log('DB is connected');
})
.catch(()=>{
    console.log('error',err)
})
//Our first route
//FIRST ARGUMENT:ROUTE
//sECOND ARGUMENT:CALLBACK
/*app.get('/',()=>{
    console.log("welcome Home")
})*/

app.get('/',(req,res)=>{
    res.send("<h1>Welcome Home</h1>")

})
 /*app.get('/about',(req,res)=>{
      res.send("<h1>About Page</h1>")
 })*/
app.get('/about:page',(req,res)=>{
     res.send(`
                <h1>About Page</h1>
                <p>${req.query.section}</p>
                <p>${req.query.year}</p>
                <p>${req.query.industry}</p>
    `)

});
app.get('/contact',(req,res)=>{
    res.send("<h1>Contact Page</h1>")
})
app.get('/blog/:page',(req,res)=>{
    const page=req.params.page;
    res.send("<h1>Welcome to "+page+"</h1>")
})

app.post('/register',(req,res)=>{
    const firstName=req.body.firstName;
    const lastName=req.body.lastName;
    const email=req.body.email;
    const password=req.body.password;
    const formData={
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        password:req.body.password
    }
    const newUser=new User(formData);
    newUser
    .save()//Promise
    //If promise is fulfilled
    .then((newUserData)=>{
        //Send response in the form of JSON
        res.json(newUserData)
    })
   
});
app.post('/feed',(req,res)=>{
    const username=req.body.username;
    const comment=req.body.comment;
    const tags=req.body.tags;
    const image=req.body.image;
    const likes=req.body.likes;
    const shares=req.body.shares;
   
    
    const formData={
        username:req.body.username,
        comment:req.body.comment,
        tags:req.body.tags,
        image:req.body.image,
        likes:req.body.likes,
        shares:req.body.shares
        
    }
    const newFeed=new Feed(formData);
    newFeed
    .save()//Promise
    //If promise is fulfilled
    .then((newFeedData)=>{
        //Send response in the form of JSON
        res.json(newFeedData)
    })
});
 
/*app.get('/', function (req, res) {
  res.send('Hello World')
})*/
 
//app.listen(3000)
app.listen(3000,()=>{
    console.log('You are connected!')
})