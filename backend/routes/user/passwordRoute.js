const router = require("express").Router();
const { sendResetPasswordLinkCtrl, getResetPasswordLinkCtrl, resetPasswordCtrl } = require("../../controllers/User/passwordController");
const { verifyToken } = require('../../middlewares/verifyToken')

router.post("/reset-password-link", sendResetPasswordLinkCtrl);

router.post("/reset-password/:id", verifyToken, resetPasswordCtrl)

module.exports = router;
