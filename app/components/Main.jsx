import React, { Component } from 'react';
import Navigation from 'Navigation';

class Main extends Component {
	render() {
		return (
			<div>
				<Navigation />
				<div className="row">
					<div>
						{this.props.children}
					</div>
				</div>				
			</div>
		);
	}
}

export default Main;