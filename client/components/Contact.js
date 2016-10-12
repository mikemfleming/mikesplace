import React, { Component } from 'react';
import Message from './Message';

import 'whatwg-fetch';

class Contact extends Component {
	constructor(props){
		super()

		this.state = {
			showMessage: true,
			userRetry: false
		}
	}

	render(){
		return (
		  <div className="contact">
		    
		    { this.state.showMessage ? 
		    	<Message handleSubmit={this.handleSubmit.bind(this)} /> :
		    	<h1>nice work!</h1> }
		  	
	      	<div className="social-media">
	      		<a href="https://www.linkedin.com/in/mikemfleming">
			  		<img src="assets/linkedin-icon copy.png" />
	      		</a>
	      		<a href="https://github.com/mikemfleming">
			  		<img src="assets/download copy.png" />
	      		</a>
	      		<a href="https://angel.co/mikemfleming">
		  			<img src="assets/peace_large copy.png"  />
	      		</a>
	      	</div>
		  </div>
		)
	}

	// TODO: add email verification in message.js, protection from deadly hackers in here
	handleSubmit ({ user_name, user_email, user_message }) {

		fetch('/sayHello', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			// hack protection
			body: JSON.stringify({ user_name, user_email, user_message})
		}).then(({status}) => { 
			if (status != 200) {
				// if error, prompt user to try again
			} else {
				// hide message, show success
				this.setState({ showMessage: false })
			}
		})
		// on success
	}
}

export default Contact;