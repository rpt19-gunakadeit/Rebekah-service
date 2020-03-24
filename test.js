import React from 'react';
import renderer from 'react-test-renderer';
import App from './client/components/app.jsx';

test('<App /> renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
})


import Stars from './client/components/stars.jsx';
test('<Stars /> renders correctly', () => {
  const tree = renderer.create(<Stars />).toJSON();
  expect(tree).toMatchSnapshot();
})


import FittingRange from './client/components/fittingRange.jsx';
test('<FittingRange /> renders correctly', () => {
  const tree = renderer.create(<FittingRange />).toJSON();
  expect(tree).toMatchSnapshot();
})


import SummaryReviews from './client/components/summaryReviews.jsx';
test('<SummaryReviews /> renders correctly', () => {
  const tree = renderer.create(<SummaryReviews />).toJSON();
  expect(tree).toMatchSnapshot();
})


import ShortReview from './client/components/shortReview.jsx';
const shortData = {
  title: 'pariatur culpa aute quis incididunt',
  body:
   'Eu ut occaecat non fugiat. Labore non fugiat laboris amet pariatur voluptate. Ex voluptate velit cupidatat veniam occaecat. Sint enim incididunt eu aute adipisicing est ipsum minim.\nIpsum elit est in deserunt tempor Lorem veniam commodo.',
  stars: 5,
  date: '2020-02-06T01:20:00.000Z',
  location: 'Lake Jonathanmouth, Nebraska',
  user: 'Raoul54498'
};

test('<ShortReview /> renders correctly', () => {
  const tree = renderer.create(<ShortReview review={shortData}/>).toJSON();
  expect(tree).toMatchSnapshot();
})


import FullReviews from './client/components/fullReviews.jsx';
test('<FullReviews /> renders correctly', () => {
  const tree = renderer.create(<FullReviews />).toJSON();
  expect(tree).toMatchSnapshot();
})


import LongReview from './client/components/longReview.jsx';
const longReviewData = {
  id: 598,
  product_id: 20,
  title: 'pariatur culpa aute quis incididunt',
  body:
   'Eu ut occaecat non fugiat. Labore non fugiat laboris amet pariatur voluptate. Ex voluptate velit cupidatat veniam occaecat. Sint enim incididunt eu aute adipisicing est ipsum minim.\nIpsum elit est in deserunt tempor Lorem veniam commodo.',
  stars: 5,
  date: '2020-02-06T01:20:00.000Z',
  size_rating: 1,
  comfort_rating: 1,
  durability_rating: null,
  location: 'Lake Jonathanmouth, Nebraska',
  userId: 915,
  user: 'Raoul54498'
}
test('<LongReview /> renders correctly', () => {
  const tree = renderer.create(<LongReview review={longReviewData}/>).toJSON();
  expect(tree).toMatchSnapshot();
})