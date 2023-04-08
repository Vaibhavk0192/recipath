require('dotenv').config({path:__dirname+'/./../.env'});
const express=require("express");
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const md5=require('md5');
// const passport=require('passport');
// const passportLocalMongoose=require('passport-local-mongoose');
// const googleStrategy=require('passport-google-oauth20').Strategy;
// const findOrCreate=require('mongoose-findorcreate');
const path = __dirname + '/views/';

const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path));

mongoose.set('strictQuery',true);
mongoose.connect(process.env.DATABASE_CONNECTION_URL);

const userSchema=new mongoose.Schema({
    email:String,
    password:String
});

const User=new mongoose.model('User',userSchema);

app.get("*",function(req,res){
    res.sendFile(path+"index.html");
})

app.post("/signup",function(req,res){
    const newUser=new User({
        email:req.body.username,
        password:md5(req.body.password)
    });
    newUser.save(function(err){
        if(err) console.log(err);
        else res.redirect("/recipe");
    });
});

app.post("/login",function(req,res){
    const userName=req.body.username;
    const password=md5(req.body.password);

    User.findOne({email:userName},function(err,foundUser){
        if(err) console.log((err));
        else{
            if(foundUser){
                if(foundUser.password===password) res.redirect("/recipe");
            }
        }
    });
});


app.listen(3000,function(err){
    if(err) console.log(err);
    else console.log("Server started on port 3000");
});