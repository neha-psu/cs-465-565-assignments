var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

//if u have index.html inside the public folder 
// app.use(express.static("public"));

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/submit', function(req, res){
    console.log(req.body);
    res.send("<strong>Name: </strong>" + req.body.name + 
            "<br><strong>Email: </strong>" + req.body.email +
            "<br><strong>Comment: </strong>" + req.body.comment);
});

app.listen(8080);
console.log("app is listening to port 8080");