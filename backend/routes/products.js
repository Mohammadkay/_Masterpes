const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const Category = require('../models/category');
const mongoose = require('mongoose');
const multer = require('multer');
const {
    getAllProducts,
    getProduct,
    addProducts,
    editProduct,
    deleteProduct,
    countProducts,
    countFeaturedProduct,
} = require(`../Controller/productsController`);






router.get(`/`, getAllProducts);

router.get(`/:id`, getProduct);

router.post(`/`, addProducts);

router.put('/:id', editProduct);

router.delete('/:id', deleteProduct);

router.get(`/get/count`, countProducts);

router.get(`/get/featured/:count`, countFeaturedProduct);



module.exports = router;
