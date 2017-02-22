import React from 'react';

const BaseInfo = (props) => {
    return (
    <div className="baseInfo">
      <div className="leftBox">
        <img src={"http://up.qqjia.com/z/18/tu20468_3.jpg"} alt="loading..."/>
        <div className="personalName">梁振盛</div>
      </div>
      <div className="rightBox">
        <div className="rightBox-top"> 
          <div className="cell">
            <div className="cell-m">本科</div>
            <div className="cell-r">广东</div>
          </div>
          <div className="cell">
            <div className="cell-m">1992.02</div>
            <div className="cell-r">广州</div>
          </div>
          <div className="cell">
            <div className="cell-m"><a className="eMail" href="mailto:372959130@qq.com">372959130@qq.com</a></div>
          </div>
        </div>
        <div className="rightBox-bottom">
          <div className="cell">
            <div className="cell-m">工作经验</div>
            <div className="cell-r">30 months</div>
          </div>
          <div className="cell skill">
            <div className="cell-l">
              <a href="https://www.linkedin.com/in/%E6%8C%AF%E7%9B%9B-%E6%A2%81-7ba3aa108?trk=chatin_wnc_redirect_pubprofile&trk=chatin_wnc_redirect_pubprofile">
              <img className="icon-linkedin" src="http://appimg.hicloud.com/hwmarket/files/application/icon144/0d91ccc4d2844901b43fb17988f8d43b.png" alt="linkedin-img"/>
              </a>
            </div>
            <div  className="cell-m">
              <div className="cell">
                <div className="cell-l"><i className="lightLine">&nbsp;</i></div>
                <div className="cell-m">html</div>
                <div className="cell-r">90</div>
              </div>
              <div className="cell">
                <div className="cell-l"><i className="lightLine">&nbsp;</i></div>
                <div className="cell-m">css</div>
                <div className="cell-r">90</div>
              </div>
              <div className="cell">
                <div className="cell-l"><i className="lightLine">&nbsp;</i></div>
                <div className="cell-m">javascript</div>
                <div className="cell-r">87</div>
              </div>
              </div>
          </div>
        </div>
      </div>
    </div>
    )
};

const BaseInfo2 = (props) => {
    return (
    <div className="baseInfo">
      用户基本信息
    </div>
    )
};

export default BaseInfo;