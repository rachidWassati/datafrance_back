const { getInfosByCity } = require("../database/queries/info.queries");


exports.infoByCity = async (req, res, next) => {
    try {
        const city = req.params.city;
        const data = await getInfosByCity(city);
        console.log(data);

        res.json(data);
    } catch (error) {
        next(error);
    }
}