import React, { Component } from 'react';
import Title from './Title';
import SliderContainer from './SliderContainer';
import Tips from './Tips';

class Widget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tips: [
        {
          description:
            "I'm just a tooltip. I'm just a tooltip. I'm just a tooltip. I'm just a tooltip. I'm just a tooltip.",
        },
      ],
    };
  }
  render() {
    return (
      <div className="widget">
        <Tips description={this.state.tips[0].description} />
        <Title title="microphone" />
        <h2 className="title-h2">Mic Volume</h2>
        <SliderContainer idContainer="slPhone" />
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
