import React from 'react';
import { Link, IndexLink } from 'react-router';
import styles from './appStyles';
import NavLink from '../NavLink';

const App = (props) => (
  <setion>
  {/* <nav className="topBar">我是页头</nav> */}
  <footer className="footerNav">
    <ul>
      <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
      <li><Link to="/repos/react-router" activeStyle={styles.active}>Repos</Link></li>
      <li><Link to="/user" activeClassName="active">User</Link></li>
      <li><NavLink to="/contacts">Contacts</NavLink></li>
      <li><Link to="/about" activeStyle={{ color: 'green' }}>About</Link></li>
    </ul>
  </footer>
  <div className="content">{props.children}</div>
  </setion>
);

App.propTypes = {
  children: React.PropTypes.object,
};

export default App;
