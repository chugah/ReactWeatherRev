import React, { Component } from 'react';

class ErrorModal extends Component {
	componentDidMount() {
		var modal = new Foundation.Reveal($('#error-modal'));
		modal.open();
	}
	render() {
		var { title } = this.props;
		return (
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
	}
}

export default ErrorModal;