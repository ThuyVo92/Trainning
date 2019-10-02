import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header';
import BodyWrapper from './BodyWrapper';

class App extends Component {
    render() {
        return <div className="main-container">
            <Header />
            <BodyWrapper />
        </div>
    }
}

export default App;