import React from 'react';
import moment from 'moment';
import Stars from './stars.jsx';

class LongReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      upvoted: false,
      downvoted: false,
      flagged: false
    }
  }

  upVote() {
    this.setState({
      upvoted: !this.state.upvoted
    })
  }

  downVote() {
    this.setState({
      downvoted: !this.state.downvoted
    })
  }

  changeFlag() {
    this.setState({
      flagged: !this.state.flagged
    })
  }

  render() {
    var review = this.props.review;
    var date = moment(review.date).format('MMM DD, YYYY');
    var flag = '\u2690'
    return (
      <div id='long-review' className='breaker-line'>
        <div className='long-review-stars'>
          <Stars numStars={review.stars} />
          <span>
            Size
          </span>
          <span>
            Comfort
          </span>
          <span>
            Durability
          </span>
        </div>
        <div className='long-review-details'>
          <span className='full-review-title'>
            <b>{review.title}</b>
          </span>
          <span className='full-review-body'>
            {review.body}
          </span>
          <span className='full-review-sml-details'>
            {date}  -  {review.user}  -  {review.location}
          </span>
          <span className='verified full-review-sml-details'>
            Verified Purchaser
          </span>
          <span className='full-review-sml-details'>
            Use for: Everyday wear
          </span>
          <span id='review-rating'>
            <span className='arrow-icon' onClick={() => this.upVote()}>&#8679;</span>
            <span className='review-rating-num'>0</span>
            <span className='arrow-icon' onClick={() => this.downVote()}>&#8681;</span>
            <span className='review-rating-num'>0</span>
            <span className='flag-icon' onClick={() => this.changeFlag()}>{this.state.flagged ? '\u2691': '\u2690'}</span>
          </span>
        </div>
      </div>
    )

  }
}


export default LongReview;