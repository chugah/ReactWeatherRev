import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import ErrorModal from 'ErrorModal';

var map_path = 'images/us-map-two.jpg';
var weather_path = 'images/noaa_weather_alt.jpg';

class Navigation extends Component {
	onSearch(e) {
		e.preventDefault();
		var location = this.refs.search.value;
		var encodedLocation = encodeURIComponent(location);

		if (location.length > 0) {
			this.refs.search.value = '';
			window.location.hash = '#/?location=' + encodedLocation;
		} else {
			alert('Please try again');
		}		
	}
	
	renderWeatherImage() {
		return (
			<div>
				<div className="row" id="weather-site">
	    			<h1>U.S. Weather Service</h1>
	    		</div>
				<div className="expanded row">
	    			<img src={weather_path} width="100%" />
	    		</div>
	    	</div>
		);
	}
	render() {
		return (
		<div>
			<div className="top-bar">
				<div className="top-bar-left">
					
					<ul className="menu">
						<li><img src={map_path} className="us-map"  alt="US Map"/></li>
						<li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>U.S. Weather</IndexLink></li>
						<li><Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About Us</Link></li>
						<li><Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link></li>
					</ul>
				</div>
				<div className="top-bar-right">
					<form onSubmit={this.onSearch.bind(this)}>
						<ul className="menu">
							<li>
								<input type="search" placeholder="Search weather by city" ref="search" />
							</li>
							<li>
								<input type="submit" className="button hollow" value="Submit" />
							</li>
						</ul>
					</form>
				</div>
			</div>
			{this.renderWeatherImage()}
		</div>	
		);
	}
}

export default Navigation;