import React from 'react';

var WeatherMessage = ({location, temp}) => {
		return (
			<h3 className="text-center">The weather in {location} is {temp} &#x2109;.</h3>
		);
}

module.exports = WeatherMessage;