const City = require("../models/city.model");

exports.getAllCities = () => {
    return City.find({}).exec();
}
