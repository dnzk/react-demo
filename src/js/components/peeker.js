import React from 'react';

export default (props) => {
  return (
    <div className="peeker-container">
      <div className="peeker">
        <span className="peeker-text">{ props.text }</span>
      </div>
    </div>
  )
}
