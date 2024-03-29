const mongoose = require('mongoose')
const slugify = require('slugify')

const AdminSchema = new mongoose.Schema({

    ausername: {
        type: String,
        required: true,
        unique: true    
    },
    aemail: {
        type: String,
        required: false,
    },
    aposition:{
        type: String,
        required: false

    },
    apassword:{
        type:String,
        required: false
    },
    label:{
        type: String,
        default: "admin"

    }

}, {timestamps: true})



module.exports = mongoose.model('Admin', AdminSchema)