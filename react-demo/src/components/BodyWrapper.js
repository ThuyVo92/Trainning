import React, { Component } from 'react';
import ProfileBar from './ProfileBar';
import Widget from './Widget';

class BodyWrapper extends Component {
  render() {
    return (
      <div className="body-wrapper scrollable">
        <ProfileBar />

        <div className="body-widgets">
          <div className="widget-col col-left">
            <Widget />
          </div>
          <div className="widget-col col-right"></div>
        </div>
      </div>
    );

  }
}

export default BodyWrapper;