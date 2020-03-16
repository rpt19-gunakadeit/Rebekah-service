const express = require('express');
const db = require('../database/database.js')
const reviews = require('../database/controllers/reviews.js');
const port = 2000;
const app = express();

app.use(express.static('./public/dist'));

app.get('/reviews/:id', (req, res) => {
  if (req.params.id !== 'favicon.ico') {
    reviews.getReviews(req.params.id)
      .then((reviews) => res.status(200).send(reviews))
      .catch((error) => res.status(500).send('Error in getting reviews from DB'))
  }
})

app.listen(port, () => console.log(`Reviews service is listening on port ${port}`));


// exporting for testing
module.exports = app;