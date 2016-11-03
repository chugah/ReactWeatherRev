import React, { Component } from 'react';
import Navigation from 'Navigation';

class Main extends Component {
	render() {
		return (
			<div>
				<Navigation />
				<h2>Main Component</h2>
				{this.props.children}
			</div>
		);
	}
}

export default Main;