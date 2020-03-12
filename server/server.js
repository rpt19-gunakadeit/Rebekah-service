const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/database.js')
const port = 2000;
const app = express();

app.use(express.static('./client/dist'));

app.listen(port, () => console.log(`Reviews service is listening on port ${port}`));