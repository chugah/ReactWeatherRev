import React from 'react';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import Main from 'Main';
import Weather from'Weather';
import About from 'About';
import Examples from 'Examples';

export default (
	<Route path="/" component={Main}>
		<Route  path="about" component={About} />
		<Route  path="examples" component={Examples} />
		<IndexRoute component={Weather} />		
	</Route>
);