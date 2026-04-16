const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const {
  createItem, getItems, getItem, updateItem, deleteItem
} = require('../controllers/itemController');

// All item routes are protected — user must be logged in
router.use(authMiddleware);

router.post('/', createItem);
router.get('/', getItems);
router.get('/:id', getItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);

module.exports = router;