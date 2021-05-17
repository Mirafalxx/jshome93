const express = require('express');
const Events = require('../models/Events');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
  } catch (e) {
    res.sendStatus(500);
  }
});

router.post('/', async (req, res) => {
  const eventData = req.body;
  const event = new Events(eventData);
  try {
    await event.save();
    res.send(event);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
