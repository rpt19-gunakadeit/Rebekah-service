import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';


////////////// TEST THE APP COMPONENT ////////////////////
import App from './client/components/app.jsx';
test('<App /> renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();

})

test('<App /> renders the inner <Stars /> component', () => {
  const wrapper = mount(<App />);
  expect(wrapper.find(Stars).length).toEqual(1);
})

test('<App /> default state to show short reviews is false', () => {
  const wrapper = shallow(<App/>);
  expect(wrapper.state('threeReviews')).toBe(false);
})

test('<App /> simulates click events to show short reviews', () => {
  const onClick = sinon.spy();
  const wrapper = shallow(<App onClick={onClick} />);
  wrapper.find('#reviews-header').simulate('click');
  expect(onClick).toHaveBeenCalledTimes(1);
  expect(wrapper.state('threeReviews')).toBe(true);
});



////////////// TEST THE STARS COMPONENT ////////////////////
import Stars from './client/components/stars.jsx';
test('<Stars /> renders correctly', () => {
  const tree = renderer.create(<Stars />).toJSON();
  expect(tree).toMatchSnapshot();
})



////////////// TEST THE FIT RANGE COMPONENT ////////////////////
import FittingRange from './client/components/fittingRange.jsx';
test('<FittingRange /> renders correctly', () => {
  const tree = renderer.create(<FittingRange />).toJSON();
  expect(tree).toMatchSnapshot();
})



////////////// TEST THE SUMMARYREVIEWS COMPONENT ////////////////////
import SummaryReviews from './client/components/summaryReviews.jsx';
test('<SummaryReviews /> renders correctly', () => {
  const tree = renderer.create(<SummaryReviews />).toJSON();
  expect(tree).toMatchSnapshot();
})

test('<SummaryReviews /> renders the inner <Stars /> component', () => {
  const wrapper = mount(<SummaryReviews/>);
  expect(wrapper.find(Stars).length).toEqual(1);
})


////////////// TEST THE SHORTREVIEW COMPONENT ////////////////////
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

test('<ShortReview /> renders the inner <Stars /> component', () => {
  const wrapper = mount(<ShortReview review={shortData}/>);
  expect(wrapper.find(Stars).length).toEqual(1);
})



////////////// TEST THE FULLREVIEWS COMPONENT ////////////////////
import FullReviews from './client/components/fullReviews.jsx';
test('<FullReviews /> renders correctly', () => {
  const tree = renderer.create(<FullReviews />).toJSON();
  expect(tree).toMatchSnapshot();
})

test('<FullReviews /> renders the inner <Stars /> component', () => {
  const wrapper = mount(<FullReviews/>);
  expect(wrapper.find(Stars).length).toEqual(1);
})



////////////// TEST THE LONGREVIEW COMPONENT ////////////////////
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

test('<LongReview /> renders the inner <Stars /> & <FittingRange /> components', () => {
  const wrapper = mount(<LongReview review={longReviewData}/>);
  expect(wrapper.find(Stars).length).toEqual(1);
  expect(wrapper.find(FittingRange).length).toEqual(1);
})

