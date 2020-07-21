const tables = require('../database.js');

// GET all reviews by product ID #
// filters: 'stars' for high to low, 'date' for newest, 'upvotes' for most helpful, 'starsLow' for low to high
var getReviews = (productId, filter = 'date') => {
  var direction = 'DESC'
  if (filter === 'starsLow') {
    direction = 'ASC';
    filter = 'stars';
  }

  return new Promise((resolve, reject) => {
    tables.Review.findAll({
      where: { product_id: productId },
      // grab username from Users table
      include: [ { model: tables.User } ],
      order: [[filter, direction]]
    })
      .then((data) => {
        var result = {};
        // clean up the data into array of objects. 1 object/review instead of nested
        result.reviews = data.map((review) => {
          review.dataValues.user = review.dataValues.user.dataValues.username
          return review.dataValues
        })
        // calculate average stars 1 time here instead of multiple times on the client side
        result.avgStars = result.reviews.reduce((acc, c) => {return acc + c.stars}, 0) / result.reviews.length;
        resolve(result)
      })
      .catch((error) => reject(error))
  })
}

// upvote or downvote a review
var updateVote = (reviewId, numVotes, vote) => {
  return new Promise((resolve, reject) => {
    tables.Review.findOne({ where: {id: reviewId}})
      .then((record) => {
        if (vote === 'up') {
          record.update({upvotes: numVotes})
          .then(() => resolve())
          .catch((error) => reject(error))
        } else {
          record.update({downvotes: numVotes})
          .then(() => resolve())
          .catch((error) => reject(error))
        }
      })
      .catch((error) => reject(error))
  })
}

// flag a review for inappropriate content
var updateFlag = (reviewId, flag) => {
  return new Promise((resolve, reject) => {
    tables.Review.findOne({ where: {id: reviewId}})
      .then((record) => {
        record.update({flagged: flag})
        .then(() => resolve())
        .catch((error) => reject(error))
      })
      .catch((error) => reject(error))
  })
}

module.exports = {
  getReviews,
  updateVote,
  updateFlag
}