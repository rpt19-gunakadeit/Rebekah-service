const faker = require('faker');
const db = require('./database.js')


// product_id = 1-100
// title = lorem ipsum
// body = lorem ipsum
// stars = number 1-5
// let date = faker.date.past()
// size_rating = number 1-3
// comfort_rating = number 1-3
// durability_rating = number 1-3
// let location = faker.address.city() + faker.address.state()

// SEED THE USERS DB
for (let i = 0; i < 10; i++) {
  db.User.create({
    username: faker.name.firstName() + faker.random.number()
  })
}

// SEED THE REVIEWS DB
for (let i = 1; i <= 1; i++) {
  let numReviews = Math.floor(Math.random() * 50);
  for (let x = 0; x < numReviews; x++) {
    db.Review.create({
      product_id: i,
      title: 'test test',
      body: 'this is a test for seeding the db',
      stars: Math.floor(Math.random() * 5),
      date: '' + faker.date.past(),
      size_rating: Math.floor(Math.random() * 3),
      comfort_rating: Math.floor(Math.random() * 3),
      durability_rating: Math.floor(Math.random() * 3),
      location: faker.address.city() + ', ' + faker.address.state(),
    })
  }
}