import React from 'react';
import Stars from './stars.jsx';
import ShortReview from './shortReview.jsx';

var SummaryReviews = (props) => {

  return (
    <div id='short-reviews'>

      <div>
        <div id='short-reviews-header'>
          <span className='stars'> <Stars numStars={props.numStars}/> </span>
          {props.numStars ? props.numStars.toFixed(1): 0} Stars
        </div>
        <div>
          <span className='write-review-link'>Write a Review</span>
        </div>
      </div>

      <div>
        {props.reviews ? props.reviews.map((review, index) => {
          return <ShortReview review={review} key={index}/>
        }): null}
      </div>

      <div className='more-reviews'>
        <span className='more-reviews-link' onClick={() => props.showAllReviews()}>More Reviews</span>
      </div>

    </div>
  )
}

export default SummaryReviews;