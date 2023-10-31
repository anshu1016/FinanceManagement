const {Router} = require('express');
const expenseRouter = Router();
const {   getAllExpenses,
       addExpensesData,
       deleteExpensesData
} = require('../query/expense.query')

expenseRouter.get('/', async (req, res) => {
  try {
    const data = await getAllExpenses();
    res.json({ message: "Found expenses data", data })
  } catch (error) {
    console.error(error)
    res.status(404).json({ message: "No expense data found" })
  }
})
expenseRouter.post('/', async (req, res) => {
  try {
    const data = await addExpensesData(req.body);
    if (Object.keys(data).length > 0) {
      res.status(201).json({ message: "Data added to expense successfully", data })
    }
    else res.status(500).json({ message: "Check request body and try again", data })
  } catch (error) {
    console.error(error)
    res.status(400).json({ message: "Check request body and try again", error })
  }})

expenseRouter.delete('/:id', async (req, res) => {
  try {
    const response = await deleteExpensesData(req.params.id)
    if (response) {
      res.status(200).json({ message: "Data deleted successfully", data: response })
    }else{
      res.status(400).json({message:"Check request params id and try again", data: response})
    }
  } catch (error) {
        console.error(error);
    res.status(400).json({ message: "Check request params id and try again", error })
  }
})


module.exports= {expenseRouter}