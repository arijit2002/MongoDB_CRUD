const router = require('express').Router();
const { test, createUser, getUsers } = require('../controllers/controller');

router.get('/', test);
router.post('/create', createUser);
router.get('/getUsers', getUsers);

module.exports =router;