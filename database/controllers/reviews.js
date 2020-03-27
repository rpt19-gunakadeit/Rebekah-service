const tables = require('../database.js');

//'stars' for high to low, 'date' for newest, 'upvotes' for most helpful, 'starsLow' for low to high
var getReviews = (productId, filter = 'date') => {
  var direction = 'DESC'
  if (filter === 'starsLow') {
    direction = 'ASC';
    filter = 'stars';
  }

  return new Promise((resolve, reject) => {
    tables.Review.findAll({
      where: { product_id: productId },
      include: [ { model: tables.User } ],
      order: [[filter, direction]]
    })
      .then((data) => {
        var result = {};
        result.reviews = data.map((review) => {
          review.dataValues.user = review.dataValues.user.dataValues.username
          return review.dataValues
        })
        result.avgStars = result.reviews.reduce((acc, c) => {return acc + c.stars}, 0) / result.reviews.length;
        resolve(result)

      })
        .then((data) => {
          var result = {};
          result.reviews = data.map((review) => {
            review.dataValues.user = review.dataValues.user.dataValues.username
            return review.dataValues
          })
          result.avgStars = result.reviews.reduce((acc, c) => {return acc + c.stars}, 0) / result.reviews.length;
          resolve(result)
        })
        .catch((error) => reject(error))
  })
}

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