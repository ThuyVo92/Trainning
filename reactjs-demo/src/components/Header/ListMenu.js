import React, { Component } from 'react';

class ListMenu extends Component {
  render() {
    return (
      <li className={this.props.class}>
        <a
          href={`/${this.props.link}`}
          name={this.props.name}
          onClick={this.click}
        >
          {this.props.name}
        </a>
      </li>
    );
  }
}
export default ListMenu;
