const express = require('express');
const app = express();
const port = 3001;

app.get("/",function(req,res){
  res.sendFile(__dirname + "/users.json");
 

});



app.listen(port,function(req,res){
    console.log("server is running in port 3001");
});


