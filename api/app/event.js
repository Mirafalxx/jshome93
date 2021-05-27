const express = require('express');
const Event = require('../models/Event');
const auth = require('../middleware/auth');
const permit = require('../middleware/permit');
const router = express.Router();

router.post('/', auth, async (req, res) => {
  try {
    const eventData = {
      title: req.body.title,
      author: req.user._id,
    };
    const createEvents = new Event(eventData);
    await createEvents.save();
    res.send(createEvents);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get('/', auth, async (req, res) => {
  const user = req.user;
  try {
    if (user.friends.length > 0) {
      const eventsFromPromise = await Promise.all(
        user.friends.map((friend) => {
          return Event.find({ author: friend }).populate('author', 'displayName');
        })
      );

      const a = eventsFromPromise[0];
      const events = await Event.find({ author: user._id }).populate('author', 'displayName');

      const allEvents = a.concat(events);

      const b = await Promise.all(allEvents);
      return res.send(b);
    }

    const myEvents = await Event.find({ author: user._id }).populate('author', 'displayName');
    return res.send(myEvents);
  } catch (e) {
    return res.sendStatus(e);
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
