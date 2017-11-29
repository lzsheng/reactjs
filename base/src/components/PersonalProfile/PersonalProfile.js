import React from 'react';
import BaseInfo from './BaseInfo';
import TabPanle from './TabPanle';
// import ChinaFlag from '../cssIcon/ChinaFlag';
import Alert from './Alert'


require('./style/_PersonalProfile.scss');



class PersonalProfile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showAlert: true
    }
    this.isWeiXin = this.isWeiXin.bind(this)

  }

  componentDidMount() {

  }

  isWeiXin() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
      return true;
    } else {
      return false;
    }
  }

  onClickOk() {
    this.setState({
      showAlert: false
    })
  }

  render() {
    // console.log(this.props);
    return (
      <div className="personal">
        {this.isWeiXin() && this.state.showAlert &&
          <Alert cb={this.onClickOk.bind(this)} />
        }
        <div className="pageTitle">详细信息</div>

        {/* 用户基本信息 */}
        <BaseInfo />

        {/* 选项卡 */}
        {React.cloneElement(this.props.children, {
          key: this.props.location.pathname,
        })}

      </div>
    );
  }
}

//        <TabPanle></TabPanle>     

export default PersonalProfile;
