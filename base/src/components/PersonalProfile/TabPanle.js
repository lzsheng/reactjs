import React from 'react';
import { Link, IndexLink } from 'react-router';

const TabPanle = (props) => {
    return (
    <div>
      <IndexLink to="/" activeClassName="navActive">能力值</IndexLink>
      <Link to="/repos/myPar" activeClassName="navActive">球员特性</Link>
      <Link to="/contacts" activeClassName="navActive">市场价格</Link>
    </div>
    )
};

export default TabPanle;