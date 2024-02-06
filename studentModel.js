const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({

  firstName: {
    type: String

  },

  lastName: {
    type: String
  },



  email: {

    type: String
  },
  marks : {

    type : Number
   },
 

  phone: {
    type: String
  },
  address: {

    type: String
  },

  parent_Info: {

    type: mongoose.SchemaTypes.ObjectId,
    ref: "parentCollections"
  },

  added_By: {

    type: mongoose.Schema.Types.ObjectId,



  },

  roles: {
    type: String
  },



  class: {
    type: Number
  },

  active: {
    type: Boolean
  }

}, { timestamps: true })


const studtCollection = mongoose.model("studentCollections", studentSchema)

module.exports = studtCollection