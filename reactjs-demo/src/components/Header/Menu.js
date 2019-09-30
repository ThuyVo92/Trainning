import React, { Component } from 'react';
import ListMenu from './ListMenu'

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
    const AddClass = this.state.isActive ? 'active' : ''
    return <ul className="menu">
      {this.state.ListMenu.map(names => {
        return <ListMenu
          name={names.name}
          className={AddClass}
          click={this.HandlerActive}
        />
      })}
    </ul>;
  }
}

export default Menu;
