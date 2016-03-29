var express = require('express');
var morgan = require('morgan');
var dishes= require('./dishes');

var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(morgan('dev'));
app.use('/dishes',dishes);

app.all('*',function(req,res){
  res.end('404 page not found!')
});
app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});
