import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>
        Band Component
        <span>{props.bank.name}</span>
      </div>
    );
  }
};

export default Band;
