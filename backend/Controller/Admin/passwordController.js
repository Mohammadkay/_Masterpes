const asyncHandler = require('express-async-handler')
const { Admin, validateNewPassword } = require('../../models/Admin')
const bcrypt = require('bcryptjs')


/**-------------------------------------------------------------
 *  @desc Update a Admin 
 *  @route /api/admin/password/rest-password/:id
 *  @method PUT
 *  @access private ( only Admin )  
---------------------------------------------------------------*/
const updateAdminPasswordCtrl = asyncHandler(async (req, res) => {
    const { error } = validateNewPassword(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    const admin = await Admin.findOne({ email: req.body.email });
    if (!admin) {
        return res.status(400).json({ message: "The admin is not found" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    admin.password = hashedPassword;
    await admin.save();

    res.status(200).json({ message: "Password successfully changed" });
});

module.exports = { updateAdminPasswordCtrl }
