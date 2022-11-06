const Csp = require("../models/csp.model")


exports.getCspByCity = (city)  => {
    return Csp.find({ville: city}).exec();
}