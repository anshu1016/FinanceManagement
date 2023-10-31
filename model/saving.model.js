// transactionModel.js
const mongoose = require('mongoose');

const SavingSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  description: String,
  amount: {
    type: Number,
    required: true,
  },
});

const Saving = mongoose.model('Saving', SavingSchema);

module.exports = Saving;
