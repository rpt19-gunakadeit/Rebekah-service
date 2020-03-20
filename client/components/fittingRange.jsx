import React from 'react';

var FittingRange = (props) => {
  console.log(props)
  return (
    <div className='fit-scales breaker-line'>
      <div className="slidecontainer">
        <span className="fit-title">Size</span>
        <input type="range" min="1" max="3" value={props.size} step='.1' className="slider" id="myRange" readOnly/>
        <div className='sliderLabels'>
          <span>Runs Small</span>
          <span>Runs Big</span>
        </div>
      </div>
      <div className="slidecontainer">
        <span className="fit-title">Comfort</span>
        <input type="range" min="1" max="3" value={props.comfort} step='.1' className="slider" id="myRange" readOnly/>
        <div className='sliderLabels'>
          <span>Uncomfortable</span>
          <span>Very Comfortable</span>
        </div>
      </div>
      <div className="slidecontainer">
        <span className="fit-title">Durability</span>
        <input type="range" min="1" max="3" value={props.durability} step='.1' className="slider" id="myRange" readOnly/>
        <div className='sliderLabels'>
          <span>Not Durable</span>
          <span>Very Durable</span>
        </div>
      </div>

    </div>
  )
}

export default FittingRange;