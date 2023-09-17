const asyncHandler = require('express-async-handler')
const { User, ValidateUpdateUser, validatechangePassword } = require('../../models/User')
const bcrypt = require('bcryptjs')
const { cloudinaryUploadImage, cloudinaryRemoveImage } = require('../../utils/cloudinary')
const fs = require('fs')
const path = require('path')


/**-------------------------------------------------------------
 *  @desc Get all users 
 *  @route /api/users
 *  @method GET
 *  @access public
---------------------------------------------------------------*/
const getAllUsertCtrl = asyncHandler(async (req, res) => {
    const user = await User.find()
    res.status(200).json(user)
})


/**-------------------------------------------------------------
 *  @desc Get Count users
 *  @route /api/users/count
 *  @method GET
 *  @access private ( only Admin )  
---------------------------------------------------------------*/
const getCountUsertCtrl = asyncHandler(async (req, res) => {
    const user = await User.count()
    res.status(200).json(user)
})



/**-------------------------------------------------------------
 *  @desc Update a users 
 *  @route /api/users/:id
 *  @method PUT
 *  @access private ( only User )  
---------------------------------------------------------------*/
const updateUserCtrl = asyncHandler(async (req, res) => {
    if (req.user.id !== req.params.id) {
        return res.status(403).json({ message: 'You are not allowed to update this profile' });
    }

    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (req.body.fullName) {
            user.username = req.body.fullName;
        }

        if (req.body.bio) {
            user.bio = req.body.bio;
        }

        if (req.body.address) {
            user.address = req.body.address;
        }

        await user.save();

        // Send the updated user object as the response
        res.status(200).json(user);
    } catch (error) {
        // Handle any potential errors here
        console.error(error);
        res.status(500).json({ message: 'An error occurred while updating the user' });
    }
});


/**-------------------------------------------------------------
 *  @desc Delete a users
 *  @route /api/users/:id
 *  @method DELETE
 *  @access private ( only Admin )  
---------------------------------------------------------------*/
const deleteUsertCtrl = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
        await User.deleteOne({ _id: req.params.id })
        res.status(200).json({ message: "User has been deleted" })
    } else {
        res.status(404).json({ message: "User not found!" })
    }
})




/** 
 * @desc    Change Password
 * @route   /api/users/change-password/:id
 * @method  POST
 * @access  public
*/
const changePasswordCtrl = asyncHandler(async (req, res) => {
    // const { error } = validatechangePassword(req.body);
    // if (error) {
    //     return res.status(400).json({ message: error.details[0].message });
    // }


    const user = await User.findOne({ _id: req.params.id });

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    const isPasswordMatch = await bcrypt.compare(req.body.currentPassword, user.password);
    if (!isPasswordMatch) {
        return res.status(401).json({ message: "Invalid current password" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.newPassword, salt);

    user.password = hashedPassword;
    await user.save();

    res.status(200).json({ message: "Password successfully changed" });
})






module.exports = { getAllUsertCtrl, getCountUsertCtrl, updateUserCtrl, deleteUsertCtrl, changePasswordCtrl }