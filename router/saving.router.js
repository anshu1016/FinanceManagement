// api.js
const express = require('express');
const savingRouter = express.Router();
const Transaction = require('./transactionModel');

// Create a new transaction
  savingRouter.post('/', async (req, res) => {
  try {
    const transaction = new Transaction(req.body);
    await transaction.save();
    res.status(201).json(transaction);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all transactions
  savingRouter.get('/', async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a specific transaction by ID
  savingRouter.get('/getSaving/:id', async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) {
      return res.status(404).json({ error: 'Transaction not found' });
    }
    res.json(transaction);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a specific transaction by ID
  savingRouter.put('/:id', async (req, res) => {
  try {
    const updatedTransaction = await Transaction.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedTransaction) {
      return res.status(404).json({ error: 'Transaction not found' });
    }
    res.json(updatedTransaction);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a specific transaction by ID
  savingRouter.delete('/:id', async (req, res) => {
  try {
    const deletedTransaction = await Transaction.findByIdAndRemove(req.params.id);
    if (!deletedTransaction) {
      return res.status(404).json({ error: 'Transaction not found' });
    }
    res.json(deletedTransaction);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = savingRouter;
