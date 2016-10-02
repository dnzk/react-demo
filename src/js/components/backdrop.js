import React from 'react';
import { add } from 'crossvent';
import { getBackdropDetails } from '../store/app-store';

export default class Backdrop extends React.Component {
  constructor() {
    super();
    this.state = {
      backdropState: 'show'
    };
  }
  toggle() {
    let backdrop = this.state.backdropState === 'show' ? 'hide' : 'show';
    this.setState({
      backdropState: backdrop
    });
  }
  render() {
    const Row = (props) => {
      return (
        <tr className="detail-row">
          <td className="property-name">{ props.property }</td>
          <td className="property-value">{ props.value }</td>
        </tr>
      )
    }
    let detail = [];
    let backdropDetails = getBackdropDetails();
    for (var i in backdropDetails) {
      let property = i.split('_').join(' ');
      detail.push(<Row key={i} property={property} value={backdropDetails[i]} />)
    }
    return (
      <div id="backdrop"
        className={this.state.backdropState}
        onClick={this.toggle.bind(this)}>
        <div id="detail-layer">
          People
          <table>
              <tbody>
                { detail }
              </tbody>
          </table>
        </div>
      </div>
    )
  }
  componentDidMount() {
    add(document.getElementById('backdrop'), 'toggle', this.toggle.bind(this));
  }
}
