import React, { Component } from 'react';
import Message from './Message';

import 'whatwg-fetch';

class Contact extends Component {
	constructor(props){
		super()

		this.state = {
			showMessage: true
		}
	}

	render(){
		return (
		  <div className="contact">
		    
		    { this.state.showMessage ? 
		    	<Message handleSubmit={this.handleSubmit.bind(this)} /> :
		    	<div>nice work!</div> }
		  	
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

	// TODO: add email verification, protection from deadly hackers, hide form after success 
	handleSubmit ({ user_name, user_email, user_message }) {
		// email verification

		fetch('/sayHello', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			// hack protection
			body: JSON.stringify({ user_name, user_email, user_message})
		}).then(({status}) => { 
			console.log('~~~~~~~~~~~status', status)
			console.log(this.setState({ showMessage: false }))
		})
		// on success
	}
}

export default Contact;