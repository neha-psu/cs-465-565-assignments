var express = require('express');
var router = express.Router();

/* GET users listing. */
//The route defines a callback that will be invoked whenever an HTTP GET request
//   with the correct pattern is detected. The matching pattern is the route specified when the module 
//   is imported ('/users') plus whatever is defined in this file ('/'). 
//   In other words, this route will be used when an URL of /users/ is received.
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/cool', function(req, res, next) {
  res.send("You're so cool");
});
module.exports = router;
