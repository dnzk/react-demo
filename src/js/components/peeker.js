import React from 'react';

export default class Peeker extends React.Component {
  seeDetails() {
    console.log(this.props.item);
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
