import React, {Component} from 'react';

const List = (props) =>{
  return (
    <ul>
      {
        props.data.map((item,index)=>{
          return (
            <li key={index}>{item}</li>
          )
        })
      }
    </ul>
  )
};

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entry:{
        name:"",
        age:"",
        tel:""
      },
      history:[]
    };
  }
  _change(e){
    let obj = {};
    for(let key in this.state.entry){
      obj[key] = this.state.entry[key];
    }
    obj[e.target.id] = e.target.value;//state的key对应id的值
    this.setState({entry:obj});
  }
  _add(e){
    let arr = [];
    for (let key in this.state.entry) {
      arr.push(this.state.entry[key]);
    }
    let arrnew = this.state.history.slice();
    arrnew.push(arr);
    console.log(arrnew);
    this.setState({history:arrnew});
    this.setState({
      entry:{
        name:"",
        age:"",
        tel:""
      }
    });
  }
  render() {
    return (
      <div className="contacts">
        <ul className="formList">
          <li className="item"><label>姓名:<input id="name" type="text" onChange={e=>this._change(e)} value={this.state.entry.name}/></label></li>
          <li className="item"><label>年龄:<input id="age" type="tel" onChange={e=>this._change(e)} value={this.state.entry.age}/></label></li>
          <li className="item"><label>电话:<input id="tel" type="tel" onChange={e=>this._change(e)} value={this.state.entry.tel}/></label></li>
        </ul>
        <button onClick={e=>this._add(e)}>新增</button>
        <List data={this.state.history}/>
      </div>
    );
  }
}
export default Contacts;