import React, {Component,PropTypes} from 'react';
import List from './List';
class ContactsDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  render() {
    let data = [
      this.props.params
    ]
    return (
      <List data={data} isHideBtn="false" />
    );
  }
}

export default ContactsDetail;