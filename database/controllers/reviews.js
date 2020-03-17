const tables = require('../database.js');

var getReviews = (productId) => {
  console.log('productID: ', productId, '          typeof productid', typeof productId)
  return new Promise((resolve, reject) => {
    if (productId < 1 || productId > 100) {
      let error = 'Product does not exist'
      reject(error);
    } else if (isNaN(productId)) {
      let error = 'Product does not exist'
      reject(error);
    } else {
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
    }
  })
}

module.exports = {
  getReviews
}