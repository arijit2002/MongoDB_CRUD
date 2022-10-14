const router = require('express').Router();
const { createUser, getUsers, getUserById, deleteUserById } = require('../controllers/controller');

router.post('/createUser', createUser); //http://localhost:5000/user/createUser
router.get('/getUsers', getUsers); //http://localhost:5000/user/getUsers
router.get('/getUser', getUserById); //http://localhost:5000/user/getUser
router.delete('/deleteUser', deleteUserById); //http://localhost:5000/user/deleteUser

module.exports =router;