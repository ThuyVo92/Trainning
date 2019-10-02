import React, { Component } from 'react';
import ProfileBar from './ProfileBar';
import ContentWidget from './ContentWidget';
import Tips from './Tips';

class BodyWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tips: [
        {
          description:
            "I'm just a tooltip. I'm just a tooltip. I'm just a tooltip. I'm just a tooltip. I'm just a tooltip.",
        },
      ],
      isActive: true,
    };
  }

  handleSwitch = () => {
    this.setState({ isActive: !this.state.isActive });
  };
  render() {
    return (
      <div className="body-wrapper scrollable">
        <ProfileBar />

        <div className="body-widgets">
          <div className="widget-col col-left">
            <div className="widget">
              <Tips description={this.state.tips[0].description} />
              <ContentWidget nameButton="microphone" idButton="swPhone" />
              <ContentWidget nameButton="mic sensitivity" idButton="swSensi">
                Adjust this setting to remove unwanted background noise or
                increase the amount of mic output heard
              </ContentWidget>
            </div>
          </div>
          <div className="widget-col col-right">
            <div className="widget">
              <Tips description={this.state.tips[0].description} />
              <ContentWidget nameButton="sidetone" idButton="swSide" />
            </div>
            <div className="widget">
              <Tips description={this.state.tips[0].description} />
              <ContentWidget nameButton="enhancements" idButton="swSide" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BodyWrapper;
