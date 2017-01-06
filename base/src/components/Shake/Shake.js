import React from 'react';
import $ from 'jquery';
import Alert from '../Alert';
import until from '../../until';
import ProgressBar from './ProgressBar';//进度条
import shakeEvent from './shakeEvent';

import img_yysBg from '../../img/yys_bg.jpg';
import img_yysS from '../../img/yys_s.png';
import img_sjy from '../../img/sjy.png';

import img_s1 from '../../img/s1.png';
import img_s2 from '../../img/s2.png';
import img_s3 from '../../img/s3.png';
import img_s4 from '../../img/s4.png';

class Shake extends React.Component {

  constructor(props) {
    super(props);

    this.userShake = this.userShake.bind(this);

    this.state = {
      //系统配置
      sys_sum: 50,//通关次数
      allDrawNumber: 200,//总上墙人数
      alert_showFlag: false,
      alert_msg:"",
      //用户操作数据
      user_sum: 0,//用户摇动次数

    }

    this.isComplete = false;
    
  }

  componentDidMount() {
    this.kk = new shakeEvent( ()=>{this.userShake()} );
    this.kk._init();//初始化摇一摇事件

    //用户如果6s不操作,则自动回退到0
    this.clearUserSumTimerOut = this.state.user_sum;
    setInterval(()=>{
      if(this.clearUserSumTimerOut===this.state.user_sum){
        if(this.isComplete==false){
          this.resetUserShake();
        }
      }else{
        this.clearUserSumTimerOut = this.state.user_sum;
      }
    },6000);
  }

  userShake(){
    let __user_sum = this.state.user_sum;

    if(__user_sum>this.state.sys_sum){
      return false;
    }
    if( __user_sum%20 == 0){
      this.shakeMusic.play();//摇一摇声音
    }
    if(__user_sum===this.state.sys_sum){
      this.shakeMusic.play();//摇一摇声音
      // this.__savewallplayer();//test
      this.setState({alert_showFlag:true,alert_msg:"大哥,您通关了,请停下您的麒麟臂!"});
    }
    if(__user_sum===5){
      // this.__illegalplay();//test
    }
    //阶梯
    let _in = 1;//阶梯-因子

    this.setState({
      user_sum:__user_sum+_in
    });

  }

  resetUserShake(){
    this.setState({user_sum:0});
    this.isComplete = false;
  }

  render() {
    return (
      <div className="shakeTree">
        <audio ref={e=>this.shakeMusic=e}>
          <source src="shake.wav" type="audio/ogg"/>
          <source src="shake.wav" type="audio/mpeg"/>
          <embed height="0" width="0" src="shake.wav" />
        </audio>
        {/*背景*/}
        <img src={img_yysBg} className="yys_Bg" />
        {/*进度条*/}
        <div className="font">
          <p>赶紧摇，前{this.state.allDrawNumber}名就可以上墙哦！</p>
          <ProgressBar sys_sum={this.state.sys_sum} user_sum={this.state.user_sum} />
        </div>

        {/*使劲摇*/}
        <div className="sjy">
          <img src={img_sjy} />
        </div>

        {/*摇钱树*/}
        <div className="head">
          <div className="head-box">
            {/*<img src={img_yysS} className={`tree ${treeAnimationClassName}`} />*/}
            <img src={img_yysS} className="tree" />
            <div className="start">
              <img src={img_s1} className="s1 postion1"/>
              <img src={img_s1} className="s1 postion2"/>
              <img src={img_s1} className="s1 postion3"/>
              <img src={img_s1} className="s1 postion4"/>
              <img src={img_s1} className="s1 postion5"/>
              <img src={img_s1} className="s1 postion6"/>
              <img src={img_s2} className="s2 postion7"/>
              <img src={img_s3} className="s3 postion8"/>
              <img src={img_s4} className="s4 postion9"/>
            </div>
          </div>
        </div>

        {/*
        <h3>开始时间:{this.state.beginTime}</h3>
        <h3>结束时间:{this.state.endTime}</h3>
        <h3>耗时:{ this.state.endTime-this.state.beginTime>0?(this.state.endTime-this.state.beginTime)/1000+"秒":"摇到100%吧"}</h3>
        <button onClick={e=>{this.resetUserShake(e)}}>重置</button>
        */}
        <Alert isShow={this.state.alert_showFlag} msg={this.state.alert_msg} callback={
          e=>{
            this.setState({alert_showFlag:false});
            this.resetUserShake();
          }
        }/>
      </div>
    );
  }
}
      
/*<button onClick={e=>{this.userShake()}}>直接通过</button>*/

export default Shake;
