import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const routerAnimation = {
  transitionName : "pageAnimation",//"进入的页面"覆盖"离开的页面"动画
  timeout : 450,//切换时长
}

const App = (props) => {
  console.info("APP",props);
  //显示切换动画

  return (
  <ReactCSSTransitionGroup
      component="div"
      className="container"
      transitionName={routerAnimation.transitionName}
      transitionEnterTimeout={routerAnimation.timeout}
      transitionLeaveTimeout={routerAnimation.timeout}
  >
  {/* <nav className="topBar">我是页头</nav> */}

  {React.cloneElement(props.children, {
    key: props.location.pathname
  })}

  </ReactCSSTransitionGroup>

  )
};

App.propTypes = {
  children: React.PropTypes.object,
};

export default App;
