const mongoose = require('mongoose');
const schema = mongoose.Schema;


const CitySchema = schema({
    insee: String,
    nom: String,
    cp: String,
    lien: String
}, {collection: 'cities'})


const City = mongoose.model('city', CitySchema);

module.exports = City;