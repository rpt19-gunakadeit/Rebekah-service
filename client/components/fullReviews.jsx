import React from 'react';
import Stars from './stars.jsx';
import LongReview from './longReview.jsx';

class FullReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: this.props.reviews,
      visible: 10
    }
  }

  reSort() {
    console.log('new filter clicked')
  }

  loadMore() {
    let newVisible = this.state.visible += 10;
    this.setState({
      visible: newVisible
    })
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