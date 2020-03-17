import React from 'react';
import ReactDOM from 'react-dom';
import Stars from './components/stars.jsx';

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
      url: 'http://localhost:2000/19',
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
    var arrow = this.state.threeReviews ? <i className="arrow up"></i>: <i className="arrow down"></i>;

    return (
      <div id="reviews-header" onClick={() => this.showThreeReviews()}>
          <span>Reviews ({this.state.reviews.length})</span>
          <div>
            <Stars />
            <span>
              {arrow}
            </span>
          </div>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))