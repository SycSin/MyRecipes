const express = require('express');
const router = express.Router();
const Recipe = require('../models/recipes');

router.get('/', async (req, res) => {
  try {
    const recipes = await Recipe.getAllRecipes();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve recipes', error });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const recipe = await Recipe.getRecipeById(req.params.id);
    if (!recipe.length) {
      res.status(404).json({ message: 'Recipe not found' });
    } else {
      res.status(200).json(recipe);
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve recipe', error });
  }
});

router.post('/', async (req, res) => {
  if (!req.body.author || !req.body.title || !req.body.description || !req.body.ingredients || !req.body.steps || !req.body.date || !req.body.image || !req.body.rating || !req.body.category) {
    res.status(400).json({ message: 'Please provide an author, title, description, ingredients, steps, date, image, rating and category' });
  } else {
    try {
      const newRecipe = await Recipe.addRecipe(req.body);
      res.status(200).json({ message: 'Recipe added'});
    } catch (error) {
      res.status(500).json({ message: 'Failed to add recipe', error });
    }
  }
});

router.put('/:id', async (req, res) => {
  if (!req.body.author || !req.body.title || !req.body.description || !req.body.ingredients || !req.body.steps || !req.body.date || !req.body.image || !req.body.rating || !req.body.category) {
    res.status(400).json({ message: 'Please provide at least one field to update' });
  } else {
    try {
      const updatedRecipe = await Recipe.updateRecipe(req.params.id, req.body);
      if (updatedRecipe.affectedRows === 0) {
        res.status(404).json({ message: 'Recipe not found' });
      } else {
        res.status(200).json({ message: 'Recipe updated', updatedRecipe });
      }
    } catch (error) {
      res.status(500).json({ message: 'Failed to update recipe', error });
    }
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedRecipe = await Recipe.deleteRecipe(req.params.id);
    if (deletedRecipe.affectedRows === 0) {
      res.status(404).json({ message: 'Recipe not found' });
    } else {
      res.status(200).json({ message: 'Recipe deleted', deletedRecipe });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete recipe', error });
  }
});

module.exports = router;