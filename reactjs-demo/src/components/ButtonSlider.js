import React, { Component } from 'react';

class ButtonSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // isActive: this.props.isActive,
    };
  }

  ClickHandle = () => {
    this.props.handleSwitch();
  };
  render() {
    const buttonSwitch = this.props.isActive ? 'on' : '';
    return (
      <div className="title">
        <span>{this.props.nameButton}</span>
        <button
          type="button"
          className={`switch ${buttonSwitch}`}
          id={this.props.idButton}
          onClick={this.ClickHandle}
        >
          <span className="handle"></span>
        </button>
      </div>
    );
  }
}

export default ButtonSlider;
