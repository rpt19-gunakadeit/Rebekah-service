const tables = require('../database.js');

var getReviews = (productId) => {
  return new Promise((resolve, reject) => {
    tables.Review.findAll({
      where: { product_id: productId },
      include: [ { model: tables.User } ],
      order: [['date', 'DESC']]
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

module.exports = {
  getReviews
}