const { cspByCity } = require('../controllers/csp.controller');

const router = require('express').Router();

router.get('/:city', cspByCity);

module.exports = router;