import React, { Component } from 'react';

class TitleChild extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div className="h2-title">{this.props.titleChild}</div>;
  }
}
export default TitleChild;
