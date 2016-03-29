var express = require('express');
var bodyParser = require('body-parser');
module.exports = function(link,callback) {
  try {
    if (link==null) {
        throw new Error("loi gi do");
    }
    else{
      var router = express.Router();
      router.use(bodyParser.json());
      router.route('/')
      .all(function(req,res,next) {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            next();
      })

      .get(function(req,res,next){
              res.end('Will send all the '+link+' to you!');
      })

      .post(function(req, res, next){
          res.end('Will add the '+link+': ' + req.body.name + ' with details: ' + req.body.description);
      })

      .delete(function(req, res, next){
              res.end('Deleting all '+link);
      });

      router.route('/:Id')
      .all(function(req,res,next) {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            next();
      })

      .get(function(req,res,next){
        throw new Error("loi gi do");
        res.end('Will send details of the '+link+': ' + req.params.Id +' to you!');
      })

      .put(function(req, res, next){
              res.write('Updating the '+link+': ' + req.params.Id + '\n');
          res.end('Will update the '+link+': ' + req.body.name +
                  ' with details: ' + req.body.description);
      })

      .delete(function(req, res, next){
              res.end('Deleting '+link+': ' + req.params.Id);
      });

      callback(null, router);
    }
  }
  catch (error) {
        callback(error,null);
  }
}
