const express = require('express')
const router = express.Router()
const { verifyToken, verifyTokenAndOnlyUser ,verifyTokenAdmin} = require('../../middlewares/verifyToken')
const validateObjectld = require('../../middlewares/validateObjectld')
const { getAllUsertCtrl, getCountUsertCtrl, changePasswordCtrl, updateUserCtrl, deleteUsertCtrl } = require('../../Controller/user/userController')
const photoUpload = require('../../middlewares/photoupload')



// route 
router.route('/')
    .get(verifyToken, getAllUsertCtrl)



router.route('/count')
    .get(verifyToken, getCountUsertCtrl)


router.route('/change-password/:id')
    .put(verifyTokenAndOnlyUser, changePasswordCtrl)


router.route('/:id')
    .put(verifyToken, validateObjectld, updateUserCtrl)
    .delete(verifyTokenAdmin, validateObjectld, deleteUsertCtrl)



module.exports = router