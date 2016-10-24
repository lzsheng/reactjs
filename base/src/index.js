import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Repos from './components/Repos';
import About from './components/About';
import User from './components/User';
import Contacts from './components/Contacts';
import ContactsDetail from './components/Contacts/ContactsDetail';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/repos/:name" component={Repos} />
      <Route path="/user" component={User} />
      <Route path="/contacts" component={Contacts} />
      <Route path="ContactsDetail/:name/:age/:tel" component={ContactsDetail} />
      <Route path="/about" component={About} />
    </Route>
  </Router>,
  document.getElementById('app'));

require('normalize.css/normalize.css');
require('./sass/index.scss');
  
