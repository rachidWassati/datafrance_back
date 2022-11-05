const { getCspByCity } = require("../database/queries/csp.queries");


exports.cspByCity = async (req, res, next) => {
    try {
        const city = req.params.city;
        const datas = await getCspByCity(city);

        res.json(datas);

    } catch (error) {
        next(error);
    }
}