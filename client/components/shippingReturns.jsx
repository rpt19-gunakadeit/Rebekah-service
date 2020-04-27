// import React from 'react';

export default class ShippingReturns extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      extended: false
    }
  }

  showInfo() {
    this.setState({ extended: !this.state.extended })
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
}

var Details = (props) => {
  return (
    <div id='short-reviews'>
      Free standard shipping and free 60-day returns for Nike Members. <a>Learn more. Return policy exclusions apply.</a>
      <ul>
        <li>Standard / Arrives 2-4 Business Days</li>
        <li>Two-Day / Arrives 2-3 Business Days</li>
        <li>Next-Day / Arrives 1-2 Business Days</li>
      </ul>
      <a>Pick-up available at select Nike Stores.</a>
    </div>
  )
}

window.ShippingReturns = ShippingReturns;