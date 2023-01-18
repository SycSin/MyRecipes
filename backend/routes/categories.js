const express = require('express');
const router = express.Router();
const Category = require('../models/categories');

router.get('/', async (req, res) => {
  try {
    const categories = await Category.getAllCategorys();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve categories', error });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const category = await Category.getCategoryById(req.params.id);
    if (!category.length) {
      res.status(404).json({ message: 'Category not found' });
    } else {
      res.status(200).json(category);
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve category', error });
  }
});

router.post('/', async (req, res) => {
  if (!req.body.name) {
    res.status(400).json({ message: 'Please provide a name' });
  } else {
    try {
      const newCategory = await Category.addCategory(req.body);
      res.status(200).json({ message: 'Category added'});
    } catch (error) {
      res.status(500).json({ message: 'Failed to add category', error });
    }
  }
});

router.put('/:id', async (req, res) => {
  if (!req.body.name) {
    res.status(400).json({ message: 'Please provide at least one field to update' });
  } else {
    try {
      const updatedCategory = await Category.updateCategory(req.params.id, req.body);
      if (updatedCategory.affectedRows === 0) {
        res.status(404).json({ message: 'Category not found' });
      } else {
        res.status(200).json({ message: 'Category updated', updatedCategory });
      }
    } catch (error) {
      res.status(500).json({ message: 'Failed to update category', error });
    }
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedCategory = await Category.deleteCategory(req.params.id);
    if (deletedCategory.affectedRows === 0) {
      res.status(404).json({ message: 'Category not found' });
    } else {
      res.status(200).json({ message: 'Category deleted', deletedCategory });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete category', error });
  }
});

module.exports = router;