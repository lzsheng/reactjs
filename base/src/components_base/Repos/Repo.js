import React, {Component,PropTypes} from 'react';

class Repo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  render() {
    return (
      <div>
        <h4>Repo</h4>
        我是子路由匹配的组件:
        {this.props.params.name}
      </div>
    );
  }
}

export default Repo;