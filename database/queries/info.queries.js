const Info = require("../models/info.model")


exports.getInfosByCity = (city) => {
    return Info.findOne({ville: city}).exec();
}