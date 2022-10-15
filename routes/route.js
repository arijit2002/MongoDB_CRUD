const router = require('express').Router();
const { createUser, getUsers, getUserById, deleteAllUsers, deleteUserById, updateUserById } = require('../controllers/controller');

router.post('/createUser', createUser); //http://localhost:5000/user/createUser
router.get('/getUsers', getUsers); //http://localhost:5000/user/getUsers
router.get('/getUser', getUserById); //http://localhost:5000/user/getUser
router.delete('/deleteAllUsers', deleteAllUsers); //http://localhost:5000/user/deleteAllUsers
router.delete('/deleteUserById', deleteUserById); //http://localhost:5000/user/deleteUserById
router.patch('/updateUser', updateUserById); //http://localhost:5000/user/updateUser

module.exports =router;