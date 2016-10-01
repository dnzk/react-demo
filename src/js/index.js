import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Router, Route, hashHistory } from 'react-router';
import '../style/style.scss';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App} />
  </Router>
), document.getElementById('app'));
