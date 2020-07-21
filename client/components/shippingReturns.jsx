// import React from 'react';
import Details from './details.jsx';

// stateful class component for displaying shipping and return info
export default class ShippingReturns extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      extended: false
    }
  }

  showInfo() {
    this.setState({ extended: !this.state.extended });
  }

  render() {

    return (
      <div className='breaker-line'>
        <div id="reviews-header" onClick={() => this.showInfo()}>
          <span>Free Shipping & Returns</span>
          <span>
            {this.state.extended ? <i className="arrow up"></i>: <i className="arrow down"></i>}
          </span>
        </div>
        {this.state.extended ? <Details/>: null}
      </div>

    )
  }
};


window.ShippingReturns = ShippingReturns;