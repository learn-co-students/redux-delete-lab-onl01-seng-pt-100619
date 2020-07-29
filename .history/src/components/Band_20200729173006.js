import React, { Component } from 'react';

class Band extends Component {
  
  render() {
    return(
      <div>
        Band Component
        <span>{this.props.bandName}</span>
        
      </div>
    );
  }
};

export default Band;
