import React, {Component,PropTypes} from 'react';
import { Link } from 'react-router';
/**
 * 显示记录的List
 */

class List extends Component {
  constructor(props) {
    super(props);
    console.log(props);
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
                    <li key={index}>{index+1}. 姓名:{item.name} 年龄:{item.age} 电话:{item.tel}
                        <div style={!!this.props.isHideBtn ? {display:"none"}:{display:"block"}}>
                            <Link className="detailItem" to={{pathname:'/contacts/ContactsDetail',query:{id:item.id} }}>详情</Link>
                            <span className="deleteItem" onClick={ e=>(this._delItem(e,index)) }>删除</span>
                        </div>
                    </li>
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
