import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import FastClick from 'fastclick';
import PersonalProfile from './components/PersonalProfile';
import TabPanle from './components/PersonalProfile/TabPanle';

/*样式*/
require('normalize.css/normalize.css');
require('./sass/index.scss');

window.addEventListener('load', () => {
  FastClick.attach(document.body);
});

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={PersonalProfile}>
      <Route path=":tabId" component={TabPanle} />
    </Route>
  </Router>,
  document.getElementById('app'));