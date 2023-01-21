const express = require('express');
const router = express.Router();
const User = require('../models/users');


router.post('/login', async (req, res) => {
    try {
        const user = await User.getUserByEmail(req.body.email);
        if (!user.length) {
            res.status(404).json({ message: 'User not found' });
        } else {
            res.status(200).json(user);
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve user', error });
    }
});

router.post('/signup', async (req, res) => {
    if (!req.body.email || !req.body.password) {
        res.status(400).json({ message: 'Please provide an email and password' });
    } else {
        try {
            const newUser = await User.addUser(req.body);
            res.status(200).json({ message: 'User added'});
        } catch (error) {
            res.status(500).json({ message: 'Failed to add user', error });
        }
    }
});

router.post('/logout', async (req, res) => {
    if (!req.body.name) {
        res.status(400).json({ message: 'Please provide at least one field to update' });
    } else {
        try {
            const updatedCategory = await Category.updateCategory(req.params.id, req.body);
            if (updatedCategory.affectedRows === 0) {
                res.status(404).json({ message: 'User not found' });
            } else {
                res.status(200).json({ message: 'User updated', updatedCategory });
            }
        } catch (error) {
            res.status(500).json({ message: 'Failed to update user', error });
        }
    }
});

router.delete('/', async (req, res) => {
    try {
        const deletedUser = await User.deleteUser(req.body.email);
        console.log(deletedUser)
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