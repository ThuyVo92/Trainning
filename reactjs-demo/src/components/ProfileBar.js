import React, { Component } from 'react';
import Select from './Select';

class ProfileBar extends Component {
  render() {
    return (
      <div className="profile-bar">
        <h3>Profile</h3>
        <Select />
        <div className="profileMenuToggle"></div>
        <div className="onboard" tooltip="On-board Profiles"></div>
        <div className="batt" tooltip="30%"></div>
      </div>
    );
  }
}
export default ProfileBar;