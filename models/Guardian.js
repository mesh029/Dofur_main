const mongoose = require('mongoose')
const slugify = require('slugify')

const addressSchema = new mongoose.Schema({
    gEmail: {
        type: String,
        required: false
    },
    gBuilding: {
        type: String,
        required: false
    },
    gCity: {
        type: String,
        required: false
    },
    gState: {
        type: String,
        required: false
    },
    gPhone:{
        type: String, 
        required: false
    }
})

const GuardianSchema = new mongoose.Schema({

    gname: {
        type: String,
        required: true

    },
    gaddress: addressSchema,


}, {
    timestamps: true
})


module.exports = mongoose.model('Guardian', GuardianSchema)