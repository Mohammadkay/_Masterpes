const asyncHandler = require('express-async-handler')
const { Admin, ValidateUpdateAdmin } = require('../../models/Admin')

/**-------------------------------------------------------------
 *  @desc Get all Admin 
 *  @route /api/admin
 *  @method GET
 *  @access private ( only Admin )  
---------------------------------------------------------------*/
const getAllAdminCtrl = asyncHandler(async (req, res) => {
    const admin = await Admin.find()
    res.status(200).json(admin)
})


/**-------------------------------------------------------------
 *  @desc Get Admin By Id  
 *  @route /api/admin/:id
 *  @method GET
 *  @access private ( only Admin )  
---------------------------------------------------------------*/
const getAdminIdCtrl = asyncHandler(async (req, res) => {
    const admin = await Admin.findById(req.params.id)
    res.status(200).json(admin)
})


/**
 *  @desc Active Admin
 *  @route /api/admin/active/:id
 *  @method PUT
 *  @access private ( only Admin )  
 */
const upDateActiveAdminCrtl = asyncHandler(async (req, res) => {
    const admin = await Admin.findById(req.params.id)
    if (admin) {
        if (admin.isAdmin === true) {
            admin.isAdmin = false
            await admin.save()
            res.status(200).json({ message: "The account has been deactivated successfully" });
        } else {
            admin.isAdmin = true
            await admin.save()
            res.status(200).json({ message: "The account has been activated successfully" });
        }
    } else {
        res.status(404).json({ message: "Admin not found . . !" });
    }
})


/**-------------------------------------------------------------
 *  @desc Update a Admin 
 *  @route /api/admin/:id
 *  @method PUT
 *  @access private ( only Admin )  
---------------------------------------------------------------*/
const updateAdminCtrl = asyncHandler(async (req, res) => {
    // const { error } = ValidateUpdateAdmin(req.body)
    // if (error) {
    //     res.status(400).json({ message: error.details[0].message })
    // }

    const admin = await Admin.findById(req.params.id);

    if (!admin) {
        return res.status(404).json({ message: "Admin not found . . !" });
    }

    // Update only if data is present in the request body
    if (req.body.username) {
        admin.username = req.body.username;
    }

    if (req.body.position) {
        admin.position = req.body.position;
    }

    // Save the updated admin document
    const updatedAdmin = await admin.save();
    res.status(200).json(updatedAdmin);
});




/**-------------------------------------------------------------
 *  @desc Delete a admin
 *  @route /api/admin/:id
 *  @method DELETE
 *  @access private ( only Admin )  
---------------------------------------------------------------*/
const deleteAdmintCtrl = asyncHandler(async (req, res) => {
    const admin = await Admin.findById(req.params.id);
    if (admin) {
        await Admin.deleteOne({ _id: req.params.id });
        res.status(200).json({ message: "Admin has been deleted" });
    } else {
        res.status(404).json({ message: "Admin not found!" });
    }
})




module.exports = { getAllAdminCtrl, getAdminIdCtrl, upDateActiveAdminCrtl, updateAdminCtrl, deleteAdmintCtrl }