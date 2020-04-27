const Sequelize = require('sequelize');
const mysql = require('mysql');
const dbCredentials = require('../config.js');
const ReviewModel = require('./models/reviews.js');
const UserModel = require('./models/users.js');

var connection = mysql.createConnection({
  host: 'localhost',
  user: dbCredentials.user,
  password : dbCredentials.pswd
});
connection.connect();
connection.query('CREATE DATABASE IF NOT EXISTS nike_reviews;', (err, results) => {
  err ? console.log(err, "error in creating DB nike_reviews"): console.log("database created")
})
connection.end();


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

db.sync({ force: false })
  .then(() => {
    console.log('DB sync completed')
  })
  .catch((error) => console.log('Error in establishing nike_reviews database: ', error))

module.exports = {
  User,
  Review
}

