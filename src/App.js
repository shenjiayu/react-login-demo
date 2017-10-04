import React from 'react';
import { connect } from 'react-redux';
import {
	Switch,
	Redirect,
	Route,
	Link,
	withRouter
} from 'react-router-dom';

import Home from './containers/Home';
import Profile from './containers/Profile';
import Login from './containers/Login';

import action from './actions';

let loggedIn = false;

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={ props => (
			loggedIn ? (
				<Component {...props} />
			) : (
				<Redirect push to='/login' />
			)
	)}/>
);

let App = ({ loggedIn, email, _logout }) => (
	<div className="content">
			{ loggedIn &&
				<div className="top-right links">
					<Link to="/">Home</Link>
					<Link to="/profile">Profile</Link>
					<Link to="#">{email}</Link>
					<Link to="#" onClick={(e) => {
						e.preventDefault();
						_logout();
					}}>Logout</Link>
				</div>
			}
		<Switch>
			<PrivateRoute exact path="/" component={Home} />
			<PrivateRoute exact path="/profile" component={Profile} />
			<Route exact path="/login" component={Login} />
		</Switch>
	</div>
);

const mapStateToProps = state => {
	loggedIn = state.user.loggedIn;
	return {
		loggedIn: state.user.loggedIn,
		email: state.user.email
	};
};

const mapDispatchToProps = dispatch => {
	return {
			_logout: () => {
					dispatch(action.logout());
			}
	}
}

App = withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(App));

export default App;
