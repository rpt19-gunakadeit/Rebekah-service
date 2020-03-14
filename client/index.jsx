import React from 'react';
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: [],
      avgStars: null
    }
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
        console.log(error)
      }
    })
  }

  componentDidMount() {
    this.getReviews()
  }

  render() {
    return (
      <div>
        <h1>Hello test test </h1>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))