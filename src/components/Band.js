import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <li key={this.props.band.id}>
        {this.props.band.name}<button key={this.props.band.id} onClick={()=>this.props.delete(this.props.band.id)}>DELETE</button>
      </li>
    );
  }
};

export default Band;


