const mongoose = require('mongoose');
const schema = mongoose.Schema;

const InfoSchema = schema({
    "ville": String,
    "lien": String,
    "Code Insee": String,
    "Région": String,
    "Département": String,
    "Etablissement public de coopération intercommunale (EPCI)": String,
    "Code postal (CP)": String,
    "Nom des habitants": String,
    "Population (2018)": String,
    "Population : rang national (2018)": String,
    "Densité de population (2018)": String,
    "Taux de chômage (2018)": String,
    "Pavillon bleu": String,
    "Ville d'art et d'histoire": String,
    "Ville fleurie": String,
    "Ville internet": String,
    "Superficie (surface)": String,
    "Altitude min": Object,
    "Altitude max": Object,
    "Latitude": String,
    "Longitude": String
}, {collection: 'infos'})

const Info = mongoose.model('info', InfoSchema);

module.exports = Info;