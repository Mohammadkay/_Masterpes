const express = require('express')
const router = express.Router()
const { registerUserCtr1, loginUserCtrl } = require("../Controller/Auth/authUserController")


//Register New User
router.post('/register', registerUserCtr1)


//Login User
router.post('/login', loginUserCtrl)


module.exports = router