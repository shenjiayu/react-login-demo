import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

        this._onChangeEmail = this._onChangeEmail.bind(this);
        this._onchangePassword = this._onchangePassword.bind(this);
    }

    render() {
        if (this.props.loggedIn) return <Redirect push to="/" />
        return (
            <div>
                <input
                    type="text"
                    value={this.state.email}
                    onChange={this._onChangeEmail}
                />
                <input
                    type="password"
                    value={this.state.password}
                    onChange={this._onchangePassword}
                />
            </div>
        );
    }

    _onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    _onchangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.app.user.loggedIn
    }
};

Login = connect(
    mapStateToProps
)(Login);

export default Login;