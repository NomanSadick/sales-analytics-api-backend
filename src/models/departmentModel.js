const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  name: String,
  salaryExpense: Number,
}, { versionKey: false }); // Set versionKey to false

const Department = mongoose.model('Department', departmentSchema);

module.exports = Department;

