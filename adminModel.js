
// //================================admin Collection===========================

const mongoose = require("mongoose")

const adminSchema = new mongoose.Schema({

  firstName: {
    type: String

  },

  lastName: {
    type: String
  },

  email: {

    type: String
  },

  phone: {
    type: String
  },
  address: {

    type: String
  },
  age : {

    type : Number
  },

  roles: {

    type: String
  },

  favouriteFruit : {

    type : String
  },
  
  gender : {

    type : String
  },

  teacher_info: {

    type: mongoose.SchemaTypes.ObjectId,
    ref: "Teachers"
  },



  active: {
    type: Boolean
  }

}, { timestamps: true })


const adminCollection = mongoose.model("adminCollections", adminSchema)

module.exports = adminCollection