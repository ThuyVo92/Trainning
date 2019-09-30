import React, { Component } from 'react';
import { classes } from 'istanbul-lib-coverage';

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
    return (
      <div className="title">
        <span>{this.props.title}</span>
        <button type="button" className="switch" onClick={this.ClickHandle}>
          <span className="handle"></span>
        </button>
      </div>
    );
  }
}

export default Title;
