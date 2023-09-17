const Product = require('../models/product');
const Category = require('../models/category');
const mongoose = require('mongoose');
const fs = require('fs')
const path = require('path')
const { cloudinaryUploadImage, cloudinaryRemoveImage } = require('../utils/cloudinary')





exports.getAllProducts = async (req, res) => {
    let filter = {};
    if (req.query.categories) {
        filter = { category: req.query.categories.split(',') };
    }

    const productList = await Product.find(filter).populate('category');

    if (!productList) {
        res.status(500).json({ success: false });
    }
    res.send(productList);
};

exports.getProduct = async (req, res) => {
    const product = await Product.findById(req.params.id).populate('category');

    if (!product) {
        res.status(500).json({ success: false });
    }
    res.send(product);
};

exports.addProducts = async (req, res) => {
try{
    console.log(req.file.filename)
    console.log("dsasdadsasa")
    const imagePath = path.join(__dirname, `../images/${req.file.filename}`)
    console.log(req.body)
    const result = await cloudinaryUploadImage(imagePath)

    const product = new Product({
        name: req.body.name,
        description: req.body.description,
        image: {
            url: result.secure_url,
            publicId: result.public_id
        },
        brand: req.body.brand,
        price: req.body.price,
        category: req.body.category,
    })
    await Product.create(product)
  fs.unlinkSync(imagePath)
    res.status(201).json({ message: 'Post added successfully' })
}catch(err){
res.status(400).json({
    message:"fail",
    error: err.message
})
}
};

exports.editProduct = async (req, res) => {
    try {
        const productId = req.params.id;

        if (!mongoose.isValidObjectId(productId)) {
            return res.status(400).send('Invalid Product Id');
        }

        const category = await Category.findById(req.body.category);
        if (!category) {
            return res.status(400).send('Invalid Category');
        }

        const product = await Product.findById(productId);
        if (!product) {
            return res.status(400).send('Invalid Product!');
        }

        const updatedProductFields = {
            name: req.body.name,
            description: req.body.description,
            richDescription: req.body.richDescription || product.richDescription,
            brand: req.body.brand || product.brand,
            price: req.body.price || product.price,
            category: req.body.category,
        };

     

        const updatedProduct = await Product.findByIdAndUpdate(
            productId,
            updatedProductFields,
            { new: true }
        );

        if (!updatedProduct) {
            return res.status(500).send('The product cannot be updated!');
        }

        res.send(updatedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};


exports.deleteProduct = (req, res) => {
    Product.findByIdAndRemove(req.params.id)
        .then((product) => {
            if (product) {
                return res.status(200).json({
                    success: true,
                    message: 'the product is deleted!',
                });
            } else {
                return res
                    .status(404)
                    .json({ success: false, message: 'product not found!' });
            }
        })
        .catch((err) => {
            return res.status(500).json({ success: false, error: err });
        });
};

exports.countProducts = async (req, res) => {
    try {
        const categories = await Category.find(); // Fetch all categories
        const productCountByCategory = [];

        for (const category of categories) {
            const count = await Product.countDocuments({ category: category._id });
            productCountByCategory.push(count);
        }

        res.status(200).json(productCountByCategory);
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}
exports.getByCategory = async (req, res) => {
    try {
        const catId = req.params.id;
        const products = await Product.find({ 'category': catId }); 

        res.status(200).json(
            products
        );
    } catch (err) {
        console.log(err);
        res.status(400).json({ success: false, message: 'Products not found!' });
    }
};


