const Category = require("../models/category.model")


exports.getAllCategories = () => {
    return Category.find({}).exec();
}