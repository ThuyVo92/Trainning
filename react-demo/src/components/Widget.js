import React, { Component } from 'react';

class Widget extends Component {
  render() {
    return (
      <div className="widget">
        <div className="help">
          <span className="icon-help"></span>
          <div className="noice">
            I'm just a tooltip. I'm just a tooltip. I'm just a tooltip. I'm just a tooltip. I'm just a tooltip.
        </div>
        </div>
        <div className="title">
          microphone
          <div className="switch switch-slider">
            <span className="handle"></span>
          </div>
        </div>
        <h2 className="title-h2">Mic Volume</h2>
        <div className="slider-container"></div>
        <div className="title-h2">
          mic sensitivity
        <div className="switch switch-slider">
            <span className="handle"></span>
          </div>
        </div>
        <p>Adjust this setting to remove unwanted background noise or increase the amount of mic output heard</p>
        <div className="slider-container"></div>
      </div>
    );
  }
}
export default Widget;