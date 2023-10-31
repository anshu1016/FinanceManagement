// api.js
const express = require('express');
const savingRouter = express.Router();
const Saving = require('../model/saving.model.js');

// Create a new transaction
  savingRouter.post('/', async (req, res) => {
  try {
    const saving = new Saving(req.body);
    await saving.save();
    res.status(201).json(saving);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all transactions
  savingRouter.get('/', async (req, res) => {
  try {
    const savings = await Saving.find();
    res.json(savings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a specific transaction by ID
  savingRouter.get('/getSaving/:id', async (req, res) => {
  try {
    const savings = await Saving.findById(req.params.id);
    if (!savings) {
      return res.status(404).json({ error: 'Transaction not found' });
    }
    res.json(savings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a specific transaction by ID
  savingRouter.put('/:id', async (req, res) => {
  try {
    const updatedSaving = await Saving.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedSaving) {
      return res.status(404).json({ error: 'Saving not found' });
    }
    res.json(updatedSaving);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a specific transaction by ID
  savingRouter.delete('/:id', async (req, res) => {
  try {
    const deletedSaving = await Saving.findByIdAndRemove(req.params.id);
    if (!deletedSaving) {
      return res.status(404).json({ error: 'Saving not found' });
    }
    res.json(deletedSaving);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = savingRouter;
