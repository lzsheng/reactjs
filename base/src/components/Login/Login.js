import React, {Component} from 'react';
import Page from '../Page';
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
      <Page transition="B">
      <form className="login" onSubmit={ (e)=>(this.handleSubmit(e)) }>
        <h2>Login</h2>
        <div>User Name</div>
        <div><input ref="userName" type="text" className="coolInput" placeholder="请键入用户名" defaultValue="lzsheng"/></div>
        <div>Pass Word</div>
        <div><input ref="passWord" type="password" className="coolInput" placeholder="请键入密码:123456"/></div>
        <div><button type="submit">login</button></div>
        {this.state.error && (
          <p>错了错了,账号是:lzsheng,密码123456</p>
        )}
      </form>
      </Page>
    );
  }
}

//通过withRouter方法导出的模块,其props拥有router对象(react-router 2.x版本新增)
//https://github.com/ReactTraining/react-router/blob/master/upgrade-guides/v2.4.0.md
export default withRouter(Login)