import React from 'react';
import ChinaFlag from '../cssIcon/ChinaFlag';

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

        <div className="baseInfo">
          <div className="leftBox">
            <img src="" alt=""/>
          </div>
          <div className="rightBox">
          111
          </div>
        </div>
        
      </div>
    );
  }
}
      
//<ChinaFlag scale={0.15}/>

export default PersonalProfile;
