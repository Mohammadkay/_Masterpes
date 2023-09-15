const Category = require('../models/category');
const express = require('express');
const router = express.Router();
const {
    getCategories,
    getCategory,
    addCategory,
    editCategory,
    deleteCategory,
} = require('../Controller/categoriesController');
router.route(`/`).get(getCategories).post(addCategory);
router.route(`/:id`).get(getCategory).put(editCategory).delete(deleteCategory);

module.exports = router;
