const { getAllCities, getCityByRegex } = require("../database/queries/cities.queries");


exports.cityList = async (req, res, next) => {
    try {
        const villes = await getAllCities();
        res.json(villes.map(({nom}) => nom));
    } catch (error) {
        next(error);
    }
}

exports.city = async (req, res, next) => {
    try {
        const search = req.params.city;
        const city = await getCityByRegex(search);
        return res.json(city.map(({ nom }) => nom));
    } catch (error) {
        next(error);
    }
}