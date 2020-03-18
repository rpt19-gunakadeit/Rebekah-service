import React from 'react';
import Stars from './stars.jsx';

class FullReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className='modal'>
        <header id='modal-header'>
          <span className='exit' onClick={() => this.props.showAllReviews()}> Product Name & price here </span>
          <span className='exit' onClick={() => this.props.showAllReviews()}> X </span>
        </header>
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
      </div>
    )
  }
}

export default FullReviews;