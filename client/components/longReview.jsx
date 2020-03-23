import React from 'react';
import moment from 'moment';
import Stars from './stars.jsx';
import FittingRange from './fittingRange.jsx';

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
    this.state.upvoted ? this.props.review.upvotes--: this.props.review.upvotes++;
    this.changeVote(this.props.review.upvotes, 'up', (err) => {
      if (err) {
        console.log(err);
      } else {
        this.setState({
          upvoted: !this.state.upvoted
        })
      }
    });
  }

  downVote() {
    this.state.downvoted ? this.props.review.downvotes--: this.props.review.downvotes++;
    this.changeVote(this.props.review.downvotes, 'down', (err) => {
      if (err) {
        console.log(err);
      } else {
        this.setState({
          downvoted: !this.state.downvoted
        })
      }
    });
  }

  changeVote(numVotes, vote, cbToReview) {
    $.ajax({
      method: 'POST',
      url: 'http://localhost:2000/updateVote/' + this.props.review.id + '/' + numVotes + '/' + vote,
      success: () => cbToReview(null),
      error: (err) => cbToReview(err),
    })
  }

  changeFlag() {
    this.flag((err) => {
      if (err) {
        console.log(err)
      } else {
        this.setState({
          flagged: !this.state.flagged
        })
      }
    })
  }

  flag(cbToFlag) {
    $.ajax({
      method: 'POST',
      url: 'http://localhost:2000/flagReview/' + this.props.review.id + '/' + !this.state.flagged,
      success: () => cbToFlag(null),
      error: (err) => cbToFlag(err),
    })
  }

  render() {
    var review = this.props.review;
    var date = review ? moment(review.date).format('MMM DD, YYYY'): null;
    var flag = '\u2690'

    return (
      <div id='long-review' className='breaker-line'>
        <div className='long-review-stars'>
          <Stars numStars={review.stars}/>
          <FittingRange size={review.size_rating} comfort={review.comfort_rating} durability={review.durability_rating} row={false} />
        </div>
        <div className='long-review-details'>
          <span className='full-review-title'>
            <b>{review.title}</b>
          </span>
          <span className='full-review-body'>
            {review.body} {!review.purchaser ? ' [This review was collected as part of a promotion.]': null}
          </span>
          <span className='full-review-sml-details'>
            {date}  -  {review.user}  -  {review.location}
          </span>
          {review.purchaser ? <span className='verified full-review-sml-details'>Verified Purchaser</span>: null}
          {review.use_for !== null ? <span className='full-review-sml-details'>Use for: Everyday wear</span>: null}
          <span id='review-rating'>
            <span className={this.state.upvoted ? 'arrow-icon upvoted' : 'arrow-icon arrow-up'} onClick={() => this.upVote()}>&#8679;</span>
            <span className='review-rating-num'>{review.upvotes}</span>
            <span className={this.state.downvoted ? 'arrow-icon downvoted' : 'arrow-icon arrow-down'} onClick={() => this.downVote()}>&#8681;</span>
            <span className='review-rating-num'>{review.downvotes}</span>
            <span className='flag-icon' onClick={() => this.changeFlag()}>{this.state.flagged ? '\u2691': '\u2690'}</span>
          </span>
        </div>
      </div>
    )

  }
}


export default LongReview;