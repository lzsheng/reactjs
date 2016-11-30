import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import FastClick from 'fastclick';
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
      //location state 是一个由任意数据构成的对象，以便和某个特殊的 location 联系起来。它可以被用于在 location 上绑定一些不能通过URL获取的额外状态。
      state: { nextPathname: nextState.location.pathname }//告诉login页面,登录成功后跳转到哪个页面
    })
  }
}

class PageNotFound extends React.Component {
  render() {
    return (
      <div>
        <h1>Page Not Found.</h1>
        <p>Go to <Link to="/">Home Page</Link></p>
      </div>
    )
  }
}

window.addEventListener('load',()=>{
  FastClick.attach(document.body);
});

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="repos" component={Repos}>
        <Route path=":name" component={Repo}/>
      </Route>
      <Route path="contacts" component={Contacts} />
      <Route path="contacts/ContactsDetail" component={ContactsDetail} />
      <Route path="about" component={About} onEnter={redirectToLogin} onEnter={redirectToLogin}/>
      <Route path="login" component={Login} />
    </Route>
    <Route path="*" component={PageNotFound} />
  </Router>,
  document.getElementById('app'));


/*样式*/
// require('normalize.css/normalize.css');
import 'weui';
require('./sass/index.scss');