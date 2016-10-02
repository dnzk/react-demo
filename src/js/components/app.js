import React from 'react';
import axios from 'axios';
import Header from './header';
import Roll from './roll';
import Sidebar from './sidebar';
import Backdrop from './backdrop';

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
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
