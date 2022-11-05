const mongoose = require('mongoose');
const schema = mongoose.Schema;

const CspSchema = schema({
    "ville": String,
    "lien": String,
    "Agriculteurs exploitants": Number,
    "Artisans, commerçants, chefs d'entreprise": Number,
    "Cadres et professions intellectuelles supérieures": Number,
    "Professions intermédiaires": Number,
    "Employés": Number,
    "Ouvriers": Number,
    "Aucun diplôme": Number,
    "CAP / BEP ": Number,
    "Baccalauréat / brevet professionnel": Number,
    "Diplôme de l'enseignement supérieur": Number,
    "Aucun diplôme (%) hommes": Number,
    "Aucun diplôme (%) femmes": Number,
    "CAP / BEP  (%) hommes": Number,
    "CAP / BEP  (%) femmes": Number,
    "Baccalauréat / brevet professionnel (%) hommes": Number,
    "Baccalauréat / brevet professionnel (%) femmes": Number,
    "Diplôme de l'enseignement supérieur (%) hommes": Number,
    "Diplôme de l'enseignement supérieur (%) femmes": Number,
    "De Bac +2 à Bac +4": Number,
    "De Bac +2 à Bac +4 (%) hommes": Number,
    "Bac +5 et plus (%) hommes": Number,
    "De Bac +2 à Bac +4 (%) femmes": Number,
    "Brevet des collèges (%) femmes": Number,
    "Bac +5 et plus": Number,
    "Brevet des collèges (%) hommes": Number,
    "Bac +5 et plus (%) femmes": Number,
    "Brevet des collèges": Number
}, {collection: 'csp'})

const Csp = mongoose.model('csp', CspSchema);

module.exports = Csp;