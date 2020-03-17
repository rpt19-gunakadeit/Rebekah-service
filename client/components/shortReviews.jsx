import React from 'react';
import Stars from './stars.jsx';
import Review from './review.jsx';

var ShortReviews = (props) => {

  return (
    <div id='short-reviews'>
      <div>
        <div>
          <Stars numStars={props.numStars}/>
          <p>{props.numStars.toFixed(1)} Stars</p>
        </div>
        <div>
          <p>Write a Review</p>
        </div>
      </div>
      <div>
        {props.reviews.map((review, index) => {
          return <Review review={review} key={index}/>
        })}
      </div>
      <div>
        <p>More Reviews</p>
      </div>
    </div>
  )
}

export default ShortReviews;