const express = require('express');
const EventsList = require('../models/EventsList');
const auth = require('../middleware/auth');
const permit = require('../middleware/permit');
const upload = require('../multer').products;

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const eventsListData = {
      title: req.body.title,
      description: req.body.description,
      user: req.body.user,
    };
    const eventsList = new EventsList(eventsListData);
    await eventsList.save();
    res.send(eventsList);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get('/', async (req, res) => {
  try {
    const eventsList = await EventsList.find().populate('user', ['email', 'displayName']);
    res.send(eventsList);
  } catch (e) {
    res.sendStatus(500);
  }
});

// router.get('/:id', async (req, res) => {
//   try {
//     const product = await Product.findOne({ _id: req.params.id }).populate('category', 'title');

//     if (product) {
//       res.send(product);
//     } else {
//       res.sendStatus(404);
//     }
//   } catch (e) {
//     res.sendStatus(500);
//   }
// });

module.exports = router;
