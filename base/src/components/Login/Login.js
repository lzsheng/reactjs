import React, {Component} from 'react';
import Page from '../Page';
import {Button,Toast} from 'react-weui';
import { withRouter } from 'react-router';
import auth from '../../Until/auth';

class Login extends Component {
  constructor(props) {
    super(props);
    console.log("Login",props);
    this.state = {
      error:false,
      btnDisabled : true
    }
  }
  handleChange(event) {
    let btnDisabled = event.target.value?false:true;
    this.setState({btnDisabled:btnDisabled});
  }
  handleSubmit(event) {
    event.preventDefault()

    const userName = "lzsheng"
    const passWord = this._inputPWD.value
    console.log(passWord);

    auth.login(userName, passWord, (loggedIn) => {
      if (!loggedIn){
        setTimeout(()=>{
          this.setState({ error: false });
        },3000);
        return this.setState({ error: true });
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
        <img src="http://img2.imgtn.bdimg.com/it/u=740050625,2532960297&fm=206&gp=0.jpg" />
        <h5>+86 131 4441 4163</h5>
        <label htmlFor="password">
          密码
          <input onChange={(e)=>(this.handleChange(e))} ref={(el)=>( this._inputPWD = el )} type="password" placeholder="请键入密码:123456"/>
        </label>
        {
          this.state.btnDisabled
          ?
          <Button type="primary" disabled>登录</Button>
          :
          <Button type="primary">登录</Button>
        }
        <p>登录遇到问题?</p>
      </form>
      <Toast icon="warn" iconSize="large" show={this.state.error}>password:123456</Toast>
      </Page>
    );
  }
}

//通过withRouter方法导出的模块,其props拥有router对象(react-router 2.x版本新增)
//https://github.com/ReactTraining/react-router/blob/master/upgrade-guides/v2.4.0.md
export default withRouter(Login)