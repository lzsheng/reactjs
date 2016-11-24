import React from 'react';
import { Link, IndexLink } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


const Page = (props) => {
  const {className,children,hasFooter,transition} = props;
  //如果footerNav="true"则显示页脚
  const footerNav = hasFooter ? (
    <footer className="footerNav">
      <ul>
        <li><IndexLink to="/" activeClassName="navActive">Home</IndexLink></li>
        <li><Link to="/repos/myPar" activeClassName="navActive">Repos</Link></li>
        <li><Link to="/contacts" activeClassName="navActive">Contacts</Link></li>
        <li><Link to="/about" activeClassName="navActive">About</Link></li>
      </ul>
    </footer>
  ):null;
  
  return (

  <setion className={`routerContent pageTranstion-${transition?transition:"A"}`}>
  {/*_routerTransition.scss*/}
    
    {footerNav}

    <div className={`content ${className?className:""}`}>
      {children}
    </div>

  </setion>

  )


};


export default Page;
