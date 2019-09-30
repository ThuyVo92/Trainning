import React, { Component } from 'react';

class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {
      IsActive: true,
    };
  }

  ClickHandle = () => {
    const IsActive = this.state.IsActive;
    this.setState({
      IsActive: !IsActive,
    });
  };
  render() {
    const buttonSwitch = this.state.IsActive ? 'on' : '';
    return (
      <div className="title">
        <span>{this.props.title}</span>
        <button
          type="button"
          className={`switch ${buttonSwitch}`}
          onClick={this.ClickHandle}
        >
          <span className="handle"></span>
        </button>
      </div>
    );
  }
}

export default Title;
