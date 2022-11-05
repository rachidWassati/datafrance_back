const router = require('express').Router();

const cities = require('./cities.routes');
const categories = require('./categories.routes');
const csp = require('./csp.routes');

router.use('/cities', cities);
router.use('/categories', categories);
router.use('/csp', csp )

module.exports = router
