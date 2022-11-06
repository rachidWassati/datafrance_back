const { getCspByCity } = require("../database/queries/csp.queries");


exports.cspByCity = async (req, res, next) => {
    try {
        const city = req.params.city;
        const data = await getCspByCity(city);

        res.json(data);

    } catch (error) {
        next(error);
    }
}