import React, { Component } from 'react';

class Band extends Component {
  
  render() {
    return(
      <div>
        Band Component
        <li>{this.state.bandName}</li>
        
      </div>
    );
  }
};

export default Band;
