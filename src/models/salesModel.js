const mongoose = require('mongoose');

const salesSchema = new mongoose.Schema({
  product: String,
  quantity: Number,
  price: Number,
  date: {
    type: Date,
    default: new Date().toISOString(),
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department', // Reference to the Department model
  },
  salaryExpense: Number, // Add a field to store salary expense
},
{ versionKey: false });

const Sales = mongoose.model('Sales', salesSchema);

module.exports = Sales;


