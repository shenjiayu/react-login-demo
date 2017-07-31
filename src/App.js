import React from 'react';
import { connect } from 'react-redux';
import {
	Redirect,
	Route,
	Link
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
		) }
	/>
);

let App = ({ loggedIn, email }) => (
	<div className="content">
		<div className="top-right links">
			{/* 由于只能返回单个node，所以暂时拆开来写 */}
			{ !loggedIn ? 
				(
					<Link to="/login">Login</Link>
				) : (
					<Link to="/">Home</Link>
				)
			}
			{ loggedIn &&
				<Link to="#">{email}</Link>
			}
		</div>
		<PrivateRoute exact path="/" component={Home} />
		<Route path="/login" component={Login} />
	</div>
);

const mapStateToProps = (state) => {
	loggedIn = state.app.user.loggedIn;
	return {
		loggedIn: state.app.user.loggedIn,
		email: state.app.user.email
	};
}

App = connect(
	mapStateToProps
)(App);

export default App;
