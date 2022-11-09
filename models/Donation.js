const mongoose = require('mongoose')
const slugify = require('slugify')

const DonationSchema = new mongoose.Schema({
    dontationAmount: {
        type: String,
        required: false,
    },
    recipientFundsId: {
        type: String,
        required: false,
    },
    donorId:{
        type: String,
        required: false
    },

}, {timestamps: true})

module.exports = mongoose.model('Donation', DonationSchema)