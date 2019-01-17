import React, { Component } from 'react';

class ErrorBoundary extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		}
	}

	// new life cycle method 
	// any errors it will run 

	componentDidCatch(error, info){
		this.setState({ hasError: true })
	}
	
	render() {

		if(this.state.hasError){
			return <h1>oops. that is not good</h1>
		} else {
			return this.props.children 
		}
	}
}

export default ErrorBoundary;