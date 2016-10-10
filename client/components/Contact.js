import React, { Component } from 'react';

class Contact extends Component {
	constructor(props){
		super()

		this.state = {
			user_name: '',
			user_email: '',
			user_message: ''
		}
	}

	render(){
		return (
		  <div className="contact">
		    CONTACT
		    <form action="/sayHello" method="post">
		        <div>
		            <label 	htmlFor="name">Name:</label>
		            <input 	type="text" 
		            				id="name" 
		            				name="user_name" 
		            				onChange={event => this.onUsernameChange(event.target.value)} />
		        </div>
		        <div>
		            <label  htmlFor="mail">E-mail:</label>
		            <input  type="email" 
		            				id="mail" 
		            				name="user_email"
		            				onChange={event => this.onEmailChange(event.target.value)} />
		        </div>
		        <div>
		            <label  htmlFor="msg">Message:</label>
		            <textarea 
		            				id="msg" 
		            				name="user_message"
		            				onChange={event => this.onMessageChange(event.target.value)}></textarea>
		        </div>
		        
		        <div className="button">
		            <button type="button" 
		            				onClick={() => this.props.handleSubmit(this.state) }>Send Your Message</button>
		        </div>
		    </form>
		  </div>
		)
	}

	onUsernameChange (user_name) {
		this.setState({user_name})
	}

	onEmailChange (user_email) {
		this.setState({user_email})
	}

	onMessageChange (user_message) {
		this.setState({user_message})
	}

}

export default Contact;