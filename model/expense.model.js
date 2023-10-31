const { Schema, model } = require('mongoose');

const expenseSchema = Schema({
  category: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  description:{
    type:String,
  },
  amount:{
    type:Number,
    required:true
  }

})

const Expenses = model('expenses', expenseSchema);
module.exports = {Expenses}
