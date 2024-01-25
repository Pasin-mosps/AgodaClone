const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name:{
        type: String,
    },
    detail: {
        type :String
    },
    price: {
        type :Number,
    },
    file: {
        type: String,
        default: 'Noimage.jpg'
    }
},{timestamps: true})
module.exports = mongoose.model('product', productSchema)