import React from 'react';
import { Link, IndexLink } from 'react-router';
import Accordion from './Accordion';

const TabButton = (props) => {
    //     /personal/:tabId
    return (
    <div className="tabButton-box">
      <IndexLink to={{pathname:'/personal/tab1',query:{} }} activeClassName="tabActive">个人简介</IndexLink>
      <Link to={{pathname:'/personal/tab2',query:{} }} activeClassName="tabActive">技术能力</Link>
      <Link to={{pathname:'/personal/tab3',query:{} }} activeClassName="tabActive">作品展示</Link>
      <Link to={{pathname:'/personal/tab4',query:{} }} activeClassName="tabActive">项目经验</Link>
    </div>
    )
};

const TabPanle_1 = (props) => {
    return (
    <div>
      <div className="TabPanle_content">
        <div className="TabPanle_content_title">自我评价</div>
        <div className="TabPanle_content_text">
          <div>我对web前端技术有着很高的热情，工作之余，我会在掘金，w3ctech，w3cfuns，慕课网和极客学院等网站学习更新、更全面的前端技术。</div>
          <div className="freeLine">对前端组件化开发、javascript模块化（AMD）、基于微信的H5应用开发、移动端响应式布局和页面性能优化等有一定的实践经验。目前，我会使用的前端技术包含ES6,react.js,require.js,sass,gulp,webpack,jquery等。</div>
        </div>
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
        <div className="TabPanle_content_title">工作经历</div>
        <div className="TabPanle_content_text">
          <div className="cell">
            <div className="cell-m">广州山腾信息科技有限公司</div>
            <div className="cell-r">2014年07月 - 2015年01月</div>
          </div>
        </div>
        <div className="TabPanle_content_text">
          <div className="cell">
            <div className="cell-m">广东国笔科技股份有限公司</div>
            <div className="cell-r">2015年03月 - 2015年06月</div>
          </div>
        </div>
        <div className="TabPanle_content_text">
          <div className="cell">
            <div className="cell-m">广州广电运通信息科技有限公司</div>
            <div className="cell-r">2015年06月 - 至今</div>
          </div>
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
          <div>html、css、javascript、ajax、jquery</div>
          <div>rem布局、flex box布局、sass、一般的交互动画、photoshop</div>
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
      <div className="TabPanle_content">
        <div className="TabPanle_content_title">require.js + sui mobile + gulp + sass 集成框架</div>
        <div className="TabPanle_content_text">
          <div>
            该框架由本人集成，使用gulp自动化构建生产环境的前端工程；结合sui mobile自带的路由组件 和 require.js 实现了JS模块化的SPA框架。
          </div>
          
          <div className="demoLink"><a href="https://lzsheng.github.io/funs/life/webapp/develop/www/base/index/index.html"  target="_blank">商城完整demo</a></div>
          <div className="demoLink"><a href="https://lzsheng.github.io/funs/build/www/base/home/home.html"  target="_blank">极简demo</a></div>
        </div>
      </div>

      <div className="TabPanle_content">
        <div className="TabPanle_content_title">大转盘</div>
        <div className="TabPanle_content_text">
          <div>
            rem布局、flex布局实例（支持各个分辨率的移动设备）
          </div>
          <div className="demoLink"><a href="https://lzsheng.github.io/funs/games/develop/www/base/wheel/"  target="_blank">传送门</a></div>
        </div>
      </div>

      <div className="TabPanle_content">
        <div className="TabPanle_content_title">sass公用模块</div>
        <div className="TabPanle_content_text">
          <div>
            该项目整理了自己常用的SASS---mixin,function和常用的文件结构等
          </div>
          <div className="demoLink"><a href="https://github.com/lzsheng/sass"  target="_blank">传送门</a></div>
        </div>
      </div>

      <div className="TabPanle_content">
        <div className="TabPanle_content_title">更多项目，正在整理中...</div>
        <div className="TabPanle_content_text">
          <div>
            this project is coding ...
          </div>
          <div className="demoLink"><a href="https://github.com/lzsheng"  target="_blank">我的 Github</a></div>
        </div>
      </div>

      <div className="TabPanle_content">
        <div className="TabPanle_content_title">关于此简历</div>
        <div className="TabPanle_content_text">
          <div>
            本简历使用了react.js、react-router、es6、webpack构建
          </div>
          <div>
            使用sass编写样式，使用rem和flexBox布局，使用CSS伪类解决边框1px在retina屏的显示问题
          </div>
        </div>
      </div>
      
    </div>
    )
};

class TabPanle_4 extends React.Component {
    constructor(props) {
      super(props);
    }
    render(){
      return (
        <div>
          <Accordion title={`广电运通研究院2017年年会抽奖系统`}>
            <div className="TabPanle_content">
              <div className="TabPanle_content_title">项目时间：</div>
              <div className="TabPanle_content_text">
                <div>2016-12 至 2017-01</div>
              </div>
              <div className="TabPanle_content_title">项目描述：</div>
              <div className="TabPanle_content_text">
                <div>该项目为广电运通2017年年会现场使用的抽奖系统，其中包括：微信端的摇摇树，现场大屏幕一、二等奖的3D抽奖系统（pc端）、现场大屏幕三等奖翻盘系统（pc端）</div>
              </div>
              <div className="TabPanle_content_title">应用技术：</div>
              <div className="TabPanle_content_text">
                <div>react.js + three.js + es6 + webpack + sass + rem布局 + flexbox布局</div>
              </div>
              <div className="TabPanle_content_title">项目职责：</div>
              <div className="TabPanle_content_text">
                <div>1.框架选型</div>
                <div>2.静态页面的制作，根据设计图和需求文档划分react组件，编写相应的组件和css</div>
                <div>3.完成交互动画的制作</div>
                <div>4.使用ajax与后台开发对接数据</div>
                <div>5.使用webpack打包生产环境的生产包</div>
              </div>
            </div>
          </Accordion>
          <Accordion title={`广电运通生活平台（移动端-微信）`}>
            <div className="TabPanle_content">
              <div className="TabPanle_content_title">项目时间：</div>
              <div className="TabPanle_content_text">
                <div>2016-07 至 2016-10</div>
              </div>
              <div className="TabPanle_content_title">项目描述：</div>
              <div className="TabPanle_content_text">
                <div>该项目的数据来源于百度糯米，涉及的功能包括商品下单、根据地理位置查询店铺及商品、微信支付、订单查询、用户注册登陆等</div>
              </div>
              <div className="TabPanle_content_title">应用技术：</div>
              <div className="TabPanle_content_text">
                <div>zepto.js + sui mobile + require.js模块化 + gulp打包 + sass + flexbox布局 + 微信jssdk</div>
              </div>
              <div className="TabPanle_content_title">项目职责：</div>
              <div className="TabPanle_content_text">
                <div>1.框架选型</div>
                <div>2.静态页面的制作，根据PSD文件制作静态页面(HTML、CSS、JS)</div>
                <div>3.使用ajax与后台开发对接数据</div>
                <div>4.使用gulp打包生产环境的生产包</div>
              </div>
            </div>
          </Accordion>
          <Accordion title={`广电运通抽奖游戏平台（移动端-微信 + PC端）`}>
            <div className="TabPanle_content">
              <div className="TabPanle_content_title">项目时间：</div>
              <div className="TabPanle_content_text">
                <div>2016-04 至 2016-12</div>
              </div>
              <div className="TabPanle_content_title">项目描述：</div>
              <div className="TabPanle_content_text">
                <div>该项目为公司对外提供的抽奖游戏平台，其中的抽奖游戏包括：大转盘、摇一摇、母亲节贺卡等</div>
              </div>
              <div className="TabPanle_content_title">应用技术：</div>
              <div className="TabPanle_content_text">
                <div>jquery.js + require.js模块化 + gulp打包 + sass + rem布局 + flexbox布局</div>
              </div>
              <div className="TabPanle_content_title">项目职责：</div>
              <div className="TabPanle_content_text">
                <div>1.框架选型</div>
                <div>2.静态页面的制作，根据PSD文件制作静态页面(HTML、CSS、JS)</div>
                <div>3.完成交互动画的制作</div>
                <div>4.使用ajax与后台开发对接数据</div>
                <div>5.使用gulp打包生产环境的生产包</div>
              </div>
            </div>
          </Accordion>
          <Accordion title={`河北银行微信银行（移动端-微信）`}>
            <div className="TabPanle_content">
              <div className="TabPanle_content_title">项目时间：</div>
              <div className="TabPanle_content_text">
                <div>2016-01 至 2016-04</div>
              </div>
              <div className="TabPanle_content_title">项目描述：</div>
              <div className="TabPanle_content_text">
                <div>河北银行微信公众号，涉及查询余额、绑定银行卡、贷款预约、附近网点排队取号、银行社区模版、大转盘、摇一摇抽奖等业务</div>
              </div>
              <div className="TabPanle_content_title">应用技术：</div>
              <div className="TabPanle_content_text">
                <div>jquery.js + sass + 微信jssdk</div>
              </div>
              <div className="TabPanle_content_title">项目职责：</div>
              <div className="TabPanle_content_text">
                <div>1.框架选型</div>
                <div>2.静态页面的制作，根据PSD文件制作静态页面(HTML、CSS、JS)</div>
                <div>3.使用ajax与后台开发对接数据</div>
                <div>4.使用jssdk调用微信支付，分享等功能</div>
              </div>
            </div>
          </Accordion>
          <Accordion title={`雅士利-欢乐购电商平台一期（移动端-微信）`}>
            <div className="TabPanle_content">
              <div className="TabPanle_content_title">项目时间：</div>
              <div className="TabPanle_content_text">
                <div>2015-11 至 2016-01</div>
              </div>
              <div className="TabPanle_content_title">项目描述：</div>
              <div className="TabPanle_content_text">
                <div>该项目主要面对的客户为雅士利、蒙牛集团集团员工购买其集团商品的平台，涉及商品下单、物流查询、订单查询、在线支付、会员积分、返现、优惠券等流程</div>
              </div>
              <div className="TabPanle_content_title">应用技术：</div>
              <div className="TabPanle_content_text">
                <div>jquery.js + jquery ui + sass</div>
              </div>
              <div className="TabPanle_content_title">项目职责：</div>
              <div className="TabPanle_content_text">
                <div>1.框架选型</div>
                <div>2.静态页面的制作，根据PSD文件制作静态页面(HTML、CSS、JS)</div>
                <div>3.使用ajax与后台开发对接数据</div>
                <div>4.使用jssdk调用微信支付</div>
              </div>
            </div>
          </Accordion>
          <Accordion title={`雅士利-直供电商平台（移动端-微信）`}>
            <div className="TabPanle_content">
              <div className="TabPanle_content_title">项目时间：</div>
              <div className="TabPanle_content_text">
                <div>2015-6 至 2015-11</div>
              </div>
              <div className="TabPanle_content_title">项目描述：</div>
              <div className="TabPanle_content_text">
                <div>该项目主要处理批发商与供货商之间的订货业务，涉及商品下单、物流查询、订单查询、在线支付、业务员审核订单等流程</div>
              </div>
              <div className="TabPanle_content_title">应用技术：</div>
              <div className="TabPanle_content_text">
                <div>zepto.js + GMU UI + sass</div>
              </div>
              <div className="TabPanle_content_title">项目职责：</div>
              <div className="TabPanle_content_text">
                <div>1.框架选型</div>
                <div>2.静态页面的制作，根据PSD文件制作静态页面(HTML、CSS、JS)</div>
                <div>3.使用ajax与后台开发对接数据</div>
                <div>4.使用jssdk调用微信支付，分享等功能</div>
                <div>5.抽取公用代码，压缩代码等</div>
              </div>
            </div>
          </Accordion>
          <Accordion title={`问果商城（移动端 + PC端）`}>
            <div className="TabPanle_content">
              <div className="TabPanle_content_title">项目时间：</div>
              <div className="TabPanle_content_text">
                <div>2015-3 至 2015-6</div>
              </div>
              <div className="TabPanle_content_title">项目描述：</div>
              <div className="TabPanle_content_text">
                <div>集成B2B,O2O多重商业模式的电子商城项目，有PC端和移动端的商城</div>
              </div>
              <div className="TabPanle_content_title">应用技术：</div>
              <div className="TabPanle_content_text">
                <div>zepto.js + sea.js + GMU UI</div>
              </div>
              <div className="TabPanle_content_title">项目职责：</div>
              <div className="TabPanle_content_text">
                <div>1.修复因浏览器版本不同而引起的兼容性问题，修复已知bug</div>
                <div>2.按新需求编写与添加JS模块组件（基于sea.js模块化js）</div>
                <div>3.静态页面的制作，根据PSD文件制作静态页面(HTML、CSS、JS) </div>
                <div>4.使用ajax与后台开发对接数据</div>
              </div>
            </div>
          </Accordion>
          <Accordion title={`山腾智能WiFi商城（移动端）`}>
            <div className="TabPanle_content">
              <div className="TabPanle_content_title">项目时间：</div>
              <div className="TabPanle_content_text">
                <div>2014-7 至 2015-1</div>
              </div>
              <div className="TabPanle_content_title">项目描述：</div>
              <div className="TabPanle_content_text">
                <div>该项目是基于智能wifi为载体的电商系统，用户连上wifi后可以看到该商家的商家信息、商品、广告等等。商品可以进行评价、下单等操作</div>
              </div>
              <div className="TabPanle_content_title">应用技术：</div>
              <div className="TabPanle_content_text">
                <div>jquery.js + dojo.js</div>
              </div>
              <div className="TabPanle_content_title">项目职责：</div>
              <div className="TabPanle_content_text">
                <div>1.设计界面风格和页面布局</div>
                <div>2.根据设计图制作静态界面，并通过javascript+ajax+jquery完成用户的交互操作</div>
                <div>3.与后台开发配合对接数据接口</div>
              </div>
            </div>
          </Accordion>
        </div>
      )
    }
}

class TabPanle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
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
      case "tab4":
        showPanle = <TabPanle_4 />;
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