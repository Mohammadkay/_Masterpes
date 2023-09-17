const express = require('express');
const router = express.Router();

const {
    getAllProducts,
    getProduct,
    addProducts,
    editProduct,
    deleteProduct,
    countProducts,
    getByCategory
} = require(`../Controller/productsController`);
const photoUpload = require('../middlewares/photoupload');

router.get(`/`, getAllProducts);

router.get(`/:id`, getProduct);

router.post(`/`, photoUpload.single('image'),addProducts);

router.put('/:id', editProduct);

router.delete('/:id', deleteProduct);

router.get(`/get/count`, countProducts);

router.get('/byCategory/:id',getByCategory)





module.exports = router;
