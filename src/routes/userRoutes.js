const express=require('express')
const { userControllers } = require('../controllers')

const router=express.Router()

router.post('/createUser',userControllers.createUser)

module.exports = router