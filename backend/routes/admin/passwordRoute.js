const express = require('express')
const router = express.Router()
const { verifyTokenAdmin } = require('../../middlewares/verifyToken')
const { updateAdminPasswordCtrl } = require('../../Controller/Admin/passwordController')//controllers/admin/passwordController


// route 
router.route('/rest-password')
    .put(verifyTokenAdmin, updateAdminPasswordCtrl)




module.exports = router
