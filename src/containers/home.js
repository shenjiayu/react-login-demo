import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Home extends Component {

	componentDidMount() {
		document.title = 'Home';
	}

	render () {
		return (
			<div className="title m-b-md">
					React
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		loggedIn: state.user.loggedIn
	};
}

Home = withRouter(connect(
  mapStateToProps
)(Home));

export default Home;
