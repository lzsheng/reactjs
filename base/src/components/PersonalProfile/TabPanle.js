import React from 'react';
import { Link, IndexLink } from 'react-router';

const TabButton = (props) => {
    //     /personal/:tabId
    return (
    <div className="tabButton-box">
      <IndexLink to={{pathname:'/personal/tab1',query:{} }} activeClassName="tabActive">个人简介</IndexLink>
      <Link to={{pathname:'/personal/tab2',query:{} }} activeClassName="tabActive">技术能力</Link>
      <Link to={{pathname:'/personal/tab3',query:{} }} activeClassName="tabActive">作品展示</Link>
    </div>
    )
};

const TabPanle_1 = (props) => {
    return (
    <div>
      <div className="TabPanle_content">
        <div className="TabPanle_content_title">自我评价</div>
        <div className="TabPanle_content_text">
          <div>本人毕业于广州大学华软软件学院-软件工程系，毕业至今一直从事web前端开发工程师一职。我对web前端技术有着很高的热情，工作之余，我会在掘金，慕课网，极客学院和3wcfuns等论坛学习更新、更全面的前端技术。</div>
          <div className="freeLine">对前端组件化开发、javascript模块化、基于微信的应用开发、移动端响应式布局和页面性能优化等有一定的实践经验积累。目前，我会使用的前端技术有es6,react.js,require.js,sass,gulp,webpack,jquery等。</div>
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
        <div className="TabPanle_content_title">项目经历</div>
        <div className="TabPanle_content_text">
          <div>整理中...</div>
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
      <div className="TabPanle_content">
        <div className="TabPanle_content_title">require.js + sui mobile + gulp + sass 集成框架</div>
        <div className="TabPanle_content_text">
          <div>
            该框架由本人自己集成，使用gulp自动化构建生产环境的前端工程；结合sui mobile自带的路由组件 和 require.js 实现了JS模块化的SPA框架。
          </div>
          <div className="demoLink"><a href="https://lzsheng.github.io/funs/build/www/base/home/home.html"  target="_blank">极简demo</a></div>
          <div className="demoLink"><a href="https://lzsheng.github.io/funs/life/webapp/develop/www/base/index/index.html"  target="_blank">商城完整demo</a></div>
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