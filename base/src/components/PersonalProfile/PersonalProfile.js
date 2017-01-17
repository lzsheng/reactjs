import React from 'react';
import BaseInfo from './BaseInfo';
import TabPanle from './TabPanle';
import ChinaFlag from '../cssIcon/ChinaFlag';
import img_hear from 'srcPath/img/lg.jpg';//http://up.qqjia.com/z/18/tu20468_3.jpg

require('srcPath/sass/page/_PersonalProfile.scss');

class PersonalProfile extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    }

  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="personal">

        <div className="pageTitle">详细信息</div>

        <BaseInfo />

        <TabPanle />
        
      </div>
    );
  }
}
      

export default PersonalProfile;
