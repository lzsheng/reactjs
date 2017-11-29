import React, { Component } from 'react';

class Alert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
    }
    render() {
        if (!this.state.show) return null
        return (
            <div className="lzs-alert">
                <div className="lzs-alert__content">
                    <div className="lzs-alert__content__cont">亲～因为该域名没有在微信认证，可能会导致页面重排，请使用其它浏览器打开</div>
                    <div
                        className="lzs-alert__content__btngroup" onClick={() => {
                            this.setState({ show: false })
                            this.props.cb()
                        }}
                    >我知道了</div>
                </div>
            </div>
        );
    }
}

export default Alert;