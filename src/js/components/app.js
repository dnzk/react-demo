import React from 'react';
import Header from './header';

class App extends React.Component {
  render() {
    return (
      <div id="content">
        <Header headerText="SWAPI" />
        <div id="content-body">
          <div className="peeker-container">
            <div className="peeker">
              <span className="peeker-text">Anakin Skywalker</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App
