const faker = require('faker');
const loremIpsum = require("lorem-ipsum").loremIpsum;
const db = require('./database.js')


var generateTitle = () => {
  return loremIpsum({
    count: Math.floor(Math.random() * 5) + 1,
    format: 'plain',
    units: 'words'
  })
}

var generateBody = () => {
  return loremIpsum({
    count: Math.floor(Math.random() * 2) + 1, // Number of "words", "sentences", or "paragraphs"
    format: 'plain',  // "plain" or "html"
    paragraphLowerBound: 1,  // Min. number of sentences per paragraph.
    paragraphUpperBound: 5,  // Max. number of sentences per paragarph.
    sentenceLowerBound: 5,   // Min. number of words per sentence.
    sentenceUpperBound: 12,  // Max. number of words per sentence.
    units: 'paragraphs'  // paragraph(s), "sentence(s)", or "word(s)"
  })
}


// SEED THE USERS DB
for (let i = 0; i < 1000; i++) {
  db.User.create({
    username: faker.name.firstName() + faker.random.number()
  })
}

// // SEED THE REVIEWS DB
for (let i = 1; i <= 100; i++) {
  // each product should have a random number of reviews- 0 to 25 reviews
  let numReviews = Math.floor(Math.random() * 50);
  let sizeScore, comfortScore, durabilityScore, reviewBody;

  for (let x = 1; x <= numReviews; x++) {
    // make the fitting ratings null every 3 reviews & durability null every other review
    if (x % 3 === 0) {
      sizeScore = null;
      comfortScore = null;
      durabilityScore = null;
    } else if (x % 2 === 0) {
      sizeScore = Math.floor(Math.random() * 3);
      comfortScore = Math.floor(Math.random() * 3);
      durabilityScore = null;
    } else {
      sizeScore = Math.floor(Math.random() * 3) + 1;
      comfortScore = Math.floor(Math.random() * 3) + 1;
      durabilityScore = Math.floor(Math.random() * 3) + 1;
    }

    // make the review body empty every 5 reviews
    if (x % 5 === 0) {
      reviewBody = null;
    } else {
      reviewBody = generateBody()
    }

    // insert the reviews into the table
    db.Review.create({
      product_id: i,
      title: generateTitle(),
      body: reviewBody,
      stars: Math.floor(Math.random() * 5) + 1, // stars from 1-5
      date: '' + faker.date.past(),
      size_rating: sizeScore, // rating from 1-3
      comfort_rating: comfortScore, // rating from 1-3
      durability_rating: durabilityScore, // rating from 1-3
      location: faker.address.city() + ', ' + faker.address.state(),
      userId: Math.floor(Math.random() * 1000) + 1,
    })
  }
}