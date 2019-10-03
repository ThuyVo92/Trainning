import React, { Component } from 'react';
import ButtonSlider from './ButtonSlider';
import SliderContainer from './SliderContainer';
import TitleChild from './TitleChild';

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
      <div className="block-widget">
        <ButtonSlider
          nameButton={this.props.nameButton}
          idButton={this.props.idButton}
          handleSwitch={this.handleSwitch}
          isActive={this.state.isActive}
        />
        <TitleChild titleChild={this.props.titleChild} />
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
