import React, { Component } from 'react';
import Band from "./Band.js"
import { connect } from "react-redux"

class Bands extends Component {


  render() {
    const listBands = this.props.bands.map(band => <Band delete={this.props.delete} band={band} key={band.id} />)
    return(
      <div>
        <ul>
            {listBands}
        </ul>
      </div>
    );
  }
};

const mapStateToProps = state => ({bands: state.bands})

const mapDispatchToProps = dispatch => {
    return {
      delete: id => dispatch({type: 'DELETE_BAND', id: id })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bands);

