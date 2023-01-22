const express = require('express');
const router = express.Router();
const User = require('../models/users');

router.get('/', async (req, res) => {
  try {
    const users = await User.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve users', error });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const user = await User.getUserById(req.params.id);
    if (!user.length) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve user', error });
  }
});


router.post('/', async (req, res) => {
  if (!req.body.email || !req.body.password) {
    res.status(400).json({ message: 'Please provide an email, and password' });
  } else {
    try {
      const newUser = await User.addUser(req.body);
      res.status(200).json({ message: 'User added'});
    } catch (error) {
      res.status(500).json({ message: 'Failed to add user', error });
    }
  }
});

router.put('/:id', async (req, res) => {
  if (!req.body.email && !req.body.password) {
    res.status(400).json({ message: 'Please provide at least one field to update' });
  } else {
    try {
      const updatedUser = await User.updateUser(req.params.id, req.body);
      if (updatedUser.affectedRows === 0) {
        res.status(404).json({ message: 'User not found' });
      } else {
        res.status(200).json({ message: 'User updated', updatedUser });
      }
    } catch (error) {
      res.status(500).json({ message: 'Failed to update user', error });
    }
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedUser = await User.deleteUser(req.params.id);
    if (deletedUser.affectedRows === 0) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.status(200).json({ message: 'User deleted', deletedUser });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete user', error });
  }
});

module.exports = router;