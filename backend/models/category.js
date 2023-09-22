const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: Object,
        default: {
            url: "",
            publicId: null
        }
    },
   
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
