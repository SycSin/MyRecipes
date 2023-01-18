const express = require('express');
const router = express.Router();
const Event = require('../models/events');

router.get('/', async (req, res) => {
  try {
    const events = await Event.getAllEvents();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve events', error });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const event = await Event.getEventById(req.params.id);
    if (!event.length) {
      res.status(404).json({ message: 'Event not found' });
    } else {
      res.status(200).json(event);
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve event', error });
  }
});

router.post('/', async (req, res) => {
  if (!req.body.author || !req.body.date || !req.body.recipe || !req.body.color) {
    res.status(400).json({ message: 'Please provide an author, date, recipe and color' });
  } else {
    try {
      const newEvent = await Event.addEvent(req.body);
      res.status(200).json({ message: 'Event added'});
    } catch (error) {
      res.status(500).json({ message: 'Failed to add event', error });
    }
  }
});

router.put('/:id', async (req, res) => {
  if (!req.body.author || !req.body.date || !req.body.recipe || !req.body.color) {
      res.status(400).json({ message: 'Please provide at least one field to update' });
    } else {
      try {
        const updatedEvent = await Event.updateEvent(req.params.id, req.body);
        if (updatedEvent.affectedRows === 0) {
          res.status(404).json({ message: 'Event not found' });
        } else {
          res.status(200).json({ message: 'Event updated', updatedEvent });
        }
      } catch (error) {
        res.status(500).json({ message: 'Failed to update event', error });
      }
    }
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedEvent = await Event.deleteEvent(req.params.id);
    if (deletedEvent.affectedRows === 0) {
      res.status(404).json({ message: 'Event not found' });
    } else {
      res.status(200).json({ message: 'Event deleted', deletedEvent });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete event', error });
  }
});

module.exports = router;