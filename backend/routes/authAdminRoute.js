const express = require('express')
const router = express.Router()
const { registerAdminCtr1, loginAdminCtrl } = require('../Controller/Auth/authAdminController')


//Create Admin
router.post('/createAccount', registerAdminCtr1)


//Login User
router.post('/login', loginAdminCtrl)


module.exports = router