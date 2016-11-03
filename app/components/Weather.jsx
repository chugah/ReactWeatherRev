import React, { Component } from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';

class Weather extends Component {
	constructor (props) {
		super(props);
		this.state = { isLoading: false };
	}

	handleSearch (location) {
		var that = this;
		this.setState({ isLoading: true });
		openWeatherMap.getTemp(location).then(function (temp) {
			that.setState({
				location,
				temp,
				isLoading: false
			});
		}, function (errorMessage) {
			that.setState({ isLoading: false })
			alert(errorMessage);
		});
	}
	
	renderMessage() {
		var { isLoading, location, temp } = this.state
		if (isLoading) {
			return <h3>Fetching weather...</h3>;
		} else if (location && temp) {
			return <WeatherMessage location={location} temp={temp} />;
		}
	}

	render() {
		return (
			<div>
				<h1>Get Weather</h1>
				<WeatherForm onSearch={this.handleSearch.bind(this)} />
				{this.renderMessage()}
			</div>
		);
	}
}

export default Weather;