var database = require('../database');
var express = require('express');
var router = express.Router();

var products = database.products;

router.use((req, res, next) => {
  setTimeout(next, 1000);
});

/* GET products */
router.get('/', function(req, res, next) {
  res.send(products);
});

/* POST new product */
router.post('/', function(req, res, next) {
  res.status(404);
  res.send("to be implemented");
});

/* PUT update product */
router.put('/:id', function(req, res, next) {
  res.status(404);
  res.send("to be implemented");
});

/* DELETE delete product */
router.delete('/:id', function(req, res, next) {
  res.status(404);
  res.send("to be implemented");
});	

module.exports = router;
