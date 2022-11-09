const mongoose = require('mongoose')
const slugify = require('slugify')

const DonorSchema = new mongoose.Schema({
    dusername: {
        type: String,
        required: false,
    },
    demail: {
        type: String,
        required: false,
    },
    dpassword:{
        type: String,
        required: false

    }
}, {timestamps: true})


module.exports = mongoose.model('Donor', DonorSchema)