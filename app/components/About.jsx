import React, { Component } from 'react';

var open_weather_map_path = 'images/open-weather-map-alt.jpg';
var react_path = 'images/react-alt.jpg';

class About extends Component {
	render() {
		return (
			<div>
				<div className="columns small-12">
					<h1 className="text-centered">About NWS</h1>
					<p>The National Weather Service (NWS) is an application built using React. 
					This application provides data about the current weather in a US city.</p>
					<p>Here are some of the tools put to work:</p>
				</div>
				<div className="columns large-6 content">
					<div id="block-1">
						<img src={react_path}/>
						<p className="about-p">React makes it painless to create interactive UIs. 
						Design simple views for each state in your application, and React will 
						efficiently update and render the right components when your data changes.</p>
						<a className="primary hollow button" href="https://facebook.github.io/react" target="_blank">Learn More</a>
					</div>
				</div>
				<div className="columns large-6 content">
					<div id="block-2">
						<img src={open_weather_map_path}/>
						<p className="about-p">Open Weather Map is an online service that provides weather data, 
						including current weather data, forecasts, and historical data to the developers of web 
						services and mobile applications.</p>
						<a className="alert hollow button" href="http://openweathermap.org" target="_blank">Learn More</a>
					</div>
				</div>
			</div>
		);
	}
}

export default About;