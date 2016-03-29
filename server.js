var express = require('express');
var morgan  = require('morgan');
var server  = require('./dishes');


var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(morgan('dev'));

server('dish',function(err,router){
  if (err==null){
    app.use('/dishes',router);
  }
});
server('promotion',function(err,router){
  if (err==null){
    app.use('/promotion',router);
  }
});
server('leader',function(err,router){
  if (err==null){
    app.use('/leader',router);
  }
});

app.all('*',function(req,res){
  res.end('404 page not found!')
});
app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});
