import React, { Component } from 'react';
import Menu from './Menu';
import SliderNextPrev from './SliderNextPrev'

class Header extends Component {
  render() {
    return (
      <div className="nav-menu">
        <SliderNextPrev />
        <Menu />
        <div className="user">
          <div className="avatar"></div>
        </div>
      </div>
    );

  }
}

export default Header;