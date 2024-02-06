const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phone: {
    type: Number
  },

  address: {

    type: String

  },

  roles: {

    type: String
  },

  active: {

    type: Boolean
  },

 
  added_By: {

    type: mongoose.SchemaTypes.ObjectId,
  },


  email: {
    type: String,
    required: true
  },
  subjects: [{
    type: String,
  }],
  // Add more fields as needed
}, { timestamps: true });

const Teacher = mongoose.model('Teachers', teacherSchema);

module.exports = Teacher;