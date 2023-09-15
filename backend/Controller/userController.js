const asyncHandler = require('express-async-handler')
const { User, ValidateUpdateUser } = require('../models/user')
const bcrypt = require('bcryptjs')
const { cloudinaryUploadImage, cloudinaryRemoveImage } = require('../utils/cloudinary')//../..


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
// const updateUserCtrl = asyncHandler(async (req, res) => {
//     if (req.user.id !== req.params.id) {
//         return res.status(403).json('you are not allowed, you only can update your profilel')
//     }

//     const { error } = ValidateUpdateUser(req.body)
//     if (error) {
//         return res.status(400).json({ message: error.details[0].message })
//     }

//     if (req.body.password) {
//         const salt = await bcrypt.genSalt(10)
//         req.body.password = await bcrypt.hash(req.body.password, salt)
//     }
//     const user = await User.findById(req.params.id);

//     if (!user) {
//         res.status(404).json({ message: "User not found" })
//     }

//     if (user.profilePhoto.publicId !== null) {
//         await cloudinaryRemoveImage(user.profilePhoto.publicId)
//     }
//     console.log(__dirname)

//     const imagePath = path.join(__dirname, `../../images/${req.file.filename}`)
//     const result = await cloudinaryUploadImage(imagePath)

//     let updateUser = await User.findByIdAndUpdate(req.params.id, {
//         $set: {
//             email: req.body.email,
//             userName: req.body.userName,
//             password: req.body.password,
//             bio: req.body.bio,
//             phone: req.body.phone,
//             address: req.body.address,
//             profilePhoto: {
//                 url: result.secure_url,
//                 publicId: result.public_id
//             }
//         }
//     }, { new: true }).select('-password')

//     fs.unlinkSync(imagePath);
//     res.status(200).json(updateUser)

// })



/**-------------------------------------------------------------
 *  @desc Delete a users
 *  @route /api/users/:id
 *  @method DELETE
 *  @access private ( only Admin )  
---------------------------------------------------------------*/
const deleteUsertCtrl = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {

        if (user.profilePhoto.publicId !== null) {
            await cloudinaryRemoveImage(user.profilePhoto.publicId)
        }
        await User.deleteOne({ _id: req.params.id })

        res.status(200).json({ message: "User has been deleted" })
    } else {
        res.status(404).json({ message: "User not found!" })
    }
})



module.exports = { getAllUsertCtrl, getCountUsertCtrl, deleteUsertCtrl }