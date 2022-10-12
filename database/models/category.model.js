const mongoose = require('mongoose');
const schema = mongoose.Schema;

const CategorySchema = schema({
    category: String
}, {collection: 'categories'});


const Category = mongoose.model('category', CategorySchema);

module.exports = Category;