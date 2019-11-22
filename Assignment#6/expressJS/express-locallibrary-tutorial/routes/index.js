var express = require('express');//load express module
var router = express.Router();// express object to get an express.Router object

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
