import React, { Component } from 'react';

class Band extends Component {
  
  render() {
    return(
      <div>
        Band Component
        <li>{this.props.name}</li>
        
      </div>
    );
  }
};

export default Band;
