import React from 'react';
import img_barBg from 'srcPath/img/bar_bg.png';
import img_barBg2 from 'srcPath/img/bar_bg2.png';
import img_barCon from 'srcPath/img/bar_con.png';

class ProgressBar extends React.Component {

  constructor(props) {
    super(props);
    this.machPercentage = this.machPercentage.bind(this);
    this.state = {

    }
  }

  machPercentage(user_sum,sys_sum){
    let percentage = parseInt(user_sum / sys_sum * 100);
    percentage = percentage > 100 ? 100 : percentage;
    return percentage
  }

  render() {
    let {user_sum,sys_sum} = this.props;
    let percentage = this.machPercentage(user_sum,sys_sum);
    let style = {
      width:percentage+"%"
    }
    return (
      <div className="bar-box">
            <img src={percentage<100?img_barBg2:img_barBg} className="barBg" />
            <div className="barCon"><div className="barCon-mask" style={style}><img src={img_barCon} className=""  /></div></div>
      </div>
    );
  }
}

export default ProgressBar;