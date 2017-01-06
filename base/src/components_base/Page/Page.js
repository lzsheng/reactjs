import React, {Component} from 'react';
import { Link, IndexLink } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Page extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    const {className,children,hasFooter,transition,...other} = this.props;
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

    <setion className={`routerContent pageTranstion-${transition}`} {...other}>
    {/*_routerTransition.scss*/}
      
      {footerNav}

      <div className={`content ${className?className:""}`}>
        {children}
      </div>

    </setion>

    )
  }
}

Page.propTypes = {
    className: React.PropTypes.string,
    hasFooter: React.PropTypes.bool,
    transition: React.PropTypes.string
};

Page.defaultProps = {
    className: "",
    hasFooter: false,
    transition: "A"//默认为pageTranstion-A
};


export default Page;
