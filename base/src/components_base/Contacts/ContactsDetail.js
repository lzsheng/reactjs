import React, {Component,PropTypes} from 'react';
import Page from '../Page';
import List from './List';
import Storage from './Storage';

class ContactsDetail extends Component {
  constructor(props) {
    super(props);
    let id = this.props.location.query.id;//从参数获取用户ID
    let datas = Storage.get();//根据用户ID查找用户数据
    let thisIdData;//存放该ID的用户数据的数组(按道理该数组的长度只为1)
    datas.map(data=>{
      if(data.id==id){
        thisIdData = data;
      }
    });

    this.state = {
      thisIdData : thisIdData
    };
  }
  render() {
    return (
      <Page transition="B">
        <List data={[this.state.thisIdData]} isHideBtn="false" />
      </Page>
    );
  }
}

export default ContactsDetail;