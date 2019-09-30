import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return (

      <ul className="menu">
        <li>
          <a href="#">sound</a>
        </li>
        <li>
          <a href="#">mixer</a>
        </li>
        <li>
          <a href="#">enhancement</a>
        </li>
        <li>
          <a href="#">eq</a>
        </li>
        <li>
          <a href="#">mic</a>
        </li>
        <li>
          <a href="#">lighting</a>
        </li>
        <li>
          <a href="#">power</a>
        </li>
      </ul>


    );
  }
}

export default Menu;
