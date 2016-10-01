import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import Planet from './components/planet';
import People from './components/people';
import { Router, Route, hashHistory } from 'react-router';
import '../style/style.scss';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/people" component={People} />
      <Route path="/planets" component={Planet} />
      <Route path="/films" component={Planet} />
      <Route path="/species" component={Planet} />
      <Route path="/vehicles" component={Planet} />
      <Route path="/starships" component={Planet} />
    </Route>
  </Router>
), document.getElementById('app'));

