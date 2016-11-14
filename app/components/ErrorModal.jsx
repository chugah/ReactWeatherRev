import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

class ErrorModal extends Component {
	componentDidMount() {
		var { title, location } = this.props;
		var modalMarkup = (
			<div id="error-modal" className="reveal tiny text-center" data-reveal="">
				<h4>{title}</h4>
				<p>City not found. Please enter a new city.</p>
				<p>
					<button className="button hollow" data-close="">
					OK
					</button>
				</p>
			</div>
		);

		var $modal = $(ReactDOMServer.renderToString(modalMarkup));
		$(ReactDOM.findDOMNode(this)).html($modal);
		
		var modal = new Foundation.Reveal($('#error-modal'));
		modal.open();
	}

	render() {
		
		return (
			<div></div>
		);
	}
}

export default ErrorModal;