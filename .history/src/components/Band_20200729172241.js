import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>
        Band Component
        <span>{props.band.name}</span>
      </div>
    );
  }
};

export default Band;
