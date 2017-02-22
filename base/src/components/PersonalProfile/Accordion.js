import React from 'react';
import $ from 'jquery';

class Accordion extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isShow : false
      };
    }
    showDetails(e) {

      //根据.cell-m的实际高度，更改TabPanle_content_text--flexible的高度。为了过渡动画的height能取到实际值-。-
      let _this = $(e.target);
      let _flexibleItem = _this.parents('.TabPanle_content--flexible').children('.TabPanle_content_text');
      let _flexibleItem_child_height = _flexibleItem.children('.cell').children('.cell-m').height()+"px";
      if(!this.state.isShow){
        _flexibleItem.height(_flexibleItem_child_height);
      }else{
        _flexibleItem.height(0);
      }
      
      this.setState((prevState, props) => ({
        isShow: !prevState.isShow
      }));

    }
    render(){
      return (
        <div>
          <div className="TabPanle_content TabPanle_content--flexible">
            <div className="TabPanle_content_title" onClick={e=>this.showDetails(e)}>
              <div className="cell">
                <div className="cell-m">{this.props.title}</div>
                <div className="cell-r"><span className={this.state.isShow?"arrow--top":"arrow--bottom"}></span></div>
              </div>
            </div>
            <div className="TabPanle_content_text">
              <div className="cell">
                <div className="cell-m">{this.props.children}</div>
              </div>
            </div>
          </div>
        </div>
      )
    }
}

export default Accordion;