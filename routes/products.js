var database = require('../database');
var express = require('express');
var router = express.Router();

var products = database.products;

router.use((req, res, next) => {
	setTimeout(next, 1000);
});

/* GET products */
router.get('/', function(req, res, next) {
	products.sort(compareTitle);
	res.send(products);
});

/* POST new product */
router.post('/', function(req, res, next) {
	if (!req.body || req.body.length === 0) {
		res.status(400);
	} else {
		products.sort(compareId);

		var lastId = products[products.length - 1];
		var product = req.body.product;

		product.id = lastId.id + 1;

		products.push(product);
		res.status(201);
		products.sort(compareTitle);
		res.send(products);
	}
});

/* PUT update product */
router.put('/:id', function(req, res, next) {
	var idToEdit = req.params['id'];

	var prodReplace = 0;
	var product = req.body.product;

	if (product === undefined) {
		res.status(400);
	} else {
		products.forEach((element) => {
			if (idToEdit === element.id) {
				prodReplace = products.indexOf(element);
			}
		});
	}

	products.splice(prodReplace, 1, product);

	res.status(200);
	products.sort(compareTitle);
	res.send(products);
});

/* DELETE delete product */
router.delete('/:id', function(req, res, next) {
	var idToDelete = req.params['id'];

	var prodDelete = 0;
	if (idToDelete === undefined) {
		res.status(400);
	} else {
		products.forEach((element) => {
			if (idToDelete === element.id) {
				prodDelete = products.indexOf(element);
			}
		});
	}
	
	products.splice(prodDelete, 1);

	res.status(200);
	res.send(products);
});

function compareId(a, b) {
	if (a.id < b.id) {
		return -1;
	}
	if (a.id > b.id) {
		return 1;
	}

	return 0;
}

function compareTitle(a, b) {
	if (a.title.toLowerCase() > b.title.toLowerCase()) {
		return 1;
	}
	if (a.title.toLowerCase() < b.title.toLowerCase()) {
		return -1;
	}

	return 0;
}

module.exports = router;
