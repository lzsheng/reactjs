import React from 'react';
import BaseInfo from './BaseInfo';
import TabPanle from './TabPanle';
import ChinaFlag from '../cssIcon/ChinaFlag';

require('./style/_PersonalProfile.scss');

class PersonalProfile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }

  }

  componentDidMount() {
    
  }

  render() {
    // console.log(this.props);
    return (
      <div className="personal">

        <div className="pageTitle">详细信息</div>

        {/* 用户基本信息 */}
        <BaseInfo />

        {/* 选项卡 */}
        {React.cloneElement(this.props.children, {
          key: this.props.location.pathname
        })}

      </div>
    );
  }
}

//        <TabPanle></TabPanle>     

export default PersonalProfile;
