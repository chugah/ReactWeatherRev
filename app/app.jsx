import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import Routes from 'Routes';

// Load Foundaiton
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

ReactDOM.render(
	<Router history={hashHistory} routes={Routes} />,
    document.getElementById('app')
);