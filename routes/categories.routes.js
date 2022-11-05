const { categoryList } = require('../controllers/categories.controller');

const router = require('express').Router();

router.get('/', categoryList);

module.exports = router;