const { Schema, model } = require('mongoose');

const incomeSchema = Schema({
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

const Income = model('incomes', incomeSchema);
module.exports = {Income}
