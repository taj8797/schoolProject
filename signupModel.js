const mongoose= require("mongoose")

const signupSchema = new mongoose.Schema({

userName : {

    type : String
},

email : {

    type : String
},

password : {

    type : String
}



},{timestamps : true})

const signupCollection = ("signupCollections",signupSchema)

module.exports = signupCollection