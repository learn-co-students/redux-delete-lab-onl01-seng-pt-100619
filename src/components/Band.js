import React, { Component } from 'react';

class Band extends Component {

  handleClick = () => {
    this.props.remove(this.props.band.id)
  }


  render() {
    return(
      <div>
        <li>{this.props.band.name}<button onClick={this.handleClick}>DELETE</button></li>
      </div>
    );
  }
};

export default Band;
