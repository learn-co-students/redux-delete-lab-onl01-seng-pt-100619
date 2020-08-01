import React, { Component } from 'react';
import Band from './Band'

class Bands extends Component {
    renderBands = () => {
        return this.props.bands.map(band => <Band key={band.id} band={band} delete={this.props.delete} />)
    }
  render() {
    
    return(
      <ul className="bands">
        {this.renderBands()}
      </ul>
    );
  }
};

export default Bands;
