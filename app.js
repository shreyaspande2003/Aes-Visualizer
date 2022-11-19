
const express = require('express');
const bodyParser = require("body-parser");
let ejs = require('ejs');
const app=express();
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
    res.render("home");
});

app.get("/keyround",function(req,res){
    res.render("keyround");
});


app.get("/key",function(req,res){
    res.render("key");
});

app.get("/encrypt",function(req,res){
    res.render("encrypt");
});
app.get("/keysbox",function(req,res){
    res.render("keysbox");
});





app.post("/index",function(req,res){ 

});

app.listen(process.env.PORT||3000);