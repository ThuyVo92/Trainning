import React, { Component } from 'react';
import ButtonSlider from './ButtonSlider';
import SliderContainer from './SliderContainer';

class BodyWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: true,
    };
  }

  handleSwitch = () => {
    this.setState({ isActive: !this.state.isActive });
  };

  render() {
    return (
      <div>
        <ButtonSlider
          nameButton={this.props.nameButton}
          idButton={this.props.idButton}
          handleSwitch={this.handleSwitch}
          isActive={this.state.isActive}
        />
        <h2 className="title-h2">Mic Volume</h2>
        <SliderContainer
          idContainer="slPhone"
          isActive={this.state.isActive}
          handleSwitch={this.handleSwitch}
        />
      </div>
    );
  }
}
export default BodyWidget;
