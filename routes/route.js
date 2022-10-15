const router = require('express').Router();
const { createUser, getAllUsers, getUserById, getUserByEmail, deleteAllUsers, deleteUserById, updateUserById } = require('../controllers/controller');

router.post('/createUser', createUser); //http://localhost:5000/user/createUser
router.get('/getAllUsers', getAllUsers); //http://localhost:5000/user/getAllUsers
router.get('/getUserById', getUserById); //http://localhost:5000/user/getUserById
router.get('/getUserByEmail', getUserByEmail); //http://localhost:5000/user/getUserByEmail
router.delete('/deleteAllUsers', deleteAllUsers); //http://localhost:5000/user/deleteAllUsers
router.delete('/deleteUserById', deleteUserById); //http://localhost:5000/user/deleteUserById
router.patch('/updateUser', updateUserById); //http://localhost:5000/user/updateUser

module.exports =router;