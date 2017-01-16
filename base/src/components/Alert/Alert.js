import React from 'react';

class Alert extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  _closeAlert(e){
    // this.setState({isShow:false});
    // console.log(this.props.callback);
    typeof this.props.callback == 'function' && this.props.callback()
  }
  
  render() {
    let {isShow,msg} = this.props;
    let style = {
      display : isShow ? "block" : "none"
    }
    return isShow ? (
      <div className="modal" style={style}>
        <div className="modal-inner">
          {/*<div className="modal-title">Custom Title!</div>*/}
          <div className="modal-text">{msg}</div>
        </div>
        <div className="modal-buttons ">
          <div className="modal-button modal-button-bold" onClick={e=>{this._closeAlert(e)}}>确定</div>
        </div>
      </div>
    ):null;
  }
}

export default Alert;