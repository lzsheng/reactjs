import React, {Component,PropTypes} from 'react';
import Page from '../Page';
import List from './List';
import Storage from './Storage';

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entry:{
        name:"",
        age:"",
        tel:"",
        id:""
      },
      history: Storage.get() || []
    };
  }
  resetState(){
    this.setState({
      entry:{
        name:"",
        age:"",
        tel:""
      }
    });
  }
  updateHistory(arr){
    //保存数据,设置state
    this.setState({history:arr});
    Storage.save(arr);
  }
  _change(e){
    //输入框输入
    let obj = {};
    for(let key in this.state.entry){
      obj[key] = this.state.entry[key];
    }
    obj[e.target.id] = e.target.value;//state的key对应id的值
    obj.id = Date.parse(new Date());
    this.setState({entry:obj});
  }
  _add(e){
    //新增一条数据
    for(let key in this.state.entry){
      if(this.state.entry[key]==""){
        alert("请输入完整的联系人信息");
        return false;
      };
    }
    let newArr = [
      ...this.state.history,
      this.state.entry
    ]
    //保存数据,设置state
    this.updateHistory(newArr);
    //重置输入框
    this.resetState();
  }
  _Del(index){
    //删除一条数据,该方法传递给子组件,由子组件调用
    let newArr = this.state.history.slice();//拷贝数组
    newArr.splice(index,1);
    //保存数据,设置state
    this.updateHistory(newArr);
  }
  render() {
    return (
      <Page hasFooter={true}>
      <div className="contacts">
        <ul className="formList">
          <li className="item"><label>姓名:<input id="name" type="text" className="coolInput" onChange={e=>this._change(e)} value={this.state.entry.name}/></label></li>
          <li className="item"><label>年龄:<input id="age" type="tel" className="coolInput" onChange={e=>this._change(e)} value={this.state.entry.age}/></label></li>
          <li className="item"><label>电话:<input id="tel" type="tel" className="coolInput" onChange={e=>this._change(e)} value={this.state.entry.tel} maxLength="11"/></label></li>
        </ul>
        <a className="addBtn" onClick={e=>this._add(e)}>新增</a>
        <List data={this.state.history} _Del={this._Del.bind(this)}/>
      </div>
      </Page>
    );
  }
}

export default Contacts;