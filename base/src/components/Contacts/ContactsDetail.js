import React, {Component,PropTypes} from 'react';
import List from './List';
import Storage from './Storage';

class ContactsDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  render() {
    return (
      <div className="contacts">
        姓名:{this.props.params.name} 年龄{this.props.params.age} 电话号码{this.props.params.tel}
      </div>
    );
  }
}

export default ContactsDetail;