import React from 'react';
import ReactDOM from 'react-dom';
import Stars from './components/stars.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      avgStars: null
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

  render() {
    return (
      <div id="reviews-header">
          <span>Reviews ({this.state.reviews.length})</span>
          <Stars />
          <span>

          </span>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))