import React, { Component } from 'react';
import { Link } from 'react-router';

class Examples extends Component {
	render() {
		return (
			<div>
				<h1 className="text-centered">Examples</h1>
				<p>Here are a few example locations for illustration purposes:</p>
				<ol>
					<li>
						<Link to='/?location=New York'>New York, NY</Link>
					</li>
					<li>	
						<Link to='/?location=Austin'>Austin, TX</Link>
					</li>
					<li>
						<Link to='/?location=Los Angeles'>Los Angeles, CA</Link>
					</li>
				</ol>
			</div>
		);
	}
}

export default Examples;