var express = require('express');
var router = express.Router();

/* GET products */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* POST new product */
router.post('/', function(req, res, next) {
  
});

/* PUT update product */
router.put('/:id', function(req, res, next) {
  
});

/* DELETE delete product */
router.delete('/:id', function(req, res, next) {

});	

module.exports = router;
