import React, { Component } from 'react';

class ErrorHandler extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null
		};
	}
  
	componentDidCatch(error, info) {
		this.setState({
			error,
			info
		});
	}
  
	render() {
		return this.state.error
			? <h1>Oops, something went wrong.</h1>
			: this.props.children;
	}
}

export default ErrorHandler;