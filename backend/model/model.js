const mongoose = require('mongoose')
const muv = require('mongoose-unique-validator')


const userSchema = mongoose.Schema({
    fisrtName : {type : String, requred : true},
    lastName : {type : String, requred : true},
    email : {type : String, requred : true, unique : true},
    password : {type : String, requred : true},
    date : { type : Date, default : Date.now}

})

mongoose.plugin(muv)
//mongoose.model('user', userSchema)
module.exports = mongoose.model('user', userSchema)