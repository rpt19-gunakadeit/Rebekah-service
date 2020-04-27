import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';


////////////// TEST THE APP COMPONENT ////////////////////
import Reviews from './client/components/reviews.jsx';



test('<Reviews /> renders correctly', () => {
  const component = renderer.create(<Reviews />).toJSON();
  expect(component).toMatchSnapshot();
})



test('<Reviews /> initally renders the inner <Stars /> component, but not the <SummaryReviews /> component', () => {
  const wrapper = mount(<Reviews />);
  expect(wrapper.find(Stars).length).toEqual(1);
  expect(wrapper.find(SummaryReviews).length).toEqual(0);
  expect(wrapper.find('i.up').length).toEqual(0);
  expect(wrapper.find('i.down').length).toEqual(1);
  wrapper.unmount();
})

test('<Reviews /> default state to show short reviews is false', () => {
  const component = shallow(<Reviews/>);
  expect(component.state('threeReviews')).toBe(false);
})

test('<Reviews /> simulates click events to show short reviews', () => {
  const component = shallow(<Reviews />);
  expect(component.state('threeReviews')).toEqual(false);
  expect(component.find('SummaryReviews').length).toEqual(0);

  component.find('div#reviews-header').simulate('click');
  expect(component.state('threeReviews')).toEqual(true);
  expect(component.find('SummaryReviews').length).toEqual(1);
});

test('<Reviews /> correctly renders elements based on its state', () => {
  const component = shallow(<Reviews />);
  expect(component.find('span').at(0).text()).toEqual('Reviews (0)');

  component.setState({ reviews: [{review: 1}, {review: 2}] })
  expect(component.find('span').at(0).text()).toEqual('Reviews (2)');
});

test('<Reviews /> passes props to the <Stars /> component', () => {
  let component = mount(<Reviews />);
  expect(component.find(Stars).length).toEqual(1);
  let starsComponent = component.find(Stars);
  expect(starsComponent.prop('numStars')).toEqual(null);

  component.setState({ avgStars: 4 });
  expect(component.find(Stars).prop('numStars')).toEqual(4);
  component.unmount();
})




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
const productDetails = {
  name: 'Nike Blazers',
  price: 185,
  salePrice: 150,
  thumbnail:'https://static.nike.com/a/images/t_default/eric5lwitzffpoisq0rj/blazer-mid-77-vintage-shoe'
}
test('<FullReviews /> renders correctly', () => {
  const tree = renderer.create(<FullReviews product={productDetails}/>).toJSON();
  expect(tree).toMatchSnapshot();
})

test('<FullReviews /> renders the inner <Stars /> component', () => {
  const wrapper = mount(<FullReviews product={productDetails}/>);
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

