const express=require("express");
var app= express();

app.get("/",(req,res)=>{
    res.send("hello");
})


app.listen(process.env.PORT,()=>{
  console.log("port is 8080");
})
