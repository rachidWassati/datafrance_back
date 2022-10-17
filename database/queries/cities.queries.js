const City = require("../models/city.model");

exports.getAllCities = () => {
    return City.find({}).exec();
}

exports.getCityByRegex = (search) => {
    return City.find({nom: new RegExp(search, 'i')}).exec();
}
