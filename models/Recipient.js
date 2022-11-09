const mongoose = require('mongoose')
const slugify = require('slugify')

const addressSchema = new mongoose.Schema({
    email: {
        type: String,
        required: false
    },
    building: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: false
    },
    state: {
        type: String,
        required: false
    },
})


const RecipientSchema = new mongoose.Schema({
    username:{
        type: String,
        required: false

    },
    recipientFundId:{
        type: String,
        required: false,
        unique: true
    },
    address: addressSchema,
    guardianId: {
        type: String,
        required: false,
        unique: true
    },
    description: {
        type: String,
        required: false

    },
    password:{
        type: String,
        required: false
    },
    confirmPassword:{
        type: String,
        required: false
    },
    school:{
        type: String,
        required: false
    },
    schoolAddress:{
        type: String,
        required: false
    },
    schoolCity:{

    },
    userClass:{
        type: String,
        required: false
    },


}, {
    timestamps: true
})


module.exports = mongoose.model('Recipient', RecipientSchema)