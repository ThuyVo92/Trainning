import React, { Component } from 'react';

class ListMenu extends Component {

  onSetClass(params) {
    this.setState({
      isActive: params
    })
  }

  setActive = (params) => {
    this.props.onSetClass({

    })
  }
  render() {
    return (
      <li className={this.props.className} onReceiveClass="{this.onSetClass}" onClick={() => this.setActive}>
        <a
          href="#"
          name={this.props.name}
        >
          {this.props.name}
        </a>
      </li>
    );
  }
}
export default ListMenu;