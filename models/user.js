let mongoose = require('mongoose')

let userSchema = mongoose.Schema({
    id:Number,
    name:String
}) 


module.exports = mongoose.model('users',userSchema)