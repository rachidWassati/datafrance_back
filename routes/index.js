const router = require('express').Router();
const parse = require('csv-parse/lib/sync');
const fs = require('fs');

const villes_data = fs.readFileSync('./data/villes.csv').toString();
const records = parse(villes_data, {
    columns: true,
    skip_empty_lines: true
})

router.get('/', (req, res) => {
    const villes = records.map(rec => rec["nom"]);
    res.json(villes)
})

module.exports = router