import React, {Component} from 'react';
import $ from 'jquery';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
          login: '',
          githubtUrl: '',
          avatarUrl: '',
        }
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
            <img src={this.state.avatarUrl} />
            <a href={this.state.githubtUrl}><h3>{this.state.login} Github Link</h3></a>
          </div>
        );
    }
}

export default About;