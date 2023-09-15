const express = require('express')
const router = express.Router()
const { verifyTokenAdmin } = require('../../middlewares/verifyToken')
const validateObjectld = require('../../middlewares/validateObjectld')
const { getAllAdminCtrl, getAdminIdCtrl, upDateActiveAdminCrtl, updateAdminCtrl, deleteAdmintCtrl } = require('../../Controller/Admin/admin')


// route 
router.route('/')
    .get(verifyTokenAdmin, getAllAdminCtrl)


router.route('/active/:id')
    .put(verifyTokenAdmin, validateObjectld, upDateActiveAdminCrtl)

router.route('/:id')
    .get(verifyTokenAdmin, validateObjectld, getAdminIdCtrl)
    .put(verifyTokenAdmin, validateObjectld, updateAdminCtrl)
    .delete(verifyTokenAdmin, validateObjectld, deleteAdmintCtrl)



module.exports = router
