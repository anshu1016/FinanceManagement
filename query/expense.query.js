const {Expenses} = require('../model/expense.model.js');


const getAllExpenses = async () => {
  try {
    const expenses = await Expenses.find({});
    return expenses;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const addExpensesData = async (expenseData)=>{
  try {
    const newExpense = new Expenses(expenseData);
    const savedExpense = await newExpense.save()
    return savedExpense
  } catch (error) {
    console.error(error)
    throw error
  }
}

const deleteExpensesData = async (expenseId)=>{
  try {
     await Expenses.findByIdAndDelete(expenseId);
    const updatedExpenses = await Expenses.find({});
    return updatedExpenses
  } catch (error) {
    console.error(error)
    throw error
  }
}

module.exports = {
  getAllExpenses,
  addExpensesData,
  deleteExpensesData
}