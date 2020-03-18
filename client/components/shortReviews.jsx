import React from 'react';
import Stars from './stars.jsx';
import Review from './review.jsx';

var ShortReviews = (props) => {

  return (
    <div id='short-reviews'>
      <div>
        <div id='short-reviews-header'>
          <span className='stars'>
            <Stars className='stars' numStars={props.numStars}/>
          </span>
          {props.numStars.toFixed(1)} Stars
        </div>
        <div>
          <span className='write-review-link'>Write a Review</span>
        </div>
      </div>
      <div>
        {props.reviews.map((review, index) => {
          return <Review review={review} key={index}/>
        })}
      </div>
      <div className='more-reviews'>
        <span className='more-reviews-link' onClick={() => props.showAllReviews()}>More Reviews</span>
      </div>
    </div>
  )
}

export default ShortReviews;