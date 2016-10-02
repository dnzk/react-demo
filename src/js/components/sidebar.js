import React from 'react';
import { Link } from 'react-router';

const Dismisser = (props) => {
  return (
    <div id="dismisser">
      <button type="buton" onClick={props.toggle}>
        {
          props.symbol === 'closed' ? '>' : 'X'
        }
      </button>
    </div>
  )
}

const MenuList = (props) => {
  let route = `/${props.menu}`;
  let name = props.menu.charAt(0).toUpperCase() + props.menu.slice(1);

  return (
    <li className="menu-item"><span><Link to={route}>{name}</Link></span></li>
  )
}

class Sidebar extends React.Component {
  constructor() {
    super();
    this.state = {
      toggler: 'open'
    }
  }
  render() {
    let menu = [
      'people',
      'planets',
      'films',
      'species',
      'vehicles',
      'starships'
    ].map((name, key) => {
      return <MenuList key={key} menu={name} />
    });

    return (
      <div id="sidebar" className={this.state.toggler}>
        <ul id="menu">
          {menu}
        </ul>
        <Dismisser toggle={this.toggle.bind(this)} symbol={this.state.toggler} />
      </div>
    )
  }
  toggle() {
    this.setState({
      toggler: this.state.toggler === 'open' ? 'closed' : 'open',
    });
  }
}

export default Sidebar
