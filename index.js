var express = require('express');
var path = require('path');
var app = express();

app.set('view engine', 'ejs');

app
  .route("/")
  .get((req, res) => {
    res.send("uhhhh... " + Math.random() + " " + Date.now());
  })
  .put((req, res) => {
     res.sendFile(path.join(process.cwd(),'put.html'))
  })
  .delete((req, res) => {
    res.json({"good" : "yep"})
  })

app
  .get("/test-ejs", (req, res) => {
    res.render('pages/index', {myTitle:"qlwndqwiondoqwidjwqjdio"});
  })
  
var server = app.listen(3000,function(){
  console.log('server is now running on http://localhost:3000');
});