import React from 'react';

var Stars = (props) => {

  var rating = [];
  var stars = Math.round(props.numStars);
  for (let i = 1; i <= 5; i++) {
    if (i <= stars) {
      rating.push(<span className='star-checked' key={i}>★</span>)
    } else {
      rating.push(<span className='star' key={i}>★</span>)
    }
  }

  return (
    <span>
      {rating}
    </span>
  )
}

export default Stars;