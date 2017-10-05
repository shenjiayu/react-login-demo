import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	Redirect,
	withRouter
} from 'react-router-dom';
import action from '../actions';
import ErrorMsg from '../components/error-msg';

class Login extends Component {

	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		};

		this.onChangeValue = this.onChangeValue.bind(this);
	}

	componentDidMount() {
		document.title = 'Login';
	}

	render() {
		if (this.props.loggedIn) return <Redirect push to="/" />;
		return (
			<div>
				<input
					name="email"
					type="text"
					placeholder="Email"
					value={this.state.email}
					onChange={this.onChangeValue}
				/>
				<input
					name="password"
					type="password"
					placeholder="Password"
					value={this.state.password}
					onChange={this.onChangeValue}
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

	onChangeValue(event) {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	}
}

const mapStateToProps = state => {
	return {
		loggedIn: state.user.loggedIn,
		email: state.user.email,
		error: state.user.error
	};
};

const mapDispatchToProps = dispatch => {
	return {
		_login: credentials => {
			dispatch(action.login(credentials));
		}
	};
};

Login = withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Login));

export default Login;
