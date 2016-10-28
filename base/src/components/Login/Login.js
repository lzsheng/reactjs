import React, {Component} from 'react';
import { withRouter } from 'react-router';
import auth from '../../Until/auth';

class Login extends Component {
  constructor(props) {
    super(props);
    console.log("Login",props);
    this.state = {}
  }
  handleSubmit(event) {
    event.preventDefault()

    const userName = this.refs.userName.value
    const passWord = this.refs.passWord.value

    auth.login(userName, passWord, (loggedIn) => {
      if (!loggedIn){
        return this.setState({ error: true })
      }

      const { location } = this.props

      //登录完成后,判断this.props.location.state.nextPathname,分发到相应的url
      if (location.state && location.state.nextPathname) {
        this.props.router.replace(location.state.nextPathname)
      } else {
        this.props.router.replace('/');
      }
    })
  }
  render() {
    return (
      <form onSubmit={ (e)=>(this.handleSubmit(e)) }>
        <h3>用户名:</h3><input ref="userName" type="text" placeholder="请键入用户名" defaultValue="lzsheng"/>
        <h3>密 码:<small>(123456)</small></h3><input ref="passWord" type="password" placeholder="请键入密码" defaultValue="123456"/>
        <button type="submit">login</button>
        {this.state.error && (
          <p>错了错了,账号是:lzsheng,密码123456</p>
        )}
      </form>
    );
  }
}

//通过withRouter方法导出的模块,其props拥有router对象(react-router 2.x版本新增)
//https://github.com/ReactTraining/react-router/blob/master/upgrade-guides/v2.4.0.md
export default withRouter(Login)