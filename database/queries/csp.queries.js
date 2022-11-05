const Csp = require("../models/csp.model")


exports.getCspByCity = (city)  => {
    Csp.find({ville: city}).exec();
}