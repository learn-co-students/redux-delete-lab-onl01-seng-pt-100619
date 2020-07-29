import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>
        Band Component
        <span>console.log(props.bandName)</span>
        
      </div>
    );
  }
};

export default Band;
