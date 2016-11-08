import React, { Component } from 'react';

class About extends Component {
	render() {
		return (
			<div>
				<div className="columns small-12">
					<h1 className="text-centered">About NWS</h1>
					<p>The National Weather Service (NWS) is an application built using React. This application provides data about the current weather in a US city.</p>
					<p>Here are some of the tools put to work:</p>
					<ul>
						<li>
							<a href="https://facebook.github.io/react">React</a> - This is the JavaScript framework used.
						</li>
						<li>
							<a href="http://openweathermap.org">Open Weather Map</a> - The API from Open Weather Map allowed the search for weather data by city.
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default About;