const { getAllCategories } = require("../database/queries/categories.queries");


exports.categoryList = async (req, res, next) => {
    try {
        const categories = await getAllCategories();
        res.json(categories.map(({ category }) => category));
    } catch (error) {
        next(error);
    }
}