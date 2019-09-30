import React, { Component } from 'react';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ListMenu: [
        { id: '1', name: 'sound' },
        { id: '2', name: 'mixer' },
        { id: '3', name: 'enhancement' },
        { id: '4', name: 'eq' },
        { id: '5', name: 'mic' },
        { id: '6', name: 'lighting' },
        { id: '7', name: 'power' },
      ],
      isActive: true,
    };
  }

  HandlerActive = () => {
    const isActive = this.state.isActive;
    this.setState({
      isActive: !isActive,
    });
  };
  render() {
    let MenuHeader = this.state.ListMenu.map((nameMenu, index) => {
      return (
        <li key={index} className={this.state.nameMenu ? 'active' : ''}>
          <a
            href="#"
            name={nameMenu.name}
            onClick={() => this.HandlerActive(nameMenu)}
          >
            {nameMenu.name}
          </a>
        </li>
      );
    });

    return <ul className="menu">{MenuHeader}</ul>;
  }
}

export default Menu;
