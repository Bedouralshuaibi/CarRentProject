const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    brand: String,
    type: String,



}, {
    timestamps: true,
})

const Car = mongoose.model('Car', carSchema)
module.exports = Car;