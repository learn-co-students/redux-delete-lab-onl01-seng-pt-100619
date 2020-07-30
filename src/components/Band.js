import React, { Component } from 'react';

export default class Band extends Component {

  handleOnClick = () => {
    this.props.deleteBand(this.props.band.id)
  }

  render() {
    return(
      <div>
        <li>{this.props.band.name}</li>
        <button onClick={this.handleOnClick}>Delete Band</button>
      </div>
    );
  }
}
