const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const studentRouter = require('./src/router/student');
const cors = require('cors');
require('./src/db/db');
const app = express();
app.use(cors());

const PORT = process.env.PORT || 1234;

app.use(bodyParser.json());


// Routes
app.use('/students', studentRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
