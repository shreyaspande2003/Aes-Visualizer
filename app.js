
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

app.get("/round",function(req,res){
    res.render("round");
});

app.get("/roundxor",function(req,res){
    res.render("roundxor");
});

app.get("/shift_rows",function(req,res){
    res.render("shift_rows");
});
app.get("/mix_column",function(req,res){
    res.render("MxCol");
});
app.get("/EncSbox",function(req,res){
    res.render("EncSbox");
});

app.get("/keyround",function(req,res){
    res.render("keyround");
});


app.get("/key",function(req,res){
    res.render("key");
});
app.get("/keyallxor",function(req,res){
    res.render("keyallxor");
});

app.get("/encrypt",function(req,res){
    res.render("encrypt");
});
app.get("/keysbox",function(req,res){
    res.render("keysbox");
});





app.post("/index",function(req,res){ 

});

app.listen(process.env.PORT || 4000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });