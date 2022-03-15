const mongoose = require('mongoose')

// SChema for model
const mainSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now()
    },
    x: {
        y: {
            type: String
        }
    }
})

// create the model and export 
const mainModel = new mongoose.model('data', mainSchema)

module.exports = mainModel