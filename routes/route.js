const router = require('express').Router();
const { test, createUser } = require('../controllers/controller');

router.get('/', test);
router.post('/create', createUser);

module.exports =router;