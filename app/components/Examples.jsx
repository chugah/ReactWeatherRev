import React, { Component } from 'react';
import { Link } from 'react-router';

var new_york_path = 'images/new-york.jpg';
var los_angeles_path = 'images/los-angeles.jpg';
var austin_path = 'images/austin.jpg';

class Examples extends Component {
	render() {
		return (
			<div>
				<div className="columns small-12">
				<h1 className="text-centered">Examples</h1>
				<p>Here are a few locations to illustrate this web application:</p>
				</div>
				<div className="columns large-4 photo-container">
					<div className="photo">
				  		<img className="side-a" src={new_york_path} />	
				  		<div className="photo-desc side-b">
					  		<Link to='/?location=New York'><h3>New York, NY</h3></Link>
					  		<p>Get the weather in New York City so you are prepared.</p>						
						</div>
					</div>
				</div>	
				<div className="columns large-4 photo-container">
					<div className="photo">
				  		<img className="side-a" src={austin_path} />	
				  		<div className="photo-desc side-b">
					  		<Link to='/?location=Austin'><h3>Austin, TX</h3></Link>
					  		<p>Get the weather in Austin so you are prepared.</p>
							
						</div>
					</div>
				</div>
				<div className="columns large-4 photo-container">
					<div className="photo">
				  		<img className="side-a" src={los_angeles_path} />	
				  		<div className="photo-desc side-b">
					  		<Link to='/?location=Los Angeles'><h3>Los Angeles, CA</h3></Link>
					  		<p>Get the weather in Los Angeles so you are prepared.</p>					
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Examples;