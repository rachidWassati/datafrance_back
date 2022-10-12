const { getAllCities } = require("../database/queries/cities.queries");


exports.cityList = async (req, res, next) => {
    try {
        const villes = await getAllCities();
        res.json(villes.map(({nom}) => nom));
    } catch (error) {
        next(error);
    }
}