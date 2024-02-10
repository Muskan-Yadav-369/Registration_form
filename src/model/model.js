const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  fatherName: {
    type: String,
    required: true
  },
  class: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  location: {
    type: String,
    required: true
  }
});

const studentCollection = new mongoose.model('studentcollection', studentSchema);

module.exports = studentCollection;
