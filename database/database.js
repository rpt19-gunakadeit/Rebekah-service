const Sequelize = require('sequelize');
const dbCredentials = require('../config.js');
const ReviewModel = require('./models/reviews.js');
const UserModel = require('./models/users.js');

const db = new Sequelize('nike_reviews', dbCredentials.user, dbCredentials.pswd, {
  host: 'localhost',
  dialect: 'mysql'
})

db.authenticate()
  .then(() => console.log('Connection to nike_reviews database established'))
  .error((error) => console.log('Error in establishing nike_reviews database: ', error))

var User = UserModel(db, Sequelize);
var Review = ReviewModel(db, Sequelize);

User.hasMany(Review);
Review.belongsTo(User);

// db.sync({ force: false })
//   .then(() => {
//     console.log('Connection to nike_reviews database established')
//   })
//   .catch((error) => console.log('Error in establishing nike_reviews database: ', error))

module.exports = {
  User,
  Review
}