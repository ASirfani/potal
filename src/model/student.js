const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  qualification: String,
  age: Number,
  number: String,
  city: String,
  skills: [String],
  email: {
    type: String,
    required: true,
  },
  course: [String],
  classesSchedule: [String],
  classes: [String]
});

module.exports = mongoose.model('Student', studentSchema);
