const mongoose = require('mongoose');

const EventsListSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const EventsList = mongoose.model('EventsList', EventsListSchema);
module.exports = EventsList;
