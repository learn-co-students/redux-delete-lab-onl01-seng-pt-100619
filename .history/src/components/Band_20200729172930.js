import React, { Component } from 'react';
console.log(props.bandName)
class Band extends Component {
  
  render() {
    return(
      <div>
        Band Component
        <span>{props.bandName}</span>
        
      </div>
    );
  }
};

export default Band;
