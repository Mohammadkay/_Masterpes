const Category = require('../models/category');
const express = require('express');
const router = express.Router();
const {
    getCategories,
    getCategory,
    addCategory,
    
    deleteCategory,
} = require('../Controller/categoriesController');
const photoUpload = require('../middlewares/photoupload');
router.route(`/`).get(getCategories).post(photoUpload.single('image'),addCategory);
router.route(`/:id`).get(getCategory).delete(deleteCategory);

module.exports = router;
