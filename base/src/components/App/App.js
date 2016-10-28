import React from 'react';
import { Link, IndexLink } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import styles from './appStyles';
import NavLink from '../NavLink';

let classname = "example";
const App = (props) => {
  return (
  <setion>
  {/* <nav className="topBar">我是页头</nav> */}
  <footer className="footerNav">
    <ul>
      <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
      <li><Link to="/repos/myPar" activeStyle={styles.active}>Repos</Link></li>
      <li><Link to="/user" activeClassName="active">User</Link></li>
      <li><NavLink to="/contacts">Contacts</NavLink></li>
      <li><Link to="/about" activeStyle={{ color: 'green' }}>About</Link></li>
    </ul>
  </footer>
  
  <ReactCSSTransitionGroup
      component="div"
      className="content"
      transitionName={classname}
      transitionEnterTimeout={1000}
      transitionLeaveTimeout={1000}
  >
  {/*http://www.cnblogs.com/BestMePeng/p/React_Router.html
    克隆所有子节点，单独的{this.props.children}没有动画效果
  */}
  <div className="routerContent" key={props.location.pathname}>
  {props.children}
  </div>
  </ReactCSSTransitionGroup>

  </setion>
  )
};

App.propTypes = {
  children: React.PropTypes.object,
};

export default App;
