// import React from 'react';
import moment from 'moment';
import Stars from './stars.jsx';

class ShortReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      extended: false,
    }
  }

  changeView() {
    this.setState({
      extended: !this.state.extended
    })
  }

  render() {
    var review = this.props.review;
    var date = review ? moment(review.date).format('MMM DD, YYYY'): null;
    var reviewBody, expand;

    if (review.body) {
      if (review.body.length < 100) {
        reviewBody = <span>{review.body}</span>;
      } else if (this.state.extended) {
        reviewBody = <span>{review.body}</span>;
        expand = <span className='more-less' onClick={() => this.changeView()}>Less</span>
      } else {
        reviewBody = <span>{review.body.slice(0,100)}...</span>;
        expand = <span className='more-less' onClick={() => this.changeView()}>More</span>
      }
    } else {
      reviewBody = null;
    }

    return (
      <div id='review-preview'>
        {review.title}
        <div className='review-info'>
          <span className='stars'> <Stars numStars={review.stars}/> </span>
          <span className='review-user-date'>{review.user} - {date}</span>
        </div>
        {reviewBody}
        <div>
          {expand}
        </div>
      </div>

    )
  }
}

export default ShortReview;