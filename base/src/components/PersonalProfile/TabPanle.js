import React from 'react';
import { Link, IndexLink } from 'react-router';

const TabButton = (props) => {
    //     /personal/:tabId
    return (
    <div className="tabButton-box">
      <IndexLink to={{pathname:'/personal/tab1',query:{} }} activeClassName="tabActive">个人简介</IndexLink>
      <Link to={{pathname:'/personal/tab2',query:{} }} activeClassName="tabActive">技术能力</Link>
      <Link to={{pathname:'/personal/tab3',query:{} }} activeClassName="tabActive">市场价格</Link>
    </div>
    )
};

const TabPanle_1 = (props) => {
    return (
    <div>
      <div className="TabPanle_content">
        <div className="TabPanle_content_title">自我评价</div>
        <div className="TabPanle_content_text">我性格热情、开朗并对web前端开发有较高的热情并且有一定的开发经验，平时我会在慕课网，极客学院和3wcfuns论坛学习，在校期间曾自学php,javascript,jquery,ajax等。 
      目前，我会使用的前端框架有sea.js,bootstrap,jquery,zepto,dojo等，对传统PC端的网页、移动端的web、响应式布局、javascript模块化和网页优化有一定的了解和实践经验。</div>
      </div>
      <div className="TabPanle_content">
        <div className="TabPanle_content_title">教育经历</div>
        <div className="TabPanle_content_text">
          <div>广州大学华软软件学院（2011/09–2015/07)</div>
          <div>专业名称:软件工程系-移动互联网应用与开发</div>
          <div>学历：本科</div>
        </div>
      </div>
      <div className="TabPanle_content">
        <div className="TabPanle_content_title">荣誉</div>
        <div className="TabPanle_content_text">
          <div>广电运通2016年年度优秀员工</div>
          <div>山腾科技2014年年度优秀新员工</div>
          <div>2014 - 2015学年学院三等奖学金</div>
        </div>
      </div>
      <div className="TabPanle_content">
        <div className="TabPanle_content_title">语言能力</div>
        <div className="TabPanle_content_text">
          <div>普通话、粤语</div>
        </div>
      </div>
    </div>
    )
};

const TabPanle_2 = (props) => {
    return (
    <div>

      <div className="TabPanle_content">
        <div className="TabPanle_content_title">基础技术栈</div>
        <div className="TabPanle_content_text">
          <div>html、css、javascript、ajax、photoshop</div>
          <div>rem布局、flex box布局、sass、一般的交互动画</div>
          <div>ES6、promise</div>
        </div>
      </div>

      <div className="TabPanle_content">
        <div className="TabPanle_content_title">前端自动化构建工具</div>
        <div className="TabPanle_content_text">
          <div className="cell">
            <div className="cell-m">gulp</div>
            <div className="cell-r">擅长</div>
          </div>
          <div className="cell">
            <div className="cell-m">webpack</div>
            <div className="cell-r">熟练</div>
          </div>
        </div>
      </div>

      <div className="TabPanle_content">
        <div className="TabPanle_content_title">技术、框架</div>
        <div className="TabPanle_content_text">
          <div className="cell">
            <div className="cell-m">jquery.js、zepto.js</div>
            <div className="cell-r">擅长</div>
          </div>
          <div className="cell">
            <div className="cell-m">require.js</div>
            <div className="cell-r">擅长</div>
          </div>
          <div className="cell">
            <div className="cell-m">ajax</div>
            <div className="cell-r">擅长</div>
          </div>
          <div className="cell">
            <div className="cell-m">react.js（react-router、es6、webpack、hot-loader）</div>
            <div className="cell-r">熟练</div>
          </div>
          <div className="cell">
            <div className="cell-m">vue.js v2.x+</div>
            <div className="cell-r">良好</div>
          </div>
          <div className="cell">
            <div className="cell-m">weUI、SUI mobile</div>
            <div className="cell-r">擅长</div>
          </div>
          <div className="cell">
            <div className="cell-m">BootStrap、easyUI</div>
            <div className="cell-r">熟练</div>
          </div>
        </div>
      </div>

      <div className="TabPanle_content">
        <div className="TabPanle_content_title">微信相关</div>
        <div className="TabPanle_content_text">
          <div className="cell">
            <div className="cell-m">JSSDK</div>
            <div className="cell-r">熟练</div>
          </div>
          <div className="cell">
            <div className="cell-m">微信小程序</div>
            <div className="cell-r">良好</div>
          </div>
        </div>
      </div>

    </div>
    )
};

const TabPanle_3 = (props) => {
    return (
    <div>
      我是tab3
    </div>
    )
};

class TabPanle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    // console.log("TabPanle",props)
  }
  render() {

    let showPanle = null;
    let tabId = this.props.params.tabId;
    switch (tabId){
      case "tab2":
        showPanle = <TabPanle_2 />;
        break;
      case "tab3":
        showPanle = <TabPanle_3 />;
        break;
      default:
        showPanle = <TabPanle_1 />;
    }

    return (
      <div>
        <TabButton />
        {showPanle}
      </div>
    );

  }
}

export default TabPanle;