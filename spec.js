const expect = require('chai').expect
const request = require('supertest');
const app = require('./server/server.js');

describe('Loading express', () => {
  it('responds to /', (done) => {
    request(app)
      .get('/')
      .expect(200, done);
  });
  it('responds with 404 to anything other than /', (done) => {
    request(app)
      .get('/foo')
      .expect(404, done);
  });
});

describe('GET requests for reviews by product ID', () => {
  var id;
  beforeEach(() => {
    id = Math.floor(Math.random() * 100) + 1;
  });

  it('responds to any number 1-100', (done) => {
    request(app)
      .get(`/reviews/${id}`)
      .expect(200)
      .then(() => done())
  });
  it('responds to any number 1-100', (done) => {
    request(app)
      .get(`/reviews/${id}`)
      .expect(200)
      .then(() => done())
  });
  it('responds to any number 1-100', (done) => {
    // let id = getId();
    request(app)
      .get(`/reviews/${id}`)
      .expect(200)
      .then(() => done())
  });
  it('responds with 404 to a reviews GET request with no id specified', (done) => {
    request(app)
      .get('/reviews')
      .expect(404)
      .then(() => done())
  });
  it('responds with 500 to a reviews GET request with an id = 200 (not in the range of 1-100)', (done) => {
    request(app)
      .get('/reviews/200')
      .expect(500)
      .then(() => done())
  });
  it('responds with a res.body of "Product does not exist" to a reviews GET request with an id = 200 (not in the range of 1-100)', (done) => {
    request(app)
      .get('/reviews/200')
      .expect(500, 'Product does not exist')
      .then(() => done())
  });
  it('responds with a res.body of "Product does not exist" to a reviews GET request with an id = "awesomeShoes" (not a Number)', (done) => {
    request(app)
      .get('/reviews/200')
      .expect(500, 'Product does not exist')
      .then(() => done())
  });
  it('responds with 500 to a reviews GET request with an id = 0 (not in the range of 1-100)', (done) => {
    request(app)
      .get('/reviews/0')
      .expect(500)
      .then(() => done())
  });
  it('responds with 500 to a reviews GET request with a string like "awesomeShoes" as the id', (done) => {
    request(app)
      .get('/reviews/awesomeShoe')
      .expect(500)
      .then(() => done())
  });
});

describe('Response to GET request for reviews', () => {
  it('responds with json from the db', (done) => {
    let id = Math.floor(Math.random() * 100) + 1;
    request(app)
      .get(`/reviews/${id}`)
      .set('Accept', 'application/json')
      .expect('Content-type', /json/)
      .expect(200)
      .then(() => done())
  });
  it('responds with an average review that is a number', (done) => {
    let id = Math.floor(Math.random() * 100) + 1;
    request(app)
      .get(`/reviews/${id}`)
      .set('Accept', 'application/json')
      .expect(200)
      .then((res) => {
        expect(res.body).to.exist;
        expect(res.body).to.have.property('avgStars');
        expect(res.body.avgStars).to.be.a('number');
        done()
      })
  });
  it('responds with an array of reviews', (done) => {
    let id = Math.floor(Math.random() * 100) + 1;
    request(app)
      .get(`/reviews/${id}`)
      .set('Accept', 'application/json')
      .expect(200)
      .then((res) => {
        expect(res.body).to.exist;
        expect(res.body).to.have.property('reviews');
        expect(res.body.reviews).to.be.an('array');
        expect(res.body.reviews[0]).to.be.an('object');
        done()
      })
  });
  it('each review should have a user property that is a string & not null', (done) => {
    let id = Math.floor(Math.random() * 100) + 1;
    request(app)
      .get(`/reviews/${id}`)
      .set('Accept', 'application/json')
      .expect(200)
      .then((res) => {
        expect(res.body).to.exist;
        expect(res.body.reviews[0].user).to.not.be.null;
        expect(res.body.reviews[0].user).to.be.a('string');
        done()
      })
  });
});