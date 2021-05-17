const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config');
const events = require('./app/events');
const users = require('./app/users');

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(cors());

const port = 8000;

app.use('/events', events);
app.use('/users', users);

const run = async () => {
  await mongoose.connect(config.db.url, config.db.options);
};

app.listen(port, () => {
  console.log(`Server started on ${port} port `);
});

run().catch(console.error);
