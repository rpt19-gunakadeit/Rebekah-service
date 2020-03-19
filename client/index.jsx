import React from 'react';
import ReactDOM from 'react-dom';
import Stars from './components/stars.jsx';
import SummaryReviews from './components/summaryReviews.jsx';
import ShortReview from './components/shortReview.jsx';
import FullReviews from './components/fullReviews.jsx';
import LongReview from './components/longReview.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      avgStars: null,
      threeReviews: false,
      fullReviews: false,
    };
  }

  getReviews() {
    $.ajax({
      method: 'GET',
      url: 'http://localhost:2000/reviews/20',
      success: (data) => {
        this.setState({
          reviews: data.reviews,
          avgStars: data.avgStars
        })
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  componentDidMount() {
    this.getReviews();
  }

  showThreeReviews() {
    this.setState({
      threeReviews: !this.state.threeReviews
    })
  }

  showAllReviews() {
    this.setState({
      fullReviews: !this.state.fullReviews
    })
  }

  render() {

    return (
      <div>
        {this.state.fullReviews ? <FullReviews showAllReviews={this.showAllReviews.bind(this)} numStars={this.state.avgStars} reviews={this.state.reviews}/>: null}
        <div id="reviews-header" onClick={() => this.showThreeReviews()}>
          <span>Reviews ({this.state.reviews.length})</span>
          <div>
            <span className='stars'>
              <Stars numStars={this.state.avgStars}/>
            </span>
            <span>
              {this.state.threeReviews ? <i className="arrow up"></i>: <i className="arrow down"></i>}
            </span>
          </div>
        </div>
        {this.state.threeReviews ? <SummaryReviews numStars={this.state.avgStars} reviews={this.state.reviews.slice(0,3)} showAllReviews={this.showAllReviews.bind(this)}/>: null}
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))