import React, {Component,PropTypes} from 'react';
/**
 * 显示记录的List
 */

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  _delItem(e,index){
      console.log(e,index);
      this.props._Del(index);
  }
  render(){
    return (
        <ul className="list">
            {
                this.props.data.map((item,index)=>{
                    return (
                    <li key={index}>{index+1}. 姓名:{item.name} 年龄:{item.age} 电话:{item.tel} <span className="deleteItem" onClick={ e=>(this._delItem(e,index)) }>删除</span></li>
                    )
                })
            }
        </ul>
    )
  }
}

List.propTypes = {
  data: React.PropTypes.array.isRequired,
};

export default List;