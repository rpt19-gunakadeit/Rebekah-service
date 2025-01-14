// import React from 'react';
// import ReactDOM from 'react-dom';
// import $ from 'jquery';
import '../../public/dist/app.css'
import Stars from './stars.jsx';
import SummaryReviews from './summaryReviews.jsx';
import ShortReview from './shortReview.jsx';
import FullReviews from './fullReviews.jsx';
import LongReview from './longReview.jsx';

// stateful class component to render reviews
export default class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      avgStars: null,
      threeReviews: false,
      fullReviews: false,
    };
  }

  getReviews() {
    // Product ID #20 listed in the url as a query param: localhost:2000/?=20
    const parsedUrl = new URL(window.location.href);
    const host = parsedUrl.hostname;
    const productId = parsedUrl.searchParams.get('');

    $.ajax({
      method: 'GET',
      url: `http://${host}:2000/reviews/${productId}/date`,
      success: (data) => {
        this.setState({
          reviews: data.reviews,
          avgStars: data.avgStars
        })
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  componentDidMount() {
    this.getReviews();
  }

  // show three abbreviated reviews
  showThreeReviews() {
    // changes the property to true or false
    this.setState({
      threeReviews: !this.state.threeReviews
    })
  }

  // open modal to view all reviews
  showAllReviews() {
    this.setState({
      fullReviews: !this.state.fullReviews
    })
  }

  render() {

    return (
      <div className='breaker-line'>

        {this.state.fullReviews ? <FullReviews showAllReviews={this.showAllReviews.bind(this)} numStars={this.state.avgStars} reviews={this.state.reviews} product={this.props.productDetails}/>: null}

        <div id="reviews-header" onClick={() => this.showThreeReviews()}>
          <span>Reviews ({this.state.reviews.length})</span>
          <div>
            <span className='stars'>
              <Stars numStars={this.state.avgStars}/>
            </span>
            <span>
              {this.state.threeReviews ? <i className="arrow up"></i>: <i className="arrow down"></i>}
            </span>
          </div>
        </div>

        {this.state.threeReviews ? <SummaryReviews numStars={this.state.avgStars} reviews={this.state.reviews.slice(0,3)} showAllReviews={this.showAllReviews.bind(this)} />: null}

      </div>
    )
  }
}

window.Reviews = Reviews;
//ReactDOM.render(<Reviews/>, document.getElementById('reviews'))
