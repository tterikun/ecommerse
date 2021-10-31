const express = require('express');
const router = express.Router();

const { getAllProducts, getProductById} = require('../controller/productControllers');

//Get all product from db
//get /api/products
//access public
router.get('/', getAllProducts)

//Get a product by id from db
//get /api/products/:id
//access public
router.get('/:id', getProductById)

module.exports = router;