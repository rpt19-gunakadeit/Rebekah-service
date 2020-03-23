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
test('<ShortReview /> renders correctly', () => {
  const tree = renderer.create(<ShortReview />).toJSON();
  expect(tree).toMatchSnapshot();
})


import FullReviews from './client/components/fullReviews.jsx';
test('<FullReviews /> renders correctly', () => {
  const tree = renderer.create(<FullReviews />).toJSON();
  expect(tree).toMatchSnapshot();
})


import LongReview from './client/components/longReview.jsx';
test('<LongReview /> renders correctly', () => {
  const tree = renderer.create(<LongReview />).toJSON();
  expect(tree).toMatchSnapshot();
})