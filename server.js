var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'client')));
app.use(express.static(path.join(__dirname, 'bower_components')));

app.listen(8000, function(){
	console.log("Server is running")
})