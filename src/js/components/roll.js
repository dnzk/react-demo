import React from 'react';
import Peeker from './peeker';

class Roll extends React.Component {
  render() {
    let list = this.props.list.map((item, key) => {
      return <Peeker key={key} text={item.name} />
    });

    return (
      <div id="content-body">
        {list}
      </div>
    )
  }
}

export default Roll
