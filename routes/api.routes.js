const router = require('express').Router();
const parse = require('csv-parse/lib/sync');
const fs = require('fs');
const { categoryList } = require('../controllers/categories.controller');
const { cityList, city } = require('../controllers/cities.controllers');

const villes_data = fs.readFileSync('./data/villes.csv').toString();
const records = parse(villes_data, {
    columns: true,
    skip_empty_lines: true
})

router.get('/cities', cityList);
router.get('/cities/:city', city);
router.get('/categories', categoryList);

module.exports = router
