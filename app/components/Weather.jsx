import React, { Component } from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';
import ErrorModal from 'ErrorModal';

class Weather extends Component {
	constructor (props) {
		super(props);
		this.state = { 
			isLoading: false,
			errorMessage: undefined,
		};
	}

	handleSearch (location) {
		var that = this;
		this.setState({ 
			isLoading: true,
			errorMessage: undefined,
			location: undefined,
			temp: undefined 
		});
		openWeatherMap.getTemp(location).then(function (temp) {
			that.setState({
				location,
				temp,
				isLoading: false
			});
		}, function (e) {
			that.setState({ 
				isLoading: false,
				errorMessage: e.message 
		});
			alert(errorMessage);
		});
	}

	handleLocation(location) {
		if (location && location.length > 0) {
			this.handleSearch(location);
			window.location.hash = '#/';
		}
	}

	componentDidMount() {
		var location = this.props.location.query.location;

		this.handleLocation(location);
	}

	componentWillReceiveProps(newProps) {
		var location = newProps.location.query.location;

		this.handleLocation(location);
	}
	
	renderMessage() {
		var { isLoading, location, temp } = this.state;
		if (isLoading) {
			return <h3>Fetching weather...</h3>;
		} else if (location && temp) {
			return <WeatherMessage location={location} temp={temp} />;
		}
	}

	renderError() {
		var { errorMessage } = this.state;
		if (typeof errorMessage === 'string') {
			return (
				<ErrorModal />
			);
		}
	}

	render() {
		return (
			<div>
				<h1 className="page-title">Get Weather</h1>
				<WeatherForm onSearch={this.handleSearch.bind(this)} />
				{this.renderMessage()}
				{this.renderError()}
			</div>
		);
	}
}

export default Weather;