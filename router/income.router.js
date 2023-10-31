const { Router } = require('express')

const incomeRouter = Router();
const {addIncomeData,
 updateIncomeData,
getAllIncomeItems,
 deleteIncomeItem
} = require('../query/income.query.js')

incomeRouter.get('/', async (req, res) => {
  try {
    const data = await getAllIncomeItems();
    res.json({ message: "Found income data", data })
  } catch (error) {
    console.error(error)
    res.status(404).json({ message: "No income data found" })
  }
})

incomeRouter.post('/', async (req, res) => {
  try {
    console.log("request body", req.body)
    const data = await addIncomeData(req.body);

    if (Object.keys(data).length > 0) {
      res.status(201).json({ message: "Data added to income successfully", data })
    }
    else res.status(500).json({ message: "Check request body and try again", data })
  } catch (error) {
    console.error(error)
    res.status(400).json({ message: "Check request body and try again", error })
  }
})

incomeRouter.delete('/:id', async (req, res) => {
  try {
    const data = await deleteIncomeItem(req.params.id);
    if (data) {
      res.status(200).json({ message: "Data deleted successfully", data })
    }
  } catch (error) {
    console.error(error)
    res.status(400).json({ message: "Check request body and try again", error })
  }
})
incomeRouter.post('/:id', async (req, res) => {
  try {
    const response = await updateIncomeData(req.params.id, req.body);
    if (response) {
      res.status(202).json({ message: "Data updated successfully", data: response })
    } else res.json()
  } catch (error) {
    console.error(error)
    res.status(400).json({ message: "Check request body and try again", error })
  }
})

module.exports = incomeRouter;
