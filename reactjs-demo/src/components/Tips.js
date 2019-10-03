import React, { Component } from 'react';

class Tips extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="help">
        <div className="noice">{this.props.description}</div>
      </div>
    );
  }
}
export default Tips;
