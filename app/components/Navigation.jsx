import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

var map_path = 'images/us-map-two.jpg';
var weather_path = 'images/noaa_weather_alt.jpg';

class Navigation extends Component {
	onSearch(e) {
		e.preventDefault();
		alert('Not yet wired up');
	}
	
	renderWeatherImage() {
		return (
			<div className="expanded row">
    			<img src={weather_path} width="100%" />
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
						<li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>US Weather Data</IndexLink></li>
						<li><Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link></li>
						<li><Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link></li>
					</ul>
				</div>
				<div className="top-bar-right">
					<form onSubmit={this.onSearch}>
						<ul className="menu">
							<li>
								<input type="search" placeholder="Search Weather" />
							</li>
							<li>
								<input type="submit" className="button" value="Get Weather" />
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