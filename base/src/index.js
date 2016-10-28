import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './components/App';
import Login from './components/Login';
import Home from './components/Home';
import Repos from './components/Repos';
import Repo from './components/Repos/Repo';
import About from './components/About';
import Contacts from './components/Contacts';
import ContactsDetail from './components/Contacts/ContactsDetail';

import auth from './Until/auth'

const redirectToLogin = (nextState, replaceState) => {
  console.log("redirectToLogin",nextState.location);
  if (!auth.loggedIn()) {
    replaceState({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }//告诉login页面,登录成功后跳转到哪个页面
    })
  }
}

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/repos" component={Repos}>
        <Route path="/repos/:name" component={Repo}/>
      </Route>
      <Route path="/contacts" component={Contacts} />
      <Route path="/ContactsDetail/:name/:age/:tel" component={ContactsDetail} />
      <Route path="/about" component={About} onEnter={redirectToLogin} />
      <Route path="/login" component={Login} />
    </Route>
  </Router>,
  document.getElementById('app'));

require('normalize.css/normalize.css');
require('./sass/index.scss');