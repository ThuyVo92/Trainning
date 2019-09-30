import React, { Component } from 'react';
import Title from './Title';
import SliderContainer from './SliderContainer';

class Widget extends Component {
  render() {
    return (
      <div className="widget">
        <div className="help">
          <div className="noice">
            I'm just a tooltip. I'm just a tooltip. I'm just a tooltip. I'm just
            a tooltip. I'm just a tooltip.
          </div>
        </div>
        <Title title="microphone" />
        <h2 className="title-h2">Mic Volume</h2>
        <SliderContainer />
        <Title title="mic sensitivitye" />
        <p>
          Adjust this setting to remove unwanted background noise or increase
          the amount of mic output heard
        </p>
        <SliderContainer />
      </div>
    );
  }
}
export default Widget;
