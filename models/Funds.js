const mongoose = require('mongoose')
const slugify = require('slugify')

const FundsSchema = new mongoose.Schema({

    recipientsCurrentFunds:{
        type: Number,
        required: false
    },
    recipientsTargetFunds:{
        type: Number,
        required: false
    }

}, {timestamps: true})

module.exports = mongoose.model('Funds', FundsSchema)