var express=require('express');
var app=express();

app.set("view engine","ejs");
app.use('/winner',express.static("stuff"));

//get post delete put
app.get("/",function(req,res) {
  res.render("index");
});
app.get("/contact",function (req,res) {
  res.render("contact");
});
app.get("/profile/:name",function(req,res) {
  var data ={age:22,job:'figher' ,arr:[1,2,3,4,5]};
  res.render('profile',{person:req.params.name,data:data});
});
app.listen(3000);
