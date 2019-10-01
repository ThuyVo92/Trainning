import React, { Component } from 'react';

const Tips = props => {
  return (
    <div className="help">
      <div className="noice">{props.description}</div>
    </div>
  );
};
export default Tips;
