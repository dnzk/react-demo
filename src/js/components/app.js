import React from 'react';
import axios from 'axios';
import Header from './header';
import Roll from './roll';
import Sidebar from './sidebar';
import Backdrop from './backdrop';

class App extends React.Component {
  constructor() {
    super();
    this.state = { root: [] };
  }
  componentDidMount() {
    axios.get('http://swapi.co/api/')
      .then(res => {
        this.setState({ root: res.data });
      });
  }
  render() {
    let characters = [
      'Anakin Skywalker',
      'Luke Skywalker',
      'Headhunterz',
      'Son go ku',
      'Saitama',
      'Mister Hitman'
    ];

    return (
      <div id="content">
        <Sidebar />
        <Header headerText="SWAPI" />
        { this.props.children }
        <Backdrop />
      </div>
    );
  }
}

export default App
