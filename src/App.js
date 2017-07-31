import React from 'react';
import { connect } from 'react-redux';
import {
	Switch,
	Redirect,
	Route,
	Link,
	withRouter
} from 'react-router-dom';

import Home from './containers/home';
import Login from './containers/login';

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

let App = ({ loggedIn, email }) => (
	<div className="content">
		<div className="top-right links">
			{/* 由于只能返回单个node，所以暂时拆开来写 */}
			{ loggedIn &&
				<Link to="/">Home</Link>
			}
			{ loggedIn &&
				<Link to="#">{email}</Link>
			}
		</div>
		<Switch>
			<PrivateRoute exact path="/" component={Home} />
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
}

App = withRouter(connect(
	mapStateToProps
)(App));

export default App;
