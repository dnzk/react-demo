import React from 'react';
import { fabricate } from 'crossvent';
import { setBackdropDetails } from '../store/app-store';

export default class Peeker extends React.Component {
  seeDetails() {
    setBackdropDetails(this.props.item);
    fabricate(document.getElementById('backdrop'), 'toggle');
  }
  render() {
    return (
      <div className="peeker-container">
        <div className="peeker" onClick={this.seeDetails.bind(this)}>
          <span className="peeker-text">{ this.props.item.name }</span>
        </div>
      </div>
    )
  }
}
