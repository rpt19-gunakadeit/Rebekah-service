import React from 'react';
import ReactDOM from 'react-dom';
import Stars from './components/stars.jsx';
import ShortReviews from './components/shortReviews.jsx';
import Review from './components/review.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      avgStars: null,
      threeReviews: false,
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

  render() {
    var arrow, shortReviews;
    if (this.state.threeReviews) {
      arrow = <i className="arrow up"></i>;
      shortReviews = <ShortReviews numStars={this.state.avgStars} reviews={this.state.reviews.slice(0,3)}/>;
    } else {
      arrow = <i className="arrow down"></i>;
      shortReviews = null;
    }

    return (
      <div>
        <div id="reviews-header" onClick={() => this.showThreeReviews()}>
          <span>Reviews ({this.state.reviews.length})</span>
          <div>
            <Stars numStars={this.state.avgStars}/>
            <span>
              {arrow}
            </span>
          </div>
        </div>
        {shortReviews}
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))