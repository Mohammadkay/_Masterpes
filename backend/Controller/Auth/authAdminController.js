const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const { Admin, ValidateRegisterAdmin, ValidateLoginAdmin, ValidateUpdateAdmin } = require('../../models/Admin')


/**-------------------------------------------------------------
 * @desc    Register New Admin
 * @route   /api/authAdmin/createAccount
 * @method  POST
 * @access private ( only Admin )  
---------------------------------------------------------------*/
module.exports.registerAdminCtr1 = asyncHandler(async (req, res) => {

    const { error } = ValidateRegisterAdmin(req.body)
    if (error) {
        return res.status(400).json({ message: error.details[0].message })
    }
    console.log(req.body.email)
    let admin = await Admin.findOne({ email: req.body.email })
    if (admin) {
        return res.status(400).json({ message: "user already exist" })
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    admin = new Admin({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
        position: req.body.position,
    })

    await admin.save()
    res.status(201).json({ message: "you registered successfully, please log in" })

})


/**-------------------------------------------------------------
 * @desc    Login Admin
 * @route   /api/authAdmin/login
 * @method  POST
 * @access private ( only Admin )  
---------------------------------------------------------------*/
module.exports.loginAdminCtrl = asyncHandler(async (req, res) => {
    const { error } = ValidateLoginAdmin(req.body)
    if (error) {
        return res.status(400).json({ message: error.details[0].message })
    }

    const admin = await Admin.findOne({ email: req.body.email })
    if (!admin) {
        return res.status(400).json({ message: "nvalid email or password" })
    }

    if (admin.isAdmin === true) {
        const isPasswordMatch = await bcrypt.compare(req.body.password, admin.password)
        if (!isPasswordMatch) {
            return res.status(400).json({ message: "Invalid email or password" })
        }

        const token = admin.generateAuthToken()

        res.status(200).json({
            _id: admin._id,
            isAdmin: admin.isAdmin,
            AdminPhoto: admin.AdminPhoto,
            token,
            username: admin.username,
            position: admin.position
        })
    } else {
        res.status(200).json({ message: "your account has not been activated" })
    }


})
