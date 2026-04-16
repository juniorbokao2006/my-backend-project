const Item = require('../models/Item');

// CREATE
exports.createItem = async (req, res) => {
  try {
    const { title, description } = req.body;
    const item = await Item.create({ title, description, userId: req.user.id });
    res.status(201).json({ message: 'Item created', item });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// READ ALL (only items belonging to logged-in user)
exports.getItems = async (req, res) => {
  try {
    const items = await Item.findAll({ where: { userId: req.user.id } });
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// READ ONE
exports.getItem = async (req, res) => {
  try {
    const item = await Item.findOne({ where: { id: req.params.id, userId: req.user.id } });
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// UPDATE
exports.updateItem = async (req, res) => {
  try {
    const item = await Item.findOne({ where: { id: req.params.id, userId: req.user.id } });
    if (!item) return res.status(404).json({ message: 'Item not found' });

    await item.update(req.body);
    res.status(200).json({ message: 'Item updated', item });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// DELETE
exports.deleteItem = async (req, res) => {
  try {
    const item = await Item.findOne({ where: { id: req.params.id, userId: req.user.id } });
    if (!item) return res.status(404).json({ message: 'Item not found' });

    await item.destroy();
    res.status(200).json({ message: 'Item deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};