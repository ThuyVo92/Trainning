import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import BodyWrapper from '../../components/BodyWrapper';

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <Header />
        <BodyWrapper />
      </div>
    );
  }
}

export default App;
