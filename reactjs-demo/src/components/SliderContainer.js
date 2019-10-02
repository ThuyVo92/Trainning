import React, { Component } from 'react';

class SliderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // isActive: this.props.isActive,
    };
  }
  render() {
    const AddClass = this.props.isActive ? 'on' : '';
    return (
      <div
        className={`slider-container ${AddClass}`}
        id={this.props.idContainer}
      >
        <div className="foot min">low</div>
        <div className="foot mid">medium</div>
        <div className="foot max">high</div>
        <div id="slPhoneFill" className="left"></div>
        <div className="track"></div>
        <div id="slPhoneTip" className="slider-tip">
          55
        </div>
        <input
          type="range"
          min="10"
          max="100"
          value="55"
          step="1"
          className="slider"
          id="slPhoneRange"
        />
      </div>
    );
  }
}

export default SliderContainer;
