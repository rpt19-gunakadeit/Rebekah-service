// import React from 'react';
//  import $ from 'jquery';
import Stars from './stars.jsx';
import LongReview from './longReview.jsx';
import FittingRange from './fittingRange.jsx';

// stateful class component to show modal of all reviews
class FullReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      visible: 10
    }
  }

  // app displays 10 reviews w/ option to add more
  loadMore() {
    let newVisible = this.state.visible += 10;
    this.setState({
      visible: newVisible
    })
  }

  // resort by date, helpful, or stars
  reSortReviews(filter = 'date') {
    const parsedUrl = new URL(window.location.href);
    const host = parsedUrl.hostname;
    const productId = parsedUrl.searchParams.get('');

    $.ajax({
      method: 'GET',
      url: 'http://' + host + ':2000/reviews/' + productId + '/' + filter,
      //url: 'http://18.219.106.183:2000/reviews/' + productId + '/' + filter,
      success: (data) => {
        this.setState({
          reviews: data.reviews,
          visible: 10
        })
      },
      error: (error) => console.log(error)
    })
  }

  componentDidMount() {
    this.reSortReviews()
  }

  render() {
    var sizeSum = 0;
    var sizeCount = 0;
    var comfortSum = 0;
    var comfortCount = 0;
    var durabilitySum = 0;
    var durabilityCount = 0
    this.state.reviews.forEach((review) => {
      if (review.size_rating) {
        sizeSum += review.size_rating;
        sizeCount++;
      }
      if (review.comfort_rating) {
        comfortSum += review.comfort_rating;
        comfortCount++;
      }
      if (review.durability_rating) {
        durabilitySum += review.durability_rating;
        durabilityCount++;
      }
    })
    var avgSize = sizeSum / sizeCount;
    var avgComfort = comfortSum / comfortCount;
    var avgDurability = durabilitySum / durabilityCount;

    return (
      <div className='reviewModal'>
        <header id='modal-header'>
          <span className='exit small-product-info' onClick={() => this.props.showAllReviews()}>
            <img src={this.props.product.thumbnail} className='thumbnail'/>
            <div className='small-product-details'>
              <span className='detail'>{this.props.product.name}</span>
              <span className='detail'>${this.props.product.salePrice}</span>
              <span className='detail price'>${this.props.product.price}</span>
            </div>
          </span>
          <span className='exit' onClick={() => this.props.showAllReviews()}>&times;</span>
        </header>
        <div id='modal-content'>
          <div className='full-reviews-summary'>
            <div>
              <Stars numStars={this.props.numStars}/>
            </div>
            <div className='num-reviews'>
              {this.props.reviews ? this.props.reviews.length: 0} REVIEWS
            </div>
          </div>
          <FittingRange size={avgSize} comfort={avgComfort} durability={avgDurability} row={true}/>
          <div className='breaker-line'>
            <select defaultValue='date' onChange={(e) => this.reSortReviews(e.target.value)}>
              <option value='upvotes'>Sort By: Most Helpful</option>
              <option value='date'>Sort By: Newest</option>
              <option value='stars'>Sort By: Highest to Lowest</option>
              <option value='starsLow'>Sort By: Lowest to Highest</option>
            </select>
          </div>
          {this.state.reviews.slice(0, this.state.visible).map((review, index) =>
            <LongReview review={review} key={index} />
          )}
          <div className='full-revew-load-more'>
            {this.state.visible < this.state.reviews.length ? <span className='more-reviews-link' onClick={() => this.loadMore()}>Load More</span>: null}
          </div>
        </div>
      </div>
    )
  }
}

export default FullReviews;