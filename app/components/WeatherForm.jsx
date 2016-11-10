import React, { Component } from 'react';

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
						<button className="expanded button hollow">Submit</button>
					</form>
				</div>
			</div>
		);
	}
}

export default WeatherForm;