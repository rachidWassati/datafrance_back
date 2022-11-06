const { infoByCity } = require('../../controllers/info.controller');

const router = require('express').Router();

router.get('/:city', infoByCity);

module.exports = router;