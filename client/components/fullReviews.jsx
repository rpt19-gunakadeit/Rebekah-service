import React from 'react';
import Stars from './stars.jsx';
import LongReview from './longReview.jsx';

class FullReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: this.props.reviews
    }
  }

  reSort() {
    console.log('new filter clicked')
  }

  loadMore() {
    console.log('clicked')
  }

  render() {

    return (
      <div className='modal'>
        <header id='modal-header'>
          <span className='exit' onClick={() => this.props.showAllReviews()}> Product Name & price here </span>
          <span className='exit' onClick={() => this.props.showAllReviews()}> X </span>
        </header>
        <div id='modal-content'>
          <div className='full-reviews-summary'>
            <div>
              <Stars numStars={this.props.numStars}/>
            </div>
            <div className='num-reviews'>
              {this.props.reviews.length} REVIEWS
            </div>
          </div>
          <div className='fit-scales breaker-line'>
            <span>Size</span>
            <span>Comfort</span>
            <span>Durability</span>
          </div>
          <div className='breaker-line'>
            <select defaultValue='new' onChange={() => this.reSort()}>
              <option value='helpful'>Sort By: Most Helpful</option>
              <option value='new'>Sort By: Newest</option>
              <option value='high'>Sort By: Highest to Lowest</option>
              <option value='low'>Sort By: Lowest to Highest</option>
            </select>
          </div>
          {this.state.reviews.map((review, index) =>
            <LongReview review={review} key={index} />
          )}
          <div className='full-revew-load-more'>
            <span className='more-reviews-link' onClick={() => this.loadMore()}>Load More</span>
          </div>
        </div>
      </div>
    )
  }
}

export default FullReviews;