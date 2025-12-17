const express=require('express')
const { userControllers } = require('../controllers')

const router=express.Router()

router.post('/createUser',userControllers.createUser)
router.get('/getAllUsers',userControllers.getUsers)
router.patch('/updateUser/:id',userControllers.updateUser)
router.delete('/deleteUser/:id',userControllers.deleteUser)
router.get('/getUserById/:id',userControllers.getSingleUser)

module.exports = router