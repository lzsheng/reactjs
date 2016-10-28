import React, {Component} from 'react';
import { withRouter } from 'react-router';
import $ from 'jquery';
import auth from '../../Until/auth';

class About extends Component {
    constructor(props) {
        super(props);
        console.log("About",props);
        this.state = {
          login: '',
          githubtUrl: '',
          avatarUrl: '',
        }
    }
    _logout(e){
        console.log("点击了'模拟注销'按钮");
        let cb = () =>{
            this.props.router.replace("/");
        }
        auth.logout(cb);
    }
    componentDidMount() {
        $.get(this.props.source||'https://api.github.com/users/lzsheng', (result) => {
            console.log(result);
            const data = result;
            if (data) {
              this.setState({
                    login: data.login,
                    githubtUrl: data.html_url,
                    avatarUrl: data.avatar_url
              });
            }
        });
    }
    render() {
        return (
          <div className="about">
            <img src={this.state.avatarUrl||'../img/8055289.png'} />
            <a href={this.state.githubtUrl}><h3>{this.state.login} Github Link</h3></a>
            <div className="logoutBtn" onClick={e=>(this._logout(e))}><span>模拟注销</span></div>
          </div>
        );
    }
}

export default withRouter(About);