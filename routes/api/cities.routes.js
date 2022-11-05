const { cityList, city } = require('../../controllers/cities.controllers');

const router = require('express').Router();

router.get('/', cityList);
router.get('/:city', city);

module.exports = router;