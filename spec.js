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
})

describe('Get requests to reviews', () => {
  var id;
  beforeEach(() => {
    id = Math.floor(Math.random() * 100) + 1;
  })

  it('responds to any number 1-100', (done) => {
    request(app)
      .get(`/reviews/${id}`)
      .expect(200)
      .then(() => done())
  })
  it('responds to any number 1-100', (done) => {
    request(app)
      .get(`/reviews/${id}`)
      .expect(200)
      .then(() => done())
  })
  it('responds to any number 1-100', (done) => {
    // let id = getId();
    request(app)
      .get(`/reviews/${id}`)
      .expect(200)
      .then(() => done())
  })
  it('responds with 404 to a reviews GET request with no id specified', (done) => {
    request(app)
      .get('/reviews')
      .expect(404)
      .then(() => done())
  })
  it('responds with 500 to a reviews GET request with an id = 200 (not in the range of 1-100)', (done) => {
    request(app)
      .get('/reviews/200')
      .expect(500)
      .then(() => done())
  })
  it('responds with 500 to a reviews GET request with an id = 0 (not in the range of 1-100)', (done) => {
    request(app)
      .get('/reviews/0')
      .expect(500)
      .then(() => done())
  })
  it('responds with 500 to a reviews GET request with an id not in the range of 1-100', (done) => {
    request(app)
      .get('/reviews/awesomeShoe')
      .expect(500)
      .then(() => done())
  })
})