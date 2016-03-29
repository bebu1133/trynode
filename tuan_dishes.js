var express = require('express');
var bodyParser = require('body-parser');

module.exports = function(word){
  var router = express.Router();
  router.use(bodyParser.json());

  router.route('/')
  .all(function(req,res,next) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        next();
  })

  .get(function(req,res,next){
          res.end('Will send all the '+ word +' to you!');
  })

  .post(function(req, res, next){
      res.end('Will add the ' + word + ': ' + req.body.name + ' with details: ' + req.body.description);
  })

  .delete(function(req, res, next){
          res.end('Deleting all ' + word);
  });

  router.route('/:id')
  .all(function(req,res,next) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        next();
  })

  .get(function(req,res,next){
          res.end('Will send details of the ' + word + ': ' + req.params.id +' to you!');
  })

  .put(function(req, res, next){
      res.write('Updating the dish: ' + req.params.id + '\n');
      res.end('Will update the '+word+': ' + req.body.name + ' with details: ' + req.body.description);
  })

  .delete(function(req, res, next){
          res.end('Deleting '+word+': ' + req.params.id);
  });

  return router;
}
