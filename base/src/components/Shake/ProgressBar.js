import React from 'react';
import until from '../../until';
// import img_barBg from '../../img/bar_bg.png';
// import img_barBg2 from '../../img/bar_bg2.png';
import img_barCon from '../../img/bar_con.png';

//金色金币
let img_barBg = 'data:image/png;base64,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';

//银色金币
let img_barBg2 = 'data:image/png;base64,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';


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
/* <div style={style}>{percentage}%</div> */
export default ProgressBar;