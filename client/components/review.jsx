import React from 'react';
import moment from 'moment';
import Stars from './stars.jsx';

class Review extends React.Component {
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
    var date = moment(review.date).format('MMM DD, YYYY');
    var reviewBody, extra;

    if (review.body.length < 100) {
      reviewBody = <span>{review.body}</span>;
    } else if (this.state.extended) {
      reviewBody = <span>{review.body}</span>;
      extra = <span className='more-less' onClick={() => this.changeView()}>Less</span>
    } else {
      reviewBody = <span>{review.body.slice(0,100)}...</span>;
      extra = <span className='more-less' onClick={() => this.changeView()}>More</span>
    }

    return (
      <div id='review-preview'>
        {review.title}
        <div className='review-info'>
          <Stars numStars={review.stars}/>
          <span className='review-user-date'>{review.user} - {date}</span>
        </div>
        {reviewBody}
        <div>
          {extra}
        </div>
      </div>

    )
  }
}

export default Review;