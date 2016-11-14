import React from 'react';

var WeatherMessage = ({location, temp}) => {
		return (
			<h3 className="text-center">The weather in {location} is <span className="temp"> {temp} &#x2109;</span>.</h3>
		);
}

module.exports = WeatherMessage;