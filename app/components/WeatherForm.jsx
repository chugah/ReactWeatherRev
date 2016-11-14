import React, { Component } from 'react';

var weather_icon_path = 'images/weather-icon.jpg';

class WeatherForm extends Component {
	onFormSubmit (e) {
		e.preventDefault();
		
		var location = this.refs.location.value;

		if (location.length > 0) {
			this.refs.location.value = '';
			this.props.onSearch(location);
		}
	}
	render() {
		return (
			<div className="row">
				<div className="small-12 columns">
					<form onSubmit={this.onFormSubmit.bind(this)}>
						<input type="search" ref="location" placeholder="Search weather by city" />
						<button className="expanded button hollow" id="form-button">					
							<img src={weather_icon_path} />
						</button>
					</form>
				</div>
			</div>
		);
	}
}

export default WeatherForm;



