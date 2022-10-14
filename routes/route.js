const router = require('express').Router();
const { test, createUser, getUsers, getUserById, deleteUserById } = require('../controllers/controller');

router.get('/', test);
router.post('/create', createUser);
router.get('/getUsers', getUsers);
router.get('/getUser', getUserById);
router.delete('/deleteUser', deleteUserById);

module.exports =router;