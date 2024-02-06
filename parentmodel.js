//====================parents collection=======================


const mongoose = require("mongoose")

const parentSchema = new mongoose.Schema({

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


  student_info: {
    type: mongoose.SchemaTypes.ObjectId,




  },

  roles: {

    type: String
  },


  added_By: {

    type: mongoose.Schema.Types.ObjectId,

  },

  active: {
    type: Boolean
  }

}, { timestamps: true })


const parentCollection = mongoose.model("parentCollections", parentSchema)

module.exports = parentCollection