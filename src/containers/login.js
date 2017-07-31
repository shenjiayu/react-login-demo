import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Redirect,
    withRouter
} from 'react-router-dom';
import login from '../actions';
import ErrorMsg from '../components/error-msg';

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

    componentDidMount() {
        document.title = 'Login';
    }

    render() {
        if (this.props.loggedIn) return <Redirect push to="/" />
        return (
            <div>
                <input
                    type="text"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this._onChangeEmail}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this._onchangePassword}
                />
                <button onClick={() => {
                    var credentials = {
                        email: this.state.email,
                        password: this.state.password
                    };
                    this.props._login(credentials);
                }}>
                LOG IN
                </button>
                <ErrorMsg error={this.props.error} />
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

const mapStateToProps = state => {
    return {
        loggedIn: state.user.loggedIn,
        email: state.user.email,
        error: state.user.error
    }
};

const mapDispatchToProps = dispatch => {
    return {
        _login: credentials => {
            dispatch(login(credentials))
        }
    }
}

Login = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Login));

export default Login;