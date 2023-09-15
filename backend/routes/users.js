const express = require('express')
const router = express.Router()
const { verifyTokenAdmin, verifyTokenAndOnlyAuthorization } = require('../middlewares/verifyToken')
const validateObjectld = require('../middlewares/validateObjectld')
const { getAllUsertCtrl, getCountUsertCtrl, updateUserCtrl, deleteUsertCtrl } = require('../Controller/userController')
const photoUpload = require('../middlewares/photoupload')



// route 
router.route('/')
    .get(verifyTokenAdmin, getAllUsertCtrl)



router.route('/count')
    .get(verifyTokenAdmin, getCountUsertCtrl)



router.route('/:id')
    // .put(verifyTokenAndOnlyAuthorization, validateObjectld, photoUpload.single('image'), updateUserCtrl)
    .delete(verifyTokenAdmin, validateObjectld, deleteUsertCtrl)



module.exports = router
