const mongoose = require('mongoose')
const Joi = require('joi')
const jwt = require('jsonwebtoken')


const Schema = mongoose.Schema


const AdminSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 100,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 100,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 8,
    },
    AdminPhoto: {
        type: Object,
        default: {
            url: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            publicId: null
        }
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    position: {
        type: String,
        enum: ['superVisor', 'admin', 'in active'],
        // required: true,
        default: 'in active',
    },

}, {
    timestamps: true,
}
)


//Generate Auth Token 
AdminSchema.methods.generateAuthToken = function () {
    return jwt.sign({ id: this._id, isAdmin: this.isAdmin }, process.env.JWT_SECRET)
}


//Model Admin
const Admin = mongoose.model("Admin", AdminSchema)


//Validate Register Admin
function ValidateRegisterAdmin(obj) {
    const Schema = Joi.object({
        username: Joi.string().min(2).max(100).trim().required(),
        email: Joi.string().min(5).max(100).trim().required().email(),
        password: Joi.string().min(8).trim().required(),
        // position: Joi.string().valid('superVisor', 'admin', 'in active').required()
    })
    return Schema.validate(obj)
}


//Validate login Admin
function ValidateLoginAdmin(obj) {
    const Schema = Joi.object({
        email: Joi.string().min(5).max(100).trim().required().email(),
        password: Joi.string().min(8).trim().required(),
    })
    return Schema.validate(obj)
}


//Validate Update Admin
function ValidateUpdateAdmin(obj) {
    const Schema = Joi.object({
        username: Joi.string().min(2).max(100).trim(),
        position: Joi.string().valid('superVisor', 'admin', 'in active')
    })
    return Schema.validate(obj)
}

// Validate New Password
function validateNewPassword(obj) {
    const schema = Joi.object({
        email: Joi.required(),
        password: Joi.required(),
    });
    return schema.validate(obj);
}

module.exports = { Admin, ValidateRegisterAdmin, ValidateLoginAdmin, ValidateUpdateAdmin, validateNewPassword }